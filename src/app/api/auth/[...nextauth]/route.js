import { handlers } from "@/auth"; // Referring to the auth.ts we just created
import logger from "../../../../../logger.mjs";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    logger.info("Auth Request");
    return handlers.GET(req, res);
  } catch (err) {
    logger.info(err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
};

export const POST = async (req, res) => {
  try {
    return handlers.POST(req, res);
  } catch (err) {
    logger.error(err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
};
