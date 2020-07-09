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
