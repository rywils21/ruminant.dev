import { useRef } from "react";
import { useScript } from "../hooks/useScript";

export function InArticleNewsletterForm() {
  const ref = useRef<HTMLDivElement>(null);
  useScript(
    "https://creative-builder-1451.ck.page/9dd1b4bab8/index.js",
    "9dd1b4bab8",
    ref
  );

  return <div ref={ref}></div>;
}

export function GenericNewsletterForm() {
  const ref = useRef<HTMLDivElement>(null);
  useScript(
    "https://creative-builder-1451.ck.page/2a32db53be/index.js",
    "2a32db53be",
    ref
  );

  return <div ref={ref}></div>;
}
