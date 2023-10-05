"use server";

import { getAuthSession } from "@/lib/auth-options";
import prisma, { connectToDatabase } from "@/lib/db";
import { createTodoSchema, updateTodoSchema } from "@/schemas";
import { CreateTodoSchemaType, UpdateTodoSchemaType } from "@/types";
import { revalidatePath } from "next/cache";

export const createTodo = async (props: CreateTodoSchemaType) => {
  const { session } = await getAuthSession();
  if (!session) {
    return {
      success: false,
      error: "You must be signed in to create a todo.",
    };
  }
  const validateProps = createTodoSchema.safeParse(props);
  if (!validateProps.success) {
    return {
      success: false,
      error: validateProps.error,
    };
  }
  try {
    await connectToDatabase();
    const todo = await prisma.todo.create({
      data: {
        title: props.title,
        description: props.description,
        createdBy: session.user.id,
      },
    });
    revalidatePath("/todos", "page");
    return {
      success: true,
      data: todo,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
  }
};

export const getTodos = async () => {
  const { session } = await getAuthSession();
  if (!session) {
    return {
      success: false,
      error: "You must be signed in to create a todo.",
    };
  }
  try {
    await connectToDatabase();
    const todos = await prisma.todo.findMany({
      where: {
        createdBy: session?.user.id,
      },
    });
    return {
      success: true,
      data: todos,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
  }
};

export const getTodo = async (id: string) => {
  const { session } = await getAuthSession();
  if (!session) {
    return {
      success: false,
      error: "You must be signed in to create a todo.",
    };
  }
  try {
    await connectToDatabase();
    const todo = await prisma.todo.findUnique({
      where: {
        id,
      },
    });
    if (!todo) {
      return {
        success: false,
        error: "Todo not found.",
      };
    }
    return {
      success: true,
      data: todo,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
  }
};

export const updateTodo = async (id: string, props: UpdateTodoSchemaType) => {
  const { session } = await getAuthSession();
  if (!session) {
    return {
      success: false,
      error: "You must be signed in to create a todo.",
    };
  }
  console.log({
    serverUpdateTodo: props,
  });
  const validateProps = updateTodoSchema.safeParse(props);
  if (!validateProps.success) {
    return {
      success: false,
      error: validateProps.error,
    };
  }
  try {
    await connectToDatabase();
    const todo = await prisma.todo.update({
      where: {
        id,
      },
      data: {
        title: props.title,
        description: props.description,
        completed: props.completed,
      },
    });
    revalidatePath("/todos/[id]", "page");
    return {
      success: true,
      data: todo,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
  }
};

export const deleteTodo = async (id: string) => {
  const { session } = await getAuthSession();
  if (!session) {
    return {
      success: false,
      error: "You must be signed in to create a todo.",
    };
  }
  try {
    await connectToDatabase();
    const todo = await prisma.todo.delete({
      where: {
        id,
      },
    });
    revalidatePath("/todos/[id]", "page");
    return {
      success: true,
      data: todo,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
  }
};
