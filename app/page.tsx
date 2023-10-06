import {
  TypographyH1,
  TypographyH2,
  TypographyLarge,
} from "@/components/ui/typography";
import React from "react";
import NextImage from "next/image";
import GetStartedButton from "@/components/getstarted-button";
import { getAuthSession } from "@/lib/auth-options";
import { redirect } from "next/navigation";
type Props = {};

const HomePage = async (props: Props) => {
  // throw new Error("This is an error");
  const { session } = await getAuthSession();
  if (session) {
    // throw new Error("You are already logged in");
    return redirect("/todos");
  }
  return (
    <>
      <section className="text-foreground body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <NextImage
              className="object-cover object-center rounded"
              alt="HomePage svg"
              src="/Home.svg"
              width={720}
              height={600}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <TypographyH2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary">
              Welcome
              <br className="hidden lg:inline-block" />
              to the Todo App
            </TypographyH2>
            <TypographyLarge className="mb-8 leading-relaxed">
              This is a simple todo app built with Next.js, Next Auth , Next Ui
              , Typescript and prisma ORM with MongoDB database.
            </TypographyLarge>
            <div className="flex justify-center">
              <GetStartedButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
