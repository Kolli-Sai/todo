"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { todoSchema } from "@/schemas";
import { TodoSchemaType } from "@/types";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { Textarea } from "@nextui-org/input";
import { deleteTodo, updateTodo } from "@/services";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
type Props = {
  todo: {
    id: string;
    title: string;
    completed: boolean;
    description: string;
  };
};

const TodoDetailPageForm = (props: Props) => {
  /**router */
  const router = useRouter();
  /**state */
  const [isSelected, setIsSelected] = React.useState(props.todo.completed);
  const [deleteLoading, setDeleteLoading] = React.useState(false);
  /**useForm */
  const { register, handleSubmit, reset, formState, setValue } =
    useForm<TodoSchemaType>({
      resolver: zodResolver(todoSchema),
      mode: "onChange",
      defaultValues: {
        title: props.todo.title,
        completed: props.todo.completed,
        description: props.todo.description,
      },
    });
  /**formState */
  const { errors, isValid, isDirty, isLoading, isSubmitting } = formState;

  /**handleSubmit */
  const onSubmit = async (data: TodoSchemaType) => {
    console.log({
      updateTodoData: data,
      completed: isSelected,
    });
    try {
      const { data: res, error } = await updateTodo(props.todo.id, {
        ...data,
        completed: isSelected,
      });
      console.log({
        updateTodoResponse: res,
      });
      reset();
      // router.refresh();
      if (error) {
        toast.error(error);
      } else {
        router.push("/todos");
        toast.success("Updated Successfully");
      }
    } catch (error) {
      console.log({ updateTodoError: error });
    }
  };

  /**handle Delete */
  const handleDelete = async () => {
    console.log("delete");
    setDeleteLoading(true);
    try {
      const { data, error } = await deleteTodo(props.todo.id);
      setDeleteLoading(false);
      if (error) {
        toast.error(error);
      } else {
        toast.success("Deleted Successfully");
        router.push("/todos");
      }
    } catch (error) {
      console.log({
        deleteTodoError: error,
      });
    }
  };
  return (
    <>
      <form className=" flex flex-col gap-8 max-w-md">
        <Input
          type="text"
          // label="Title"
          {...register("title")}
          errorMessage={errors.title?.message}
          isInvalid={!!errors.title}
          fullWidth
          color="primary"
          variant="bordered"
          // labelPlacement="outside-left"
        />
        <Textarea
          // type="text"
          // label="Description"
          {...register("description")}
          errorMessage={errors.description?.message}
          isInvalid={!!errors.description}
          fullWidth
          color="primary"
          variant="bordered"
          // labelPlacement="outside-left"
        />
        <Checkbox
          {...register("completed")}
          isSelected={isSelected}
          onValueChange={setIsSelected}
        >
          Completed
        </Checkbox>
        <div className=" flex justify-end gap-3">
          <Button
            isDisabled={!isValid}
            isLoading={isSubmitting}
            onClick={handleSubmit(onSubmit)}
            color="primary"
          >
            Save Changes
          </Button>
          <Button
            isLoading={deleteLoading}
            onClick={handleDelete}
            color="danger"
          >
            Delete
          </Button>
        </div>
      </form>
    </>
  );
};

export default TodoDetailPageForm;
