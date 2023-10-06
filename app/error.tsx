"use client"; // Error components must be Client Components

import { TypographyH1 } from "@/components/ui/typography";
import { useEffect } from "react";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  const message = error.message || error.digest || "An error occurred.";
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className=" h-screen mb-[-100px]  w-full space-y-6">
      <TypographyH1 className=" text-center text-red-600">
        {message}
      </TypographyH1>
      <div className=" flex justify-center gap-4">
        <Button
          color="primary"
          variant="bordered"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </Button>
        <Button color="primary" variant="solid" onClick={() => router.back()}>
          Go back
        </Button>
      </div>
    </div>
  );
}
