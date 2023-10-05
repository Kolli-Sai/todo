import React from "react";
import Layout from "./layout";
import NextLink from "next/link";
import {
  TypographyH3,
  TypographyLead,
  TypographyP,
  TypographySmall,
} from "./ui/typography";

import NavbarSigninButton from "./navbar-signin-button";
import NavbarAvatarDropdown from "./navbra-avatar-dropdown";
import { getAuthSession } from "@/lib/auth-options";
import { ThemeSwitcher } from "./theme-switcher";
type Props = {};

const Navbar = async (props: Props) => {
  const { session } = await getAuthSession();
  return (
    <Layout>
      <nav className=" flex justify-between items-center py-5">
        <div className=" flex items-center">
          <NextLink href="/">
            <TypographyH3 className=" underline-offset-8 underline decoration-primary decoration-4">
              Todo App
            </TypographyH3>
          </NextLink>
        </div>
        <div className=" flex  items-center gap-4">
          <NextLink href={"/todos"}>
            <TypographyLead className=" text-primary hover:underline hover:underline-offset-2">
              Todos
            </TypographyLead>
          </NextLink>
          <ThemeSwitcher />
          {session ? (
            <NavbarAvatarDropdown
              email={session.user.email as string}
              image={session.user.image as string}
              name={session.user.name as string}
            />
          ) : (
            <NavbarSigninButton />
          )}
        </div>
      </nav>
    </Layout>
  );
};

export default Navbar;
