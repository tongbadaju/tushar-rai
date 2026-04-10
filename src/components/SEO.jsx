import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, name, type }) {
  const currentUrl = window.location.href;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph tags for social sharing */}
      <meta property="og:type" content={type || 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={name || 'Tushar Rai'} />
      {/* Assuming there's a default OG image we might use later, normally pointed to a public URL */}
      {/* <meta property="og:image" content="https://yourdomain.com/images/avatar.jpg" /> */}

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name || 'Tushar Rai'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
