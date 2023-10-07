"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
type Props = {};

const NavbarMenu = (props: Props) => {
  const router = useRouter();
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="flat" isIconOnly>
          <Menu />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new" onClick={() => router.push("/")}>
          Home
        </DropdownItem>
        <DropdownItem key="copy" onClick={() => router.push("/todos")}>
          Todos
        </DropdownItem>
        {/* <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem> */}
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavbarMenu;
