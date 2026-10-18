export type GalleryCategoryId =
  | 'wall-hangings'
  | 'plant-hangers'
  | 'keyrings-and-wristlets'
  | 'bookmarks'
  | 'other-creations';

export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'wall-hangings', label: 'Wall hangings' },
  { id: 'plant-hangers', label: 'Plant hangers' },
  { id: 'keyrings-and-wristlets', label: 'Keyrings and wristlets' },
  { id: 'bookmarks', label: 'Bookmarks' },
  { id: 'other-creations', label: 'Other creations' },
] as const;

export type GalleryItem = {
  id: string;
  title: string;
  category: Exclude<GalleryCategoryId, 'all'>;
  description: string;
  images: Array<{
    src: string;
    thumb: string;
    alt: string;
    width: number;
    height: number;
  }>;
};

export const galleryItems: GalleryItem[] = [
  {
    id: 'blue-gradient-wall-hanging',
    title: 'Blue gradient wall hanging',
    category: 'wall-hangings',
    description: 'A layered wall hanging with soft blue tones and a textured fringe.',
    images: [
      {
        src: '/gallery/blue-gradient-wall-hanging-full.jpg',
        thumb: '/gallery/blue-gradient-wall-hanging-thumb.jpg',
        alt: 'Blue gradient macramé wall hanging with a soft tonal fade and textured fringe.',
        width: 480,
        height: 640,
      },
    ],
  },
  {
    id: 'colour-gradient-wall-hanging',
    title: 'Colour gradient wall hanging',
    category: 'wall-hangings',
    description: 'A woven wall hanging with a colour gradient from warm neutrals through deeper tones.',
    images: [
      {
        src: '/gallery/colour-gradient-wall-hanging-full.jpg',
        thumb: '/gallery/colour-gradient-wall-hanging-thumb.jpg',
        alt: 'A handmade wall hanging with a warm colour gradient and layered texture.',
        width: 640,
        height: 480,
      },
    ],
  },
  {
    id: 'leaf-wall-hanging',
    title: 'Leaf wall hanging',
    category: 'wall-hangings',
    description: 'A leaf-inspired wall hanging with natural tones and a simple geometric form.',
    images: [
      {
        src: '/gallery/leaf-wall-hanging-full.jpg',
        thumb: '/gallery/leaf-wall-hanging-thumb.jpg',
        alt: 'A leaf-shaped macramé wall hanging in natural tones with soft fringe details.',
        width: 480,
        height: 640,
      },
    ],
  },
  {
    id: 'framed-wall-hanging',
    title: 'Framed wall hanging',
    category: 'wall-hangings',
    description: 'A framed piece with layered knots and a neat, decorative finish.',
    images: [
      {
        src: '/gallery/framed-wall-hanging-full.jpg',
        thumb: '/gallery/framed-wall-hanging-thumb.jpg',
        alt: 'A framed macramé hanging with layered knot work and a neutral background.',
        width: 480,
        height: 640,
      },
    ],
  },
  {
    id: 'lavender-plant-hanger',
    title: 'Lavender plant hanger',
    category: 'plant-hangers',
    description: 'A plant hanger with layered texture and soft lavender tones.',
    images: [
      {
        src: '/gallery/lavender-plant-hanger-full.jpg',
        thumb: '/gallery/lavender-plant-hanger-thumb.jpg',
        alt: 'A lavender plant hanger with layered macramé knotwork and hanging loops.',
        width: 387,
        height: 640,
      },
    ],
  },
  {
    id: 'double-plant-hangers',
    title: 'Double plant hangers',
    category: 'plant-hangers',
    description: 'A pair of plant hangers with a natural, handmade finish suitable for a set or display.',
    images: [
      {
        src: '/gallery/double-plant-hangers-full.jpg',
        thumb: '/gallery/double-plant-hangers-thumb.jpg',
        alt: 'Two handmade plant hangers displayed together with soft natural cord colours.',
        width: 480,
        height: 640,
      },
    ],
  },
  {
    id: 'rainbow-keyring',
    title: 'Rainbow keyring',
    category: 'keyrings-and-wristlets',
    description: 'A colourful keyring made with layered strands and bright woven detail.',
    images: [
      {
        src: '/gallery/rainbow-keyring-full.jpg',
        thumb: '/gallery/rainbow-keyring-thumb.jpg',
        alt: 'A rainbow keyring with a bright mix of colours and braided cord detailing.',
        width: 480,
        height: 640,
      },
    ],
  },
  {
    id: 'expressive-keyrings',
    title: 'Expressive keyrings',
    category: 'keyrings-and-wristlets',
    description: 'A set of distinctive keyrings with playful colour combinations and textured knots.',
    images: [
      {
        src: '/gallery/expressive-keyrings-full.jpg',
        thumb: '/gallery/expressive-keyrings-thumb.jpg',
        alt: 'A selection of colourful keyrings made with varied knot textures and bright tones.',
        width: 640,
        height: 480,
      },
    ],
  },
  {
    id: 'intricate-bookmarks',
    title: 'Intricate bookmarks',
    category: 'bookmarks',
    description: 'Detailed bookmarks with layered knot patterns and a compact, useful design.',
    images: [
      {
        src: '/gallery/intricate-bookmarks-full.jpg',
        thumb: '/gallery/intricate-bookmarks-thumb.jpg',
        alt: 'A group of detailed macramé bookmarks with layered knot textures and natural fibres.',
        width: 640,
        height: 480,
      },
    ],
  },
  {
    id: 'celtic-keyrings',
    title: 'Celtic style keyrings',
    category: 'keyrings-and-wristlets',
    description: 'A set of keyrings with a decorative celtic-inspired look and a practical finish.',
    images: [
      {
        src: '/gallery/celtic-keyrings-full.jpg',
        thumb: '/gallery/celtic-keyrings-thumb.jpg',
        alt: 'Celtic-inspired keyrings with geometric detail and natural cord colours.',
        width: 640,
        height: 480,
      },
    ],
  },
  {
    id: 'coasters',
    title: 'Coasters',
    category: 'other-creations',
    description: 'Handmade coasters with a simple, textured finish for practical everyday use.',
    images: [
      {
        src: '/gallery/coasters-full.jpg',
        thumb: '/gallery/coasters-thumb.jpg',
        alt: 'A set of handmade coasters with a textured woven finish.',
        width: 480,
        height: 640,
      },
    ],
  },
  {
    id: 'feathered-owl',
    title: 'Feathered owl',
    category: 'other-creations',
    description: 'A decorative piece with a feathered form and a more sculptural, characterful finish.',
    images: [
      {
        src: '/gallery/feathered-owl-full.jpg',
        thumb: '/gallery/feathered-owl-thumb.jpg',
        alt: 'A decorative feathered owl style piece in woven, natural colours.',
        width: 480,
        height: 640,
      },
    ],
  },
  {
    id: 'angel-wall-hanging',
    title: 'Angel wall hanging',
    category: 'other-creations',
    description: 'A decorative angel-shaped wall hanging in natural cream cord with a wooden bead head and soft layered wings.',
    images: [
      {
        src: '/gallery/angel-wall-hanging-full.jpg',
        thumb: '/gallery/angel-wall-hanging-thumb.jpg',
        alt: 'A cream macramé wall hanging shaped like an angel with layered wing fringes and a wooden bead head, hung from a branch.',
        width: 640,
        height: 480,
      },
    ],
  },
  {
    id: 'autumn-sun-mandala',
    title: 'Autumn sun mandala',
    category: 'wall-hangings',
    description: 'A round woven mandala with a rust and gold patterned border framing a detailed macramé centre.',
    images: [
      {
        src: '/gallery/autumn-sun-mandala-full.jpg',
        thumb: '/gallery/autumn-sun-mandala-thumb.jpg',
        alt: 'A circular macramé mandala with a rust and gold woven border and an intricate cream knotted centre.',
        width: 480,
        height: 640,
      },
    ],
  },
  {
    id: 'blue-multi-feather-wall-hanging',
    title: 'Blue multi-feather wall hanging',
    category: 'wall-hangings',
    description: 'A layered feather-style wall hanging in deep teal with white accent feathers woven through.',
    images: [
      {
        src: '/gallery/blue-multi-feather-wall-hanging-full.jpg',
        thumb: '/gallery/blue-multi-feather-wall-hanging-thumb.jpg',
        alt: 'A teal macramé wall hanging shaped like layered feathers with white accent feathers mixed through.',
        width: 480,
        height: 640,
      },
    ],
  },
  {
    id: 'feather-mandala',
    title: 'Feather mandala',
    category: 'wall-hangings',
    description: 'A pale grey woven mandala wheel finished with three long navy feather tails.',
    images: [
      {
        src: '/gallery/feather-mandala-full.jpg',
        thumb: '/gallery/feather-mandala-thumb.jpg',
        alt: 'A pale grey macramé mandala wheel with three long navy blue feather-style tails hanging beneath it.',
        width: 448,
        height: 640,
      },
    ],
  },
  {
    id: 'inclusive-expression-keyrings',
    title: 'Inclusive expression keyrings',
    category: 'keyrings-and-wristlets',
    description: 'A set of sunflower-faced keyring figures with a range of wooden bead skin tones.',
    images: [
      {
        src: '/gallery/inclusive-expression-keyrings-full.jpg',
        thumb: '/gallery/inclusive-expression-keyrings-thumb.jpg',
        alt: 'Three sunflower-themed keyring figures with painted wooden bead faces in different skin tones.',
        width: 640,
        height: 480,
      },
    ],
  },
  {
    id: 'lake-blue-combed-leaf-wall-hanging',
    title: 'Lake blue combed leaf wall hanging',
    category: 'wall-hangings',
    description: 'A combed leaf-shaped wall hanging in lake blue with an inlaid bead detail and soft fringed edges.',
    images: [
      {
        src: '/gallery/lake-blue-combed-leaf-wall-hanging-full.jpg',
        thumb: '/gallery/lake-blue-combed-leaf-wall-hanging-thumb.jpg',
        alt: 'A lake blue combed macramé wall hanging in a leaf shape with a row of beads through the centre.',
        width: 480,
        height: 640,
      },
    ],
  },
  {
    id: 'lavender-combed-leaf-wall-hanging',
    title: 'Lavender combed leaf wall hanging',
    category: 'wall-hangings',
    description: 'A combed leaf-shaped wall hanging in soft lavender with an inlaid bead detail and soft fringed edges.',
    images: [
      {
        src: '/gallery/lavender-combed-leaf-wall-hanging-full.jpg',
        thumb: '/gallery/lavender-combed-leaf-wall-hanging-thumb.jpg',
        alt: 'A lavender combed macramé wall hanging in a leaf shape with a row of wooden beads through the centre.',
        width: 480,
        height: 640,
      },
    ],
  },
  {
    id: 'natural-combed-leaf-wall-hanging',
    title: 'Natural combed leaf wall hanging',
    category: 'wall-hangings',
    description: 'A combed leaf-shaped wall hanging in natural cream with a patterned bead detail and soft fringed edges.',
    images: [
      {
        src: '/gallery/natural-combed-leaf-wall-hanging-full.jpg',
        thumb: '/gallery/natural-combed-leaf-wall-hanging-thumb.jpg',
        alt: 'A natural cream combed macramé wall hanging in a leaf shape with patterned beads through the centre.',
        width: 480,
        height: 640,
      },
    ],
  },
  {
    id: 'pink-multi-feather-wall-hanging',
    title: 'Pink multi-feather wall hanging',
    category: 'wall-hangings',
    description: 'A layered feather-style wall hanging in dusky pink with a full, textured fringe.',
    images: [
      {
        src: '/gallery/pink-multi-feather-wall-hanging-full.jpg',
        thumb: '/gallery/pink-multi-feather-wall-hanging-thumb.jpg',
        alt: 'A dusky pink macramé wall hanging shaped like layered feathers with a full textured fringe.',
        width: 480,
        height: 640,
      },
    ],
  },
  {
    id: 'poppy-dog-lead',
    title: 'Poppy dog lead',
    category: 'other-creations',
    description: 'A handmade paracord dog lead in khaki with woven red poppy details and a secure clip.',
    images: [
      {
        src: '/gallery/poppy-dog-lead-full.jpg',
        thumb: '/gallery/poppy-dog-lead-thumb.jpg',
        alt: 'A khaki paracord dog lead with woven red poppy flower details and a metal clip.',
        width: 640,
        height: 480,
      },
    ],
  },
  {
    id: 'rust-combed-leaf-wall-hanging',
    title: 'Rust combed leaf wall hanging',
    category: 'wall-hangings',
    description: 'A combed leaf-shaped wall hanging in rust with an inlaid bead detail and soft fringed edges.',
    images: [
      {
        src: '/gallery/rust-combed-leaf-wall-hanging-full.jpg',
        thumb: '/gallery/rust-combed-leaf-wall-hanging-thumb.jpg',
        alt: 'A rust-coloured combed macramé wall hanging in a leaf shape with a row of beads through the centre.',
        width: 480,
        height: 640,
      },
    ],
  },
  {
    id: 'textured-wall-hanging',
    title: 'Textured wall hanging',
    category: 'wall-hangings',
    description: 'A large fibre-art wall hanging combining braided roving, woven stripes and mixed textures in natural and black tones.',
    images: [
      {
        src: '/gallery/textured-wall-hanging-full.jpg',
        thumb: '/gallery/textured-wall-hanging-thumb.jpg',
        alt: 'A large textured wall hanging combining braided roving, woven stripes and varied fibres in cream, brown and black tones.',
        width: 640,
        height: 480,
      },
    ],
  },
  {
    id: 'thank-you-keyrings',
    title: 'Thank you flower keyrings',
    category: 'keyrings-and-wristlets',
    description: 'A set of woven flower keyrings in mixed colourways, each finished on a handmade thank you gift tag.',
    images: [
      {
        src: '/gallery/thank-you-keyrings-full.jpg',
        thumb: '/gallery/thank-you-keyrings-thumb.jpg',
        alt: 'A row of woven flower keyrings in white, blue, yellow, orange and purple, each attached to a handmade thank you gift tag.',
        width: 640,
        height: 480,
      },
    ],
  },
  {
    id: 'tree-of-life-wall-hangings',
    title: 'Tree of life wall hangings',
    category: 'wall-hangings',
    description: 'A set of circular tree of life wall hangings shown in sage green, metallic gold and burnt orange.',
    images: [
      {
        src: '/gallery/tree-of-life-wall-hangings-full.jpg',
        thumb: '/gallery/tree-of-life-wall-hangings-thumb.jpg',
        alt: 'Three circular tree of life macramé wall hangings mounted together in sage green, metallic gold and burnt orange.',
        width: 640,
        height: 480,
      },
    ],
  },
  {
    id: 'mustard-teal-flower-wall-hanging',
    title: 'Mustard and teal flower wall hanging',
    category: 'wall-hangings',
    description: 'A layered flower-petal wall hanging in mustard, teal and cream with a decorative beaded centre flower.',
    images: [
      {
        src: '/gallery/mustard-teal-flower-wall-hanging-full.jpg',
        thumb: '/gallery/mustard-teal-flower-wall-hanging-thumb.jpg',
        alt: 'A macramé wall hanging in mustard, teal and cream with layered petal shapes and a beaded centre flower.',
        width: 640,
        height: 640,
      },
    ],
  },
  {
    id: 'daisy-plant-hanger',
    title: 'Daisy plant hanger',
    category: 'plant-hangers',
    description: 'A sage green plant hanger with woven daisy details, shown with a wooden slab plant stand.',
    images: [
      {
        src: '/gallery/daisy-plant-hanger-full.jpg',
        thumb: '/gallery/daisy-plant-hanger-thumb.jpg',
        alt: 'A sage green macramé plant hanger with white daisy-style knot details, holding a potted plant on a wooden slab stand.',
        width: 640,
        height: 640,
      },
    ],
  },
  {
    id: 'large-boho-wall-hanging',
    title: 'Large boho wall hanging',
    category: 'wall-hangings',
    description: 'A large dark teal wall hanging with an intricate diamond lattice pattern and a full fringed base.',
    images: [
      {
        src: '/gallery/large-boho-wall-hanging-full.jpg',
        thumb: '/gallery/large-boho-wall-hanging-thumb.jpg',
        alt: 'A large dark teal macramé wall hanging with a diamond lattice pattern and long fringed tassels.',
        width: 640,
        height: 640,
      },
    ],
  },
  {
    id: 'large-mandala',
    title: 'Large mandala',
    category: 'wall-hangings',
    description: 'A large round woven mandala with a detailed radiating spoke pattern in soft grey.',
    images: [
      {
        src: '/gallery/large-mandala-full.jpg',
        thumb: '/gallery/large-mandala-thumb.jpg',
        alt: 'A large circular macramé mandala in soft grey with a detailed radiating spoke pattern and scalloped edge.',
        width: 640,
        height: 640,
      },
    ],
  },
  {
    id: 'miniature-framed-macrame',
    title: 'Miniature framed macramé',
    category: 'other-creations',
    description: 'A small framed macramé sample in teal, plum and forest green, displayed on a miniature easel.',
    images: [
      {
        src: '/gallery/miniature-framed-macrame-full.jpg',
        thumb: '/gallery/miniature-framed-macrame-thumb.jpg',
        alt: 'A small wooden-framed macramé sample piece in teal, plum and forest green, displayed on a miniature easel.',
        width: 640,
        height: 640,
      },
    ],
  },
  {
    id: 'money-pouch',
    title: 'Money pouch',
    category: 'other-creations',
    description: 'A small crocheted zip pouch with a flower motif and clip attachment, perfect for coins, earbuds or small essentials.',
    images: [
      {
        src: '/gallery/money-pouch-full.jpg',
        thumb: '/gallery/money-pouch-thumb.jpg',
        alt: 'A set of small crocheted zip pouches with a flower motif in assorted colours, each with a clip attachment.',
        width: 640,
        height: 640,
      },
    ],
  },
  {
    id: 'olive-eyed-owl',
    title: 'Olive-eyed owl',
    category: 'other-creations',
    description: 'A round macramé owl wall hanging with layered olive-green eyes and twig feet, mounted on a brass ring.',
    images: [
      {
        src: '/gallery/olive-eyed-owl-full.jpg',
        thumb: '/gallery/olive-eyed-owl-thumb.jpg',
        alt: 'A cream macramé owl wall hanging with round olive-green eyes, mounted on a brass ring with twig feet.',
        width: 640,
        height: 640,
      },
    ],
  },
];
