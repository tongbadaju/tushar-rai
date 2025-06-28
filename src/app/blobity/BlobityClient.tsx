"use client";

import { useEffect } from "react";

export default function BlobityClient() {
  useEffect(() => {
    // Load the Blobity script
    const script = document.createElement("script");
    script.src = "https://cdn.blobity.gmrchk.com/by.js";
    script.async = true;
    script.onload = () => {
      // @ts-ignore: global Blobity is provided by the script
      new Blobity({
        color: "rgb(180, 180, 180)",
        radius: 6,
        size: 36,
        dotColor: "rgb(100, 100, 255)",
        font: "inherit",
        kineticMorphing: true,
        magnetic: true,
        invert: true,
        licenseKey: "opensource",
        opacity: 1,
        zIndex: 1000,
        focusableElements:
        "[data-blobity], a:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",
      });
    };
    document.body.appendChild(script);
  }, []);

  return null; // no visual output
}
