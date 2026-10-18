#!/usr/bin/env python3
"""Prepare website-ready gallery images from the source photo folder.

This keeps the originals in the design folder untouched and creates public,
web-safe derivatives in the project. Run it from the project root:

  python3 scripts/prepare-gallery-assets.py

Use --force to overwrite existing generated outputs.
"""

from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image, ImageOps

SOURCE_ROOT = Path('/Users/carolineacuda/Claude/Projects/knot_perfect_website/website photos')
PROJECT_ROOT = Path(__file__).resolve().parents[1]
DEST_ROOT = PROJECT_ROOT / 'public' / 'gallery'

ITEMS = {
    'blue-gradient-wall-hanging': {'source': 'blue_gradient_wall_hanging.jpeg', 'title': 'Blue gradient wall hanging'},
    'colour-gradient-wall-hanging': {'source': 'colour_gradient_wall_hanging.jpeg', 'title': 'Colour gradient wall hanging'},
    'leaf-wall-hanging': {'source': 'leaf_wall_hanging.jpeg', 'title': 'Leaf wall hanging'},
    'framed-wall-hanging': {'source': 'framed_wall_hanging.jpeg', 'title': 'Framed wall hanging'},
    'lavender-plant-hanger': {'source': 'lavender_plant_hanger.jpeg', 'title': 'Lavender plant hanger'},
    'double-plant-hangers': {'source': 'double_plant_hangers.jpeg', 'title': 'Double plant hangers'},
    'rainbow-keyring': {'source': 'rainbow_keyring\\.jpeg', 'title': 'Rainbow keyring'},
    'expressive-keyrings': {'source': 'expressive_weed_keyrings.jpeg', 'title': 'Expressive keyrings'},
    'intricate-bookmarks': {'source': 'intricate_bookmarks.jpeg', 'title': 'Intricate bookmarks'},
    'celtic-keyrings': {'source': 'celtic_syle_bookmarks.jpeg', 'title': 'Celtic style keyrings'},
    'coasters': {'source': 'coasters.jpeg', 'title': 'Coasters'},
    'feathered-owl': {'source': 'feathured_owl.jpeg', 'title': 'Feathered owl'},
    'angel-wall-hanging': {'source': 'angel_with_wings.jpeg', 'title': 'Angel wall hanging'},
    'autumn-sun-mandala': {'source': 'autumn_sun_mandala.jpeg', 'title': 'Autumn sun mandala'},
    'blue-multi-feather-wall-hanging': {'source': 'blue_multi_feather_wall_hanging.jpeg', 'title': 'Blue multi-feather wall hanging'},
    'feather-mandala': {'source': 'feather_mandala.jpeg', 'title': 'Feather mandala'},
    'inclusive-expression-keyrings': {'source': 'inclusive_expression_keyrings.jpeg', 'title': 'Inclusive expression keyrings'},
    'lake-blue-combed-leaf-wall-hanging': {'source': 'lake_blue_combed_leaf_wall_hanging.jpeg', 'title': 'Lake blue combed leaf wall hanging'},
    'lavender-combed-leaf-wall-hanging': {'source': 'lavender_combed_leaf_wall_hanging.jpeg', 'title': 'Lavender combed leaf wall hanging'},
    'natural-combed-leaf-wall-hanging': {'source': 'natural_combed_leaf_wall_hanging.jpeg', 'title': 'Natural combed leaf wall hanging'},
    'pink-multi-feather-wall-hanging': {'source': 'pink-multi_feather_wall_hanging.jpeg', 'title': 'Pink multi-feather wall hanging'},
    'poppy-dog-lead': {'source': 'poppy_dog_lead.jpeg', 'title': 'Poppy dog lead'},
    'rust-combed-leaf-wall-hanging': {'source': 'rust_combed_leaf_wall_hanging.jpeg', 'title': 'Rust combed leaf wall hanging'},
    'textured-wall-hanging': {'source': 'textured_wall_hanging.jpeg', 'title': 'Textured wall hanging'},
    'thank-you-keyrings': {'source': 'thank_you_keyrings.jpeg', 'title': 'Thank you flower keyrings'},
    'tree-of-life-wall-hangings': {'source': 'tree_of_life.jpeg', 'title': 'Tree of life wall hangings'},
    'mustard-teal-flower-wall-hanging': {'source': 'coral_wall_hanging.jpeg', 'title': 'Mustard and teal flower wall hanging'},
    'daisy-plant-hanger': {'source': 'daisy_plant_hanger_with_slab.jpeg', 'title': 'Daisy plant hanger'},
    'large-boho-wall-hanging': {'source': 'large_boho_wall_hanging.jpeg', 'title': 'Large boho wall hanging'},
    'large-mandala': {'source': 'large_mandala.png', 'title': 'Large mandala'},
    'miniature-framed-macrame': {'source': 'miniature_framed_macrame.jpeg', 'title': 'Miniature framed macramé'},
    'money-pouch': {'source': 'money pouch_aipod_pouch.jpeg', 'title': 'Money pouch'},
    'olive-eyed-owl': {'source': 'owl.jpeg', 'title': 'Olive-eyed owl'},
}


def make_variants(source: Path, destination: Path, *, force: bool) -> None:
    if destination.exists() and not force:
        print(f'Skipping existing output: {destination.relative_to(PROJECT_ROOT)}')
        return

    with Image.open(source) as image:
        image = ImageOps.exif_transpose(image)
        if image.mode not in {'RGB', 'L'}:
            if 'A' in image.getbands():
                rgba = image.convert('RGBA')
                background = Image.new('RGBA', rgba.size, (255, 255, 255, 255))
                background.alpha_composite(rgba)
                image = background.convert('RGB')
            else:
                image = image.convert('RGB')
        elif image.mode == 'L':
            image = image.convert('RGB')

        full = image.copy()
        if full.size[0] > 1600 or full.size[1] > 1600:
            full.thumbnail((1600, 1600), Image.Resampling.LANCZOS)
        full_path = destination.with_name(f'{destination.stem}-full.jpg')
        full.save(full_path, 'JPEG', quality=82, optimize=True)

        thumb = image.copy()
        thumb.thumbnail((640, 640), Image.Resampling.LANCZOS)
        thumb_path = destination.with_name(f'{destination.stem}-thumb.jpg')
        thumb.save(thumb_path, 'JPEG', quality=80, optimize=True)

    print(f'Generated {destination.relative_to(PROJECT_ROOT)}')


def main() -> None:
    parser = argparse.ArgumentParser(description='Create public gallery images from the source photo folder.')
    parser.add_argument('--force', action='store_true', help='Overwrite existing generated files.')
    args = parser.parse_args()

    if not SOURCE_ROOT.exists():
        raise FileNotFoundError(f'Source folder not found: {SOURCE_ROOT}')

    DEST_ROOT.mkdir(parents=True, exist_ok=True)
    for item_id, data in ITEMS.items():
        source_path = SOURCE_ROOT / data['source']
        if not source_path.exists():
            print(f'Missing source image for {item_id}: {source_path.name}')
            continue

        destination = DEST_ROOT / f'{item_id}.jpg'
        make_variants(source_path, destination, force=args.force)

    print(f'Gallery assets ready in {DEST_ROOT.relative_to(PROJECT_ROOT)}')


if __name__ == '__main__':
    main()
