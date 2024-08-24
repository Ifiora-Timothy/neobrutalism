import FilterandSort from "@/components/FilterandSort";
import ViewModeToggle from "@/components/ViewModeToggle";
import ShopWrapper from "@/components/ShopWrapper";

export type shirt = {
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
// const shirts: Array<shirt> = [
//   {
//     id: 1,
//     name: "Neon Explosion",
//     price: 29.99,
//     color: "bg-green-400",
//     likes: 150,
//     description: "Vibrant neon design that'll make you stand out in the crowd.",
//   },
//   {
//     id: 2,
//     name: "Bass Drop",
//     price: 34.99,
//     color: "bg-blue-400",
//     likes: 120,
//     description: "Feel the bass with this sound-reactive print.",
//   },
//   {
//     id: 3,
//     name: "Glitch in the Matrix",
//     price: 32.99,
//     color: "bg-purple-400",
//     likes: 180,
//     description: "Distorted reality captured in a tee.",
//   },
//   {
//     id: 4,
//     name: "Psychedelic Dream",
//     price: 39.99,
//     color: "bg-pink-400",
//     likes: 200,
//     description: "Trip out with this mind-bending design.",
//   },
//   {
//     id: 5,
//     name: "Laser Beam",
//     price: 29.99,
//     color: "bg-yellow-400",
//     likes: 90,
//     description: "Precision-cut laser patterns that dazzle.",
//   },
//   {
//     id: 6,
//     name: "Sound Wave",
//     price: 34.99,
//     color: "bg-orange-400",
//     likes: 110,
//     description: "Wear the rhythm of your favorite track.",
//   },
//   {
//     id: 7,
//     name: "Techno Tribe",
//     price: 31.99,
//     color: "bg-red-400",
//     likes: 130,
//     description: "Join the techno revolution with this tribal design.",
//   },
//   {
//     id: 8,
//     name: "Cyber Punk",
//     price: 36.99,
//     color: "bg-indigo-400",
//     likes: 170,
//     description: "Futuristic vibes for the digital age.",
//   },
//   {
//     id: 9,
//     name: "Retro Rave",
//     price: 33.99,
//     color: "bg-teal-400",
//     likes: 140,
//     description: "Old school rave culture reimagined.",
//   },
// ];

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Shop({ searchParams }: Props) {
  // const [priceRange, setPriceRange] = useState([0, 50]);
  // const [sortBy, setSortBy] = useState("popularity");
  // const [sortOrder, setSortOrder] = useState("desc");
  // const [currentPage, setCurrentPage] = useState(1);
  // const [viewMode, setViewMode] = useState<"grid2" | "list">("list"); // 'grid3', 'grid2', or 'list'
  // const [isFilterOpen, setIsFilterOpen] = useState(false);

  // const itemsPerPage = 6;

  // const filteredAndSortedShirts = shirts
  //   .filter(
  //     (shirt) => shirt.price >= priceRange[0] && shirt.price <= priceRange[1]
  //   )
  //   .sort((a, b) => {
  //     if (sortBy === "price") {
  //       return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
  //     } else {
  //       return sortOrder === "asc" ? a.likes - b.likes : b.likes - a.likes;
  //     }
  //   });

  // const pageCount = Math.ceil(filteredAndSortedShirts.length / itemsPerPage);
  // const displayedShirts = filteredAndSortedShirts.slice(
  //   (currentPage - 1) * itemsPerPage,
  //   currentPage * itemsPerPage
  // );

  // const gridClass =
  //   viewMode === "grid2"
  //     ? "grid-cols-2 md:grid-cols-3"
  //     : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";

  return (
    <div className="max-w-7xl mx-auto sm:px-4 py-8">
      <h1 className="sm:text-5xl text-xl md:text-7xl font-black mb-12 transform -rotate-2 text-center bg-purple-600 text-white p-4 border-8 border-black shadow-[8px_8px_0_0_#000]">
        SHOP FEST SHIRTS
      </h1>

      {/* Mobile Filter Toggle Button */}
      <FilterandSort />
      {/* View Mode Toggles */}
      <ViewModeToggle />

      {/* Product Grid */}
      <ShopWrapper searchParams={searchParams} />
    </div>
  );
}