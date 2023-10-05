"use client";
import React from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useForm } from "react-hook-form";
import { CreateTodoSchemaType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTodoSchema } from "@/schemas";
import { createTodo } from "@/services";
import { toast } from "sonner";
type Props = {
  closeFn: () => void;
};

const AddTodoForm = (props: Props) => {
  /**useForm */
  const { register, reset, handleSubmit, formState } =
    useForm<CreateTodoSchemaType>({
      mode: "onChange",
      resolver: zodResolver(createTodoSchema),
    });

  /**formState */
  const { errors, isDirty, isLoading, isValid, isSubmitted, isSubmitting } =
    formState;

  /**handleSubmit */
  const onSubmit = async (obj: CreateTodoSchemaType) => {
    console.log({ createTodoData: obj });
    try {
      const { data, error } = await createTodo({
        title: obj.title,
        description: obj.description,
      });
      reset();
      props.closeFn();
      if (error) {
        toast.error(error);
      } else {
        toast.success("Todo created successfully");
      }
    } catch (error) {
      console.log({ errorinCreateTodo: error });
    }
  };
  return (
    <>
      <div className=" w-full">
        <form className=" flex flex-col gap-8">
          <Input
            {...register("title")}
            type="text"
            label="Title"
            variant="bordered"
            labelPlacement="outside"
            color="primary"
            // placeholder="Enter your task"
            fullWidth
            isRequired
            errorMessage={errors.title?.message}
            isInvalid={!!errors.title}
          />
          <Input
            {...register("description")}
            type="text"
            label="Description"
            labelPlacement="outside"
            variant="bordered"
            color="primary"
            // placeholder="Description"
            fullWidth
            errorMessage={errors.description?.message}
            isInvalid={!!errors.description}
          />
          <div className=" flex justify-end gap-2">
            <Button
              color="danger"
              variant="light"
              onClick={() => props.closeFn()}
            >
              Cancel
            </Button>
            <Button
              isDisabled={!isDirty || !isValid}
              isLoading={isLoading || isSubmitting}
              color="primary"
              onClick={handleSubmit(onSubmit)}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTodoForm;
