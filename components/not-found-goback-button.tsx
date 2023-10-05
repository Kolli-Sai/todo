"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";
import { MoveLeft } from "lucide-react";
type Props = {};

const NotFoundGoBackButton = (props: Props) => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}
      color="primary"
      variant="flat"
      startContent={<MoveLeft />}
    >
      Go Back
    </Button>
  );
};

export default NotFoundGoBackButton;
