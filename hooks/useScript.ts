import { useEffect, RefObject } from "react";

export const useScript = (
  url: string,
  dataUID: string,
  ref: RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.dataset.uid = dataUID;
    script.async = true;

    if (ref.current) {
      ref.current.appendChild(script);
    }

    return () => {
      if (ref.current.contains(script)) {
        ref.current.removeChild(script);
      }
    };
  }, [url, dataUID, ref]);
};
