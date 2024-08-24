import { AllShirts } from "../../data";

export const dynamic = "force-static";

export async function getShirt() {
  //const searchParams = request.nextUrl.searchParams;
  //const query = searchParams.get("query");
  console.log({ entered: "true" });

  const data = AllShirts;
  console.log({ data });

  return JSON.stringify(data);
}
