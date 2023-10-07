import AddTodoModal from "@/components/add-todo-modal";
import AddTodoForm from "@/components/forms/add-todo-form";
import {
  TypographyH1,
  TypographyH3,
  TypographyMuted,
} from "@/components/ui/typography";
import { getAuthSession } from "@/lib/auth-options";
import { getTodos } from "@/services";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Metadata } from "next";
import NextLink from "next/link";

import { redirect } from "next/navigation";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "All Todos",
  openGraph: {
    url: "/todos",
    title: "All Todos",
    description: "All toddos listed in this page",
  },
};

const TodosPage = async (props: Props) => {
  const { session } = await getAuthSession();
  const { data, error } = await getTodos();
  if (!session) {
    return redirect("/auth/signin?callbackUrl=/todos");
  }
  if (error) {
    throw new Error(error);
  }

  return (
    <>
      <div className=" flex justify-end ">
        <AddTodoModal />
      </div>
      {data?.length === 0 && (
        <div className=" flex justify-center items-center h-auto py-24 ">
          <TypographyH1 className=" text-center ">No Todos Found</TypographyH1>
        </div>
      )}
      <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8 py-12 ">
        {data?.map((todo) => {
          return (
            <>
              <NextLink
                href={`/todos/${todo.id}`}
                key={todo.id}
                className="rounded-xl border-2 hover:border-2 hover:border-primary hover:rounded-xl"
              >
                <div className=" px-4 py-2 rounded-xl ">
                  <TypographyH3 className=" capitalize line-clamp-1">
                    {todo.title}
                  </TypographyH3>
                  <TypographyMuted>
                    Completed : &nbsp;
                    <span className=" text-primary">
                      {JSON.stringify(todo.completed)}
                    </span>
                  </TypographyMuted>
                </div>
              </NextLink>
            </>
          );
        })}
      </div>
    </>
  );
};

export default TodosPage;
