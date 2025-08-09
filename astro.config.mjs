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
            { label: "Fragment", slug: "modules/fragment" },
            { label: "JS Theme", slug: "modules/js-theme" },
            { label: "JS Widget", slug: "modules/js-widget" },
            { label: "Layout Template", slug: "modules/layout-template" },
            { label: "Modules Ext", slug: "modules/modules-ext" },
            { label: "MVC Portlet", slug: "modules/mvc-portlet" },
            {
              label: "NPM Angular Portlet",
              slug: "modules/npm-angular-portlet",
            },
            { label: "NPM React Portlet", slug: "modules/npm-react-portlet" },
            { label: "NPM VueJS Portlet", slug: "modules/npm-vuejs-portlet" },
            { label: "Panel App", slug: "modules/panel-app" },
            {
              label: "Portlet Configuration Icon",
              slug: "modules/portlet-configuration-icon",
            },
            { label: "Portlet Provider", slug: "modules/portlet-provider" },
          ],
        },
      ],
    }),
  ],
});
