'use client';

import useBlobity from 'blobity/lib/react/useBlobity';

export default function BlobityClient() {
  useBlobity({
    color: 'rgb(180, 180, 180)',
    dotColor: 'rgb(100, 100, 255)',
    invert: true,
    radius: 6,
    size: 36,
    magnetic: true,
    licenseKey: "opensource",
    opacity: 1,
    zIndex: 1000,
    focusableElements:
    "[data-blobity], a:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",
  });

  return null;
}
