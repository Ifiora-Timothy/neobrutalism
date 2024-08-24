import { NextRequest, NextResponse } from "next/server";
import { AllShirts } from "../../data";

export const dynamic = "force-static";

export async function GET(request: NextRequest) {
  //const searchParams = request.nextUrl.searchParams;
  //const query = searchParams.get("query");
  const data = AllShirts;

  return NextResponse.json(AllShirts);
}
