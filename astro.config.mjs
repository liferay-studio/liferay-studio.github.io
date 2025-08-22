// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import mermaid from "astro-mermaid";

const site = "https://liferay-studio.github.io";

export default defineConfig({
  site,
  integrations: [
    mermaid(),
    starlight({
      title: "Liferay Studio",
      logo: {
        src: "./src/assets/img/liferay-studio.svg",
        alt: "Liferay Studio",
      },
      head: [
        {
          tag: "script",
          attrs: {
            is: "inline", // Important for Astro to handle the script correctly
            src: `https://www.googletagmanager.com/gtag/js?id=G-T6BFGHCLJQ`,
          },
        },
        {
          tag: "script",
          attrs: {
            is: "inline",
          },
          content: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-T6BFGHCLJQ');
              `,
        },
      ],

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
              label: "gradle.properties file",
              slug: "introduction/anatomy-of-gradle-properties-file",
            },
            {
              label: "Liferay Workspace",
              slug: "introduction/liferay-workspace",
            },
            {
              label: "Liferay CLI Reference",
              slug: "introduction/liferay-cli-reference",
            },
            {
              label: "@Component",
              slug: "introduction/component",
            },
            {
              label: "@Reference",
              slug: "introduction/reference",
            },
          ],
        },
        {
          label: "Advanced Topics",
          collapsed: true,
          items: [
            {
              label: "Headless Liferay",
              slug: "advance/headless",
            },
            {
              label: "Headless API Sample Project",
              slug: "advance/headless-sample",
            },
          ],
        },
        {
          label: "API",
          collapsed: true,
          items: [
            {
              label: "Liferay API",
              slug: "api/liferay-api",
            },
            { label: "Sample API", slug: "api/sample-api" },
          ],
        },

        {
          label: "Portlets",
          collapsed: true,
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
          collapsed: true,
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
          label: "REST",
          collapsed: true,
          items: [
            {
              label: "REST Patterns",
              slug: "rest/rest-patterns",
            },
            {
              label: "REST Module Basics",
              slug: "rest/rest-module",
            },
            {
              label: "REST Builder Basics",
              slug: "rest/rest-builder",
            },
            {
              label: "REST Samples",
              collapsed: true,
              items: [
                { label: "REST Module", slug: "rest/samples/rest-module" },
                { label: "REST Builder", slug: "rest/samples/rest-builder" },
              ],
            },
          ],
        },
        {
          label: "Services",
          collapsed: true,
          items: [
            {
              label: "Service Patterns",
              slug: "services/service-patterns",
            },
            {
              label: "Service Module Basics",
              slug: "services/service-module",
            },
            {
              label: "Service Builder Basics",
              slug: "services/service-builder",
            },
            {
              label: "Service Wrapper Basics",
              slug: "services/service-wrapper",
            },
            {
              label: "REST Samples",
              collapsed: true,
              items: [
                {
                  label: "Service Module",
                  slug: "services/samples/service-module",
                },
                {
                  label: "Service Builder",
                  slug: "services/samples/service-builder",
                },
                {
                  label: "Service Wrapper",
                  slug: "services/samples/service-wrapper",
                },
              ],
            },
          ],
        },
        {
          label: "Other Liferay Modules",
          collapsed: true,
          items: [
            { label: "Control Menu Entry", slug: "modules/control-menu-entry" },
            { label: "Form Field", slug: "modules/form-field" },
            { label: "Fragment", slug: "modules/fragment" },

            { label: "JS Widget", slug: "modules/js-widget" },

            { label: "Modules Ext", slug: "modules/modules-ext" },

            { label: "Panel App", slug: "modules/panel-app" },

            {
              label: "Simulation Panel Entry",
              slug: "modules/simulation-panel-entry",
            },
          ],
        },
      ],
      customCss: [
        "./src/assets/css/global.css",
        // ,"./src/assets/landing.css"
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
