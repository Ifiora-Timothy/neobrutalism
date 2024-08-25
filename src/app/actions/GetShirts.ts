import { AllShirts } from "../../data";

export const dynamic = "force-static";

export async function getShirt() {
  //const searchParams = request.nextUrl.searchParams;
  //const query = searchParams.get("query");
  console.log({ entered: "true" });

  const data = AllShirts;

  return JSON.stringify(data);
}

export async function getSingleShirt(id: string) {
  //const searchParams = request.nextUrl.searchParams;
  //const query = searchParams.get("query");
  console.log({ entered: "true" });

  const data = AllShirts.find((shirt) => shirt.id === Number(id));

  return JSON.stringify(data);
}
