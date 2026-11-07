import type { Request, Response } from "express";
import { appRouter } from "../routers";
import { createContext } from "./context";

export async function buildSsrPrefetch(req: Request, res: Response) {
  const ctx = await createContext({ req, res, info: {} as never });
  // Keep this allowlist explicit: only public, read-only procedures belong here.
  // The current public homepage has no server data queries yet.
  void appRouter.createCaller(ctx);
  return {} as Record<string, never>;
}
