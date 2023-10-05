import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "@/components/ui/typography";
import React from "react";
import NextImage from "next/image";
import SignoutButton from "@/components/signout-button";
import { getAuthSession } from "@/lib/auth-options";
import { redirect } from "next/navigation";
type Props = {};

const SignoutPage = async (props: Props) => {
  const { session } = await getAuthSession();
  if (!session) {
    return redirect("/auth/signin?callbackUrl=/todos");
  }
  return (
    <>
      <section className="text-foreground body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <NextImage
              className="object-cover object-center rounded"
              alt="LogoutPage svg"
              src="/logout.svg"
              width={720}
              height={600}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <TypographyH2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary">
              Sign out
              <br className="hidden lg:inline-block" />
              of your account
            </TypographyH2>
            <TypographyP className="mb-8 leading-relaxed">
              Click the button below to sign out of your account
            </TypographyP>
            <div className="flex justify-center">
              <SignoutButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignoutPage;
