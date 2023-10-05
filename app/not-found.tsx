import React from "react";
import NextImage from 'next/image'
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import NotFoundGoBackButton from "@/components/not-found-goback-button";
type Props = {};

const NotFound = (props: Props) => {
  return (
    <>
      <section className="text-foreground body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <NextImage
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="Not Found"
            src="/not-found.svg"
            width={720}
            height={600}
          />
          <div className="text-center lg:w-2/3 w-full">
            <TypographyH1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary">
              404 Not Found
            </TypographyH1>
            <TypographyP className="mb-8 leading-relaxed">
              The page you are looking for does not exist
            </TypographyP>
            <div className="flex justify-center">
             <NotFoundGoBackButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
