import { Welcome } from "../welcome/welcome";
import type { Route } from "./+types/home";

export function meta({ location }: Route.MetaArgs) {
  return [
    { title: `New React Router App - ${location.pathname}` },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
