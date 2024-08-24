import { Button } from "@/components/ui/button";
import Countdown from "@/components/Countdown";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import FeaturesContainer from "@/components/FeaturesContainer";
import TeesDisplay from "@/components/TeesDisplay";

export default function Home() {
  return (
    <div className=" mx-auto">
      {/* Neo-brutalist Hero Section */}
      <section className="relative  overflow-hidden sm:mb-16 mb-7  ">
        <div className="absolute inset-0 bg-yellow-400 z-0 ">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-red-500 transform -rotate-6"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-500 transform rotate-6"></div>
        </div>
        <div className="relative pt-6 pb-8  md:py-16  z-10 ">
          <div className="w-full  pb-0 ">
            <h1 className="text-[34px] w-full text-center mt-8 text-nowrap fot-sans  md:text-7xl font-black mb-8 text-white mix-blend-difference">
              TECH FUSION FEST
            </h1>
            <p className="text-lg m-8 mt-0  md:px-16  md:text-4xl font-bold mb-8 bg-black text-white p-4 inline-block transform -rotate-2">
              3 DAYS OF PURE MADNESS!
            </p>
          </div>
          <div className="sm:px-8 ">
            <FeaturesContainer />
          </div>
          <div className="flex flex-wrap gap-4 px-8 md:px-16 ">
            <Link href="/tickets">
              <Button className="text-2xl gap-2 sm:py-4 py-6 px-8 bg-red-500 hover:bg-red-600 text-white font-black border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[12px_12px_0_0_#000] transition-all duration-300 transform hover:-translate-y-1">
                GET TICKETS <FaLongArrowAltRight />
              </Button>
            </Link>
            <Link href="/shop">
              <Button className="text-2xl sm:py-4 py-6  gap-2 px-8 bg-cyan-400 hover:bg-cyan-500 text-black font-black border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[12px_12px_0_0_#000] transition-all duration-300 transform hover:-translate-y-1">
                SHOP MERCH <FaLongArrowAltRight />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="p-4 w-full flex flex-col items-center pt-0 max-w-6xl">
        {/* Countdown Timer */}
        <Countdown />

        {/* Featured Shirts Section */}
        <h2 className="sm:text-6xl text-xl font-black mb-8 transform -rotate-2 text-center bg-green-500 text-black p-4 border-8 border-black">
          HOT MERCH <span className="text-sm">(Flash Sales!)</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <TeesDisplay />
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link href="/shop">
            <Button className="sm:text-4xl text-xl sm:py-8 py-6 gap-2 sm:px-12 px-8 bg-purple-600 hover:bg-purple-700 text-white font-black border-8 border-black shadow-[12px_12px_0_0_#000] hover:shadow-[20px_20px_0_0_#000] transition-shadow duration-300 transform hover:-translate-y-2">
              SHOP ALL SHIRTS <FaLongArrowAltRight />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
