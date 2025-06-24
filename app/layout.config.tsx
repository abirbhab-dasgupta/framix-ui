import GitHubIcon from "@/components/icons/github";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import {Frame } from "lucide-react";



export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center">
        <Frame className="mr-2 h-5 w-5 text-blue-600" />
        <span className="hidden md:inline-flex items-center text-lg font-bold tracking-tight text-black dark:text-white">
          FramixUI
        </span>
      </div>
    ),
  },
  links: [
    {
      text: "Docs",
      url: "/docs",
    },

    {
      type: "custom",
      children: <GitHubIcon />,
    },
  ],
};