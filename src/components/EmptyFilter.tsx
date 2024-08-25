import { Button } from "@/components/ui/button";
import { RefreshCwIcon } from "lucide-react";
import Link from "next/link";
import BackHistory from "./BackHistory";

export default function EmptyFilter() {
  return (
    <div className="sm:max-w-2xl max-w-xs mx-auto px-4 py-6 text-center">
      <div className="bg-yellow-400 border-8 border-black sm:p-8 p-4 shadow-[16px_16px_0_0_#000] transform -rotate-2">
        <h1 className="text-5xl md:text-6xl font-black mb-4 text-red-500">
          OOPS!
        </h1>
        <p className="text-2xl sm:text-3xl font-bold mb-4">
          Looks like your filter settings are too hardcore!
        </p>
        <p className="text-sm sm:text-lg mb-7">
          We couldn&apos;t find any products matching your current filters. Try
          adjusting your search or check out our full collection!
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <BackHistory />
          <Link href="/shop">
            <Button className="sm:text-2xl text-lg max-w-full py-6 px-8 bg-green-400 hover:bg-green-500 text-black font-bold transform transition-all duration-200 hover:scale-105 border-4 border-black flex items-center justify-center">
              <RefreshCwIcon className="mr-2" /> View All Products
            </Button>
          </Link>
        </div>
      </div>
      <div className="mt-16 bg-pink-400 border-8 border-black p-8 shadow-[16px_16px_0_0_#000] transform rotate-2">
        <h2 className="text-4xl font-black mb-6">Need Help?</h2>
        <p className="text-xl mb-8">
          Our festival fashion experts are ready to assist you in finding the
          perfect gear!
        </p>
        <Button className="sm:text-2xl text-lg max-w-full py-6 px-8 bg-purple-500 hover:bg-purple-600 text-white font-bold transform transition-all duration-200 hover:scale-105 border-4 border-black">
          Contact Support
        </Button>
      </div>
    </div>
  );
}
