import type { Route } from "./+types/home";
import { HomePage } from "../components/homepage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tina Thomas - Software Developer Portfolio" },
    { name: "description", content: "Software developer specializing in React, Node.js, and full-stack development. View my projects and experience." },
    { name: "keywords", content: "software developer, React, Node.js, TypeScript, full-stack, portfolio" },
  ];
}

export default function Home() {
  return <HomePage />;
}
