import { NextRequest, NextResponse } from "next/server";
import { AllShirts } from "../../data";
import { log } from "console";

export const dynamic = "force-static";

export async function GET(request: NextRequest) {
  //const searchParams = request.nextUrl.searchParams;
  //const query = searchParams.get("query");
  console.log({ entered: "true" });

  const data = AllShirts;
  console.log({ data });

  return NextResponse.json(data);
}
