import TodoDetailPageForm from "@/components/forms/todo-detail-page-form";
import {
  TypographyH1,
  TypographyH3,
  TypographyLarge,
} from "@/components/ui/typography";
import { getAuthSession } from "@/lib/auth-options";
import { getTodo } from "@/services";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata(props: Props) {
  const { data, error } = await getTodo(props.params.id);
  if (error) {
    return {
      title: "Not Found",
      description: "Todo not found",
      openGraph: {
        url: `/todos/${props.params.id}`,
      },
    };
  }
  return {
    title: data?.title,
    description: data?.description,
    openGraph: {
      url: `/todos/${data?.id}`,
    },
  };
}

const TodoPage = async (props: Props) => {
  const { session } = await getAuthSession();
  const { data, error } = await getTodo(props.params.id);
  if (!session) {
    return redirect("/auth/signin?callbackUrl=/todos");
  }
  if (error) {
    throw new Error(error);
  }
  return (
    <>
      <TypographyH1 className=" mb-8">Todo Detail Page</TypographyH1>
      {data && (
        <TodoDetailPageForm
          todo={{
            id: data.id,
            title: data.title,
            completed: data.completed,
            description: data.description ?? "",
          }}
        />
      )}
    </>
  );
};

export default TodoPage;
