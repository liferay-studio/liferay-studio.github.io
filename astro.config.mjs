// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import mermaid from "astro-mermaid";

// https://astro.build/config
export default defineConfig({
  site: "https://liferay-studio.github.io",

  integrations: [
    mermaid(),
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
        {
          label: "Introduction",
          items: [
            { label: "What is Liferay?", slug: "introduction/what-is-liferay" },
            { label: "What is OSGi?", slug: "introduction/what-is-osgi" },
            { label: "OSGi Modules", slug: "introduction/osgi-modules" },
            {
              label: "Anatomy of .bnd file",
              slug: "introduction/anatomy-of-dot-bnd",
            },
            {
              label: "Liferay Workspace",
              slug: "introduction/liferay-workspace",
            },
            {
              label: "Liferay CLI Reference",
              slug: "introduction/liferay-cli-reference",
            },
          ],
        },
        {
          label: "Installation",
          items: [{ label: "Quick Start", slug: "installation/quick-start" }],
        },
        {
          label: "Modules",
          items: [
            { label: "API", slug: "modules/api" },
            { label: "Control Menu Entry", slug: "modules/control-menu-entry" },
            { label: "Form Field", slug: "modules/form-field" },
          ],
        },
      ],
    }),
  ],
});
