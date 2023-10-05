import { z } from "zod";

export const createTodoSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(1).max(1000).optional(),
});

export const updateTodoSchema = z.object({
  title: z.string().min(1).max(100).optional(),
  description: z.string().min(1).max(1000).optional(),
  completed: z.boolean().optional(),
});

export const todoSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  completed: z.boolean(),
});
