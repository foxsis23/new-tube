import { HomeLayout } from "@/modules/home/ui/layouts/home-layout";
import { ReactNode } from "react";

interface HomeLayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: HomeLayoutProps) => {
  return <HomeLayout>{children}</HomeLayout>;
};

export default Layout;
