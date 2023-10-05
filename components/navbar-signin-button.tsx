"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
type Props = {};

const NavbarSigninButton = (props: Props) => {
  const router = useRouter();
  return (
    <>
      <Button onClick={() => router.push('/auth/signin')}  color="primary">
        Sign in
      </Button>
    </>
  );
};

export default NavbarSigninButton;
