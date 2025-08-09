// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://liferay-studio.github.io",

  integrations: [
    starlight({
      title: "Liferay Studio",
      description:
        "Liferay Studio is a collection of tools, frameworks, libraries, utilities, tools and learning resources for Liferay developers.",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/liferay-studio/liferay-studio.github.io",
        },
        {
          icon: "linkedin",
          label: "Linkedin",
          href: "https://www.linkedin.com/company/liferay-studio",
        },
      ],
      sidebar: [
        // {
        //   label: "Projects",
        //   items: [
        //     // Each item here is one entry in the navigation menu.
        //     { label: "Just-Blade", slug: "just-blade" },
        //     { label: "WP-Blade", slug: "wp-blade" },
        //     { label: "WP-Theme", slug: "wp-theme" },
        //   ],
        // },
        //   {
        //     label: "Guides",
        //     items: [
        //       // Each item here is one entry in the navigation menu.
        //       { label: "Example Guide", slug: "guides/example" },
        //     ],
        //   },
        //   {
        //     label: "Reference",
        //     autogenerate: { directory: "reference" },
        //   },
      ],
    }),
  ],
});
