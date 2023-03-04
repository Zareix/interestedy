import { createTRPCRouter } from "~/server/api/trpc";
import { interestingThingsRouter } from "./routers/interestingThings";

export const appRouter = createTRPCRouter({
  interestingThings: interestingThingsRouter,
});

export type AppRouter = typeof appRouter;
