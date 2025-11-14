import type { LoaderFunctionArgs } from "react-router";
import { siteMeta } from "~/lib/site-metadata";

export async function loader({}: LoaderFunctionArgs) {
  const body = `/* TEAM */
Developer: Krixum Team
Site: ${siteMeta.siteUrl}
Contact: ${siteMeta.contactEmail}
Twitter: ${siteMeta.twitterHandle}
Location: India

/* THANKS */
React Router - Modern routing for React
Remix - Full-stack web framework
Cloudflare - Edge computing platform
Radix UI - Accessible component primitives
Tailwind CSS - Utility-first CSS framework

/* SITE */
Last update: ${new Date().getFullYear()}
Language: English
Doctype: HTML5
Standards: HTML5, CSS3, ES2022
Components: React, TypeScript, Tailwind CSS
IDE: Visual Studio Code
`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
