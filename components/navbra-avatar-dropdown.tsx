"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
type Props = {
  email: string;
  image: string;
  name: string;
};

const NavbarAvatarDropdown = (props: Props) => {
  const router = useRouter();
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar isBordered color="primary" src={props.image} />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" disabledKeys={["profile"]}>
        <DropdownItem key="profile">
          Signed in with <br />
          <strong>{props.email}</strong>
        </DropdownItem>
        <DropdownItem
          endContent={<LogOut className=" w-4 h-4" />}
          key="signout"
          className="text-danger"
          color="danger"
          onClick={() => router.push("/auth/signout")}
        >
          Sign out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavbarAvatarDropdown;
