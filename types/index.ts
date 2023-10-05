import { createTodoSchema, todoSchema, updateTodoSchema } from "@/schemas";
import { z } from "zod";
export type CreateTodoSchemaType = z.infer<typeof createTodoSchema>;

export type UpdateTodoSchemaType = z.infer<typeof updateTodoSchema>;

export type TodoSchemaType = z.infer<typeof todoSchema>;