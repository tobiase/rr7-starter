import { buttonVariants } from "@/components/ui/button";
import { SparklesPreviewDark } from "@/components/ui/sparkles-demo";
import { Link } from "react-router";
import { Welcome } from "../welcome/welcome";
import type { Route } from "./+types/home";

export function meta({ location }: Route.MetaArgs) {
  return [
    { title: `New React Router App - ${location.pathname}` },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <SparklesPreviewDark className="h-[20rem] rounded-none" />
      <Welcome />
      <div className="mt-8 flex justify-center">
        <Link
          to="/sparkles"
          className={buttonVariants({ variant: "outline" })}
        >
          More sparkles
        </Link>
      </div>
    </>
  );
}
