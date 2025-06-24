import GitHubIcon from "@/components/icons/github";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Flame, Github } from "lucide-react";



export const baseOptions = {
  nav: {
    title: (
      <div className="flex items-center">
        <Flame className="mr-2 h-5 w-5 text-blue-600" />
        <span className="hidden md:inline-flex items-center text-lg font-bold tracking-tight text-black dark:text-white">
          FramixUI
        </span>
      </div>
    ),
    // You can add search, theme toggle, etc. here if supported
  },
  links: [
    {
      text: "Docs",
      url: "/docs",
    },

    {
      text: "Pricing",
      url: "/pricing",
    },

    {
      type: "custom",
      children: <GitHubIcon/>,
    },

   
  ],
  // ...other options
};