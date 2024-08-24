"use client";
import { Button } from "./ui/button";
import { Columns2Icon, LayoutGridIcon } from "lucide-react";
import useAddToParams from "@/hooks/useAddToParams";

type Props = {};

const ViewModeToggle = (props: Props) => {
  const { addToParams, searchParams } = useAddToParams();

  const viewMode = searchParams.get("viewMode") ?? "list";

  return (
    <div className="flex sm:hidden justify-center gap-4 mb-8">
      <Button
        onClick={() => addToParams("viewMode", "list")}
        className={`p-2 ${viewMode === "list" ? "bg-red-500" : "bg-gray-300"}`}
      >
        <Columns2Icon className="h-5 rotate-90 w-5 md:h-6 md:w-6" />
      </Button>
      <Button
        onClick={() => addToParams("viewMode", "grid2")}
        className={` p-2 ${
          viewMode === "grid2" ? "bg-red-500" : "bg-gray-300"
        }`}
      >
        <LayoutGridIcon className="h-5 w-5 md:h-6 md:w-6" />
      </Button>
    </div>
  );
};

export default ViewModeToggle;
