import type { Metadata } from "next";
import "./style.css";

export const metadata: Metadata = {
  title: "TaskForce",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="ru">{children}</html>;
}
