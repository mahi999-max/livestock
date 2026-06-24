import { auth } from "@/lib/auth"; // p,,ath to your auth file
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET } = toNextJsHandler(auth);