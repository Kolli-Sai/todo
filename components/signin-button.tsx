"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Github } from "lucide-react";
import { toast } from 'sonner'
type Props = {};

const SigninButton = (props: Props) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const login = await signIn("github", { callbackUrl });
      setIsLoading(false);
      if (login?.error) {
        throw new Error(login.error);
      } else {
        console.log({ loginSuccess: login });
      }
    } catch (error:any) {
      console.log({ loginFailed: error });
      toast.error(error.message)
    }
  };
  return (
    <>
      <Button
        isLoading={isLoading}
        variant="shadow"
        endContent={<Github />}
        onClick={handleLogin}
        color="primary"
      >
        Sign in with Github
      </Button>
    </>
  );
};

export default SigninButton;
