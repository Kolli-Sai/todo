import React from "react";
import { Button } from "@nextui-org/button";
import { TypographyH1 } from "@/components/ui/typography";
type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <div className=" text-red-600">HomePage</div>
      <Button color="success">button</Button>
      <TypographyH1 className=" text-secondary">TypographyH1</TypographyH1>
    </>
  );
};

export default HomePage;
