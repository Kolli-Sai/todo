import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div className=" container mx-auto max-w-7xl px-6 flex-grow">
      {props.children}
    </div>
  );
};

export default Layout;
