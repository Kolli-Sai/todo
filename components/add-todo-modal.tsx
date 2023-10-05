"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Plus } from "lucide-react";
import AddTodoForm from "./forms/add-todo-form";
type Props = {};

const AddTodoModal = (props: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        color="primary"
        variant="bordered"
        endContent={<Plus />}
        onPress={onOpen}
      >
        Add new Todo
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" backdrop="blur">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add new Todo
              </ModalHeader>
              <ModalBody>
                <AddTodoForm closeFn={onClose} />
              </ModalBody>
             
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddTodoModal;
