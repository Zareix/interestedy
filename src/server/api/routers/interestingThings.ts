import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const interestingThingsRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.interestingThing.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),
  get: protectedProcedure
    .input(z.string().optional())
    .query(({ ctx, input }) => {
      return ctx.prisma.interestingThing.findFirst({
        where: {
          id: input,
          userId: ctx.session.user.id,
        },
      });
    }),
  create: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        url: z.string(),
        description: z.string().optional(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.interestingThing.create({
        data: {
          userId: ctx.session.user.id,
          title: input.title,
          url: input.url,
          description: input.description,
          createdAt: new Date(),
        },
      });
    }),
  delete: protectedProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.interestingThing.delete({
      where: {
        id: input,
      },
    });
  }),
});
