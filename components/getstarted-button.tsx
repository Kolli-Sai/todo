"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";
type Props = {};

const GetStartedButton = (props: Props) => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/auth/signin")}
      color="primary"
      endContent={<MoveRight />}
      variant="shadow"
    >
      Get Started
    </Button>
  );
};

export default GetStartedButton;
