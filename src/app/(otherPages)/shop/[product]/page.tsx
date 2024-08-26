import { getSingleShirt } from "@/app/actions/GetShirts";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import ProductslideItem from "./_components/ProductslideItem";
import { shirt } from "../page";
import CreateCart from "./_components/CreateCart";
import Image from "next/image";

type Props = {
  params: { product: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export type imageColors = "white" | "black" | "blue";

export default async function ProductPage({ params, searchParams }: Props) {
  const singleProduct: shirt = JSON.parse(await getSingleShirt(params.product));

  const mainImage = (searchParams.mainimage ?? "black") as imageColors;
  return (
    <div className="max-w-5xl mx-auto  sm:px-4 py-8">
      <Link
        href="/shop"
        className="inline-flex items-center text-2xl font-bold mb-8 bg-yellow-400 text-black p-4 border-4 border-black transform -rotate-2 hover:rotate-0 transition-transform"
      >
        <ArrowLeftIcon className="mr-2" /> Back to Shop
      </Link>

      <div className="grid grid-cols-5 gap-8 bg justify-center items-center sm:items-start">
        <div className="col-[1/6] md:col-span-2">
          <div className="mb-4 p-4 bg-pink-300 border-8 border-black overflow-hidden">
            <Image
              src={singleProduct.images[mainImage]}
              alt={singleProduct.name}
              height={400}
              width={400}
              className="w-full h-auto"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {Object.keys(singleProduct.images).map((image, index) => (
              <ProductslideItem
                color={image as imageColors}
                index={index}
                key={index}
                name={singleProduct.name}
                image={singleProduct.images[image as imageColors]}
              />
            ))}
          </div>
        </div>

        <div className="bg-cyan-400 w-full col-span-full sm:col-span-3 p-6 border-8 border-black">
          <h1 className="text-2xl md:text-4xl font-black mb-4 transform -rotate-1">
            {singleProduct.name}
          </h1>
          <p className="text-3xl font-bold mb-6 bg-white inline-block px-4 py-2 border-4 border-black transform rotate-2">
            ${singleProduct.price}
          </p>
          <p className="text-lg mb-6">{singleProduct.description}</p>

          <CreateCart product={singleProduct} />
        </div>
      </div>
    </div>
  );
}
