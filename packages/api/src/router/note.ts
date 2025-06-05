import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';
import { db } from '@repo/db';

export const noteRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    return db.select().from(notes);
  }),

  create: publicProcedure.input(z.object({
    content: z.string(),
    category: z.string().optional()
  })).mutation(async ({ input }) => {
    return db.insert(notes).values(input).returning();
  })
});
