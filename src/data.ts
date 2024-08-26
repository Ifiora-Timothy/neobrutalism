//mapping shirtes to their images
type shirt = {
  id: number;
  name: string;
  price: number;
  color: string;
  likes: number;

  description: string;
  images: {
    white: string;
    black: string;
    blue: string;
  };
};

export const AllShirts: shirt[] = [
  {
    id: 1,
    name: "Neon edited Explosion",
    price: 29.99,
    color: "bg-green-400",
    likes: 150,
    description: "Vibrant neon design that'll make you stand out in the crowd.",
    images: {
      white: "/store/shirt1white.png",
      black: "/store/shirt1black.png",
      blue: "/store/shirt1blue.png",
    },
  },
  {
    id: 2,
    name: "Bass Drop",
    price: 34.99,
    color: "bg-blue-400",
    likes: 120,
    description: "Feel the bass with this sound-reactive print.",
    images: {
      white: "/store/shirt2white.png",
      black: "/store/shirt2black.png",
      blue: "/store/shirt2blue.png",
    },
  },
  {
    id: 3,
    name: "Glitch in the Matrix",
    price: 32.99,
    color: "bg-purple-400",
    likes: 180,
    description: "Distorted reality captured in a tee.",
    images: {
      white: "/store/shirt3white.png",
      black: "/store/shirt3black.png",
      blue: "/store/shirt3blue.png",
    },
  },
  {
    id: 4,
    name: "Psychedelic Dream",
    price: 39.99,
    color: "bg-pink-400",
    likes: 200,
    description: "Trip out with this mind-bending design.",
    images: {
      white: "/store/shirt4white.png",
      black: "/store/shirt4black.png",
      blue: "/store/shirt4blue.png",
    },
  },
  {
    id: 5,
    name: "Laser Beam",
    price: 29.99,
    color: "bg-yellow-400",
    likes: 90,
    description: "Precision-cut laser patterns that dazzle.",
    images: {
      white: "/store/shirt5white.png",
      black: "/store/shirt5black.png",
      blue: "/store/shirt5blue.png",
    },
  },
  {
    id: 6,
    name: "Sound Wave",
    price: 34.99,
    color: "bg-orange-400",
    likes: 110,
    description: "Wear the rhythm of your favorite track.",
    images: {
      white: "/store/shirt6white.png",
      black: "/store/shirt6black.png",
      blue: "/store/shirt6blue.png",
    },
  },
  {
    id: 7,
    name: "Techno Tribe",
    price: 31.99,
    color: "bg-red-400",
    likes: 130,
    description: "Join the techno revolution with this tribal design.",
    images: {
      white: "/store/shirt7white.png",
      black: "/store/shirt7black.png",
      blue: "/store/shirt7blue.png",
    },
  },
  {
    id: 8,
    name: "Neon edited Explosion",
    price: 19.99,
    color: "bg-amber-400",
    likes: 150,
    description: "Vibrant neon design that'll make you stand out in the crowd.",
    images: {
      white: "/store/shirt1white.png",
      black: "/store/shirt1black.png",
      blue: "/store/shirt1blue.png",
    },
  },
  {
    id: 9,
    name: "Bass Drop",
    price: 14.99,
    color: "bg-green-400",
    likes: 120,
    description: "Feel the bass with this sound-reactive print.",
    images: {
      white: "/store/shirt2white.png",
      black: "/store/shirt2black.png",
      blue: "/store/shirt2blue.png",
    },
  },
  {
    id: 10,
    name: "Glitch in the Matrix",
    price: 32.99,
    color: "bg-purple-400",
    likes: 120,
    description: "Distorted reality captured in a tee.",
    images: {
      white: "/store/shirt3white.png",
      black: "/store/shirt3black.png",
      blue: "/store/shirt3blue.png",
    },
  },
  {
    id: 11,
    name: "Psychedelic Dream",
    price: 20.99,
    color: "bg-blue-400",
    likes: 20,
    description: "Trip out with this mind-bending design.",
    images: {
      white: "/store/shirt4white.png",
      black: "/store/shirt4black.png",
      blue: "/store/shirt4blue.png",
    },
  },
  {
    id: 12,
    name: "Laser Beam",
    price: 49.99,
    color: "bg-orange-400",
    likes: 190,
    description: "Precision-cut laser patterns that dazzle.",
    images: {
      white: "/store/shirt5white.png",
      black: "/store/shirt5black.png",
      blue: "/store/shirt5blue.png",
    },
  },
  {
    id: 13,
    name: "Sound Wave",
    price: 24.99,
    color: "bg-pink-400",
    likes: 110,
    description: "Wear the rhythm of your favorite track.",
    images: {
      white: "/store/shirt6white.png",
      black: "/store/shirt6black.png",
      blue: "/store/shirt6blue.png",
    },
  },
  {
    id: 14,
    name: "Techno Tribe",
    price: 21.99,
    color: "bg-red-400",
    likes: 190,
    description: "Join the techno revolution with this tribal design.",
    images: {
      white: "/store/shirt7white.png",
      black: "/store/shirt7black.png",
      blue: "/store/shirt7blue.png",
    },
  },
  {
    id: 15,
    name: "Neon edited Explosion",
    price: 70.99,
    color: "bg-blue-400",
    likes: 100,
    description: "Vibrant neon design that'll make you stand out in the crowd.",
    images: {
      white: "/store/shirt1white.png",
      black: "/store/shirt1black.png",
      blue: "/store/shirt1blue.png",
    },
  },
  {
    id: 16,
    name: "Bass Drop",
    price: 24.99,
    color: "bg-cyan-400",
    likes: 120,
    description: "Feel the bass with this sound-reactive print.",
    images: {
      white: "/store/shirt2white.png",
      black: "/store/shirt2black.png",
      blue: "/store/shirt2blue.png",
    },
  },
  {
    id: 17,
    name: "Glitch in the Matrix",
    price: 22.99,
    color: "bg-purple-400",
    likes: 120,
    description: "Distorted reality captured in a tee.",
    images: {
      white: "/store/shirt3white.png",
      black: "/store/shirt3black.png",
      blue: "/store/shirt3blue.png",
    },
  },
  {
    id: 18,
    name: "Psychedelic Dream",
    price: 19.99,
    color: "bg-blue-400",
    likes: 120,
    description: "Trip out with this mind-bending design.",
    images: {
      white: "/store/shirt4white.png",
      black: "/store/shirt4black.png",
      blue: "/store/shirt4blue.png",
    },
  },
  {
    id: 19,
    name: "Laser Beam",
    price: 29.99,
    color: "bg-yellow-400",
    likes: 190,
    description: "Precision-cut laser patterns that dazzle.",
    images: {
      white: "/store/shirt5white.png",
      black: "/store/shirt5black.png",
      blue: "/store/shirt5blue.png",
    },
  },
  {
    id: 20,
    name: "Sound Wave",
    price: 12.99,
    color: "bg-orange-400",
    likes: 170,
    description: "Wear the rhythm of your favorite track.",
    images: {
      white: "/store/shirt6white.png",
      black: "/store/shirt6black.png",
      blue: "/store/shirt6blue.png",
    },
  },
  {
    id: 21,
    name: "Techno Tribe",
    price: 21.99,
    color: "bg-red-400",
    likes: 200,
    description: "Join the techno revolution with this tribal design.",
    images: {
      white: "/store/shirt7white.png",
      black: "/store/shirt7black.png",
      blue: "/store/shirt7blue.png",
    },
  },
];

