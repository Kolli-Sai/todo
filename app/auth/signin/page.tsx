import { TypographyH1, TypographyH2, TypographyMuted, TypographyP } from "@/components/ui/typography";
import React from "react";
import NextImage from "next/image";
import SigninButton from "@/components/signin-button";
import { getAuthSession } from "@/lib/auth-options";
import { redirect } from "next/navigation";
import { Metadata } from "next";
type Props = {};

const SigninPage = async (props: Props) => {
  const { session } = await getAuthSession();
  if (session) {
    return redirect('/todos')
  }
  return (
    <>
      <section className="text-foreground body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <TypographyH2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary">
              Sign in 
              <br className="hidden lg:inline-block" />
              to your account
            </TypographyH2>
            <TypographyP className="mb-8 leading-relaxed">
              Click the button below to sign in to your account
            </TypographyP>
            <div className="flex justify-center">
              <SigninButton />
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <NextImage
              className="object-cover object-center rounded"
              alt="LoginPage svg"
              src="/Login.svg"
              width={720}
              height={600}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SigninPage;

export const metadata: Metadata = {
  title: "Sign in",
  openGraph: {
    url: "/auth/signin",
  }
}
