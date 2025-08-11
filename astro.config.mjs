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
          label: "Installation",
          collapsed: true,
          items: [{ label: "Quick Start", slug: "installation/quick-start" }],
        },
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
          label: "Portlets",
          items: [
            {
              label: "Portlet Basics",
              slug: "portlets/portlet-basics",
            },
            {
              label: "Portlet Advance",
              slug: "portlets/portlet-advance",
            },
            {
              label: "Portlet Security",
              slug: "portlets/portlet-security",
            },
            {
              label: "Portlet Samples",
              collapsed: true,
              items: [
                { label: "MVC Portlet", slug: "portlets/samples/mvc-portlet" },
                {
                  label: "Spring MVC Portlet",
                  slug: "portlets/samples/spring-mvc-portlet",
                },
                {
                  label: "Angular Portlet",
                  slug: "portlets/samples/npm-angular-portlet",
                },
                {
                  label: "React Portlet",
                  slug: "portlets/samples/npm-react-portlet",
                },
                {
                  label: "VueJS Portlet",
                  slug: "portlets/samples/npm-vuejs-portlet",
                },
                {
                  label: "Portlet Configuration Icon",
                  slug: "portlets/samples/portlet-configuration-icon",
                },
                {
                  label: "Portlet Provider",
                  slug: "portlets/samples/portlet-provider",
                },
                {
                  label: "Portlet Toolbar Contributor",
                  slug: "portlets/samples/portlet-toolbar-contributor",
                },
              ],
            },
          ],
        },
        {
          label: "Themes",
          items: [
            {
              label: "Themes Basics",
              slug: "themes/liferay-themes",
            },

            { label: "Modular Theme", slug: "themes/modular-theme" },
            {
              label: "Classic WAR Theme",
              slug: "themes/classic-war-based-themes-in-liferay-legacy-approach",
            },
            {
              label: "Theme Samples",
              collapsed: true,
              items: [
                {
                  label: "Classic Theme Sample",
                  slug: "themes/samples/classic-theme",
                },
                {
                  label: "JS Theme Sample",
                  slug: "themes/samples/js-theme-sample",
                },
                {
                  label: "Layout Template Sample",
                  slug: "themes/samples/layout-template",
                },
                {
                  label: "Theme Contributor Sample",
                  slug: "themes/samples/theme-contributor",
                },
                {
                  label: "Template Context Contributor",
                  slug: "themes/samples/template-context-contributor",
                },
                {
                  label: "React based Theme Sample",
                  slug: "themes/samples/react-based-theme-sample",
                },
              ],
            },
          ],
        },
        {
          label: "Other Liferay Modules",
          collapsed: true,
          items: [
            { label: "API", slug: "modules/api" },
            { label: "Control Menu Entry", slug: "modules/control-menu-entry" },
            { label: "Form Field", slug: "modules/form-field" },
            { label: "Fragment", slug: "modules/fragment" },

            { label: "JS Widget", slug: "modules/js-widget" },

            { label: "Modules Ext", slug: "modules/modules-ext" },

            { label: "Panel App", slug: "modules/panel-app" },

            { label: "REST Module", slug: "modules/rest-module" },
            { label: "REST Builder", slug: "modules/rest-builder" },
            { label: "Service Module", slug: "modules/service-module" },
            { label: "Service Builder", slug: "modules/service-builder" },
            { label: "Service Wrapper", slug: "modules/service-wrapper" },
            {
              label: "Simulation Panel Entry",
              slug: "modules/simulation-panel-entry",
            },

            // { label: "WCM Structure", slug: "modules/wcm-structure" },
            // { label: "WCM Template", slug: "modules/wcm-template" },
          ],
        },
        // {
        //   label: "Tools",
        //   items: [
        //     { label: "Bndtools", slug: "tools/bndtools" },
        //     { label: "Liferay IDE", slug: "tools/liferay-ide" },
        //     { label: "Liferay Studio", slug: "tools/liferay-studio" },

        //   ],
        // },
      ],
    }),
  ],
});