export const shirtMap = {
  shirt1: {
    white: "store/shirt1white.png",
    black: "store/shirt1black.png",
    blue: "store/shirt1blue.png",
  },
  shirt2: {
    white: "store/shirt2white.png",
    black: "store/shirt2black.png",
    blue: "store/shirt2blue.png",
  },
  shirt3: {
    white: "store/shirt3white.png",
    black: "store/shirt3black.png",
    blue: "store/shirt3blue.png",
  },
  shirt4: {
    white: "store/shirt4white.png",
    black: "store/shirt4black.png",
    blue: "store/shirt4blue.png",
  },
  shirt5: {
    white: "store/shirt5white.png",
    black: "store/shirt5black.png",
    blue: "store/shirt5blue.png",
  },
  shirt6: {
    white: "store/shirt6white.png",
    black: "store/shirt6black.png",
    blue: "store/shirt6blue.png",
  },
  shirt7: {
    white: "store/shirt7white.png",
    black: "store/shirt7black.png",
    blue: "store/shirt7blue.png",
  },
};
export const ImageMap = new Map<
  string,
  { white: string; black: string; blue: string }
>([
  [
    "shirt1",
    {
      white: "store/shirt1white.png",
      black: "store/shirt1black.png",
      blue: "store/shirt1blue.png",
    },
  ],
  [
    "shirt2",
    {
      white: "store/shirt2white.png",
      black: "store/shirt2black.png",
      blue: "store/shirt2blue.png",
    },
  ],
  [
    "shirt3",
    {
      white: "store/shirt3white.png",
      black: "store/shirt3black.png",
      blue: "store/shirt3blue.png",
    },
  ],
  [
    "shirt4",
    {
      white: "store/shirt4white.png",
      black: "store/shirt4black.png",
      blue: "store/shirt4blue.png",
    },
  ],
  [
    "shirt5",
    {
      white: "store/shirt5white.png",
      black: "store/shirt5black.png",
      blue: "store/shirt5blue.png",
    },
  ],
  [
    "shirt6",
    {
      white: "store/shirt6white.png",
      black: "store/shirt6black.png",
      blue: "store/shirt6blue.png",
    },
  ],
  [
    "shirt7",
    {
      white: "store/shirt7white.png",
      black: "store/shirt7black.png",
      blue: "store/shirt7blue.png",
    },
  ],
]);
