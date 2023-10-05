"use client";
import { Button } from "@nextui-org/button";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";
type Props = {};

const SignoutButton = (props: Props) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await signOut({
        redirect: false,
        callbackUrl: callbackUrl,
      });
      console.log({ loggedOutSuccessfully: true });
      router.push(callbackUrl);
      router.refresh();
      toast.success("You have been signed out");
    } catch (error) {
      console.log({ errorInLogout: error });
      toast.error("An error occured while signing out");
    }
  };
  return (
    <>
      <Button
        endContent={<LogOut />}
        color="primary"
        variant="shadow"
        isLoading={isLoading}
        onClick={handleLogout}
      >
        Sign out
      </Button>
    </>
  );
};

export default SignoutButton;
