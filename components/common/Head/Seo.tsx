import React from 'react';

import Head from 'next/head';
import config from '@miista/seo.config.json';

interface ISeoProps extends React.PropsWithChildren {
  title: string;
  description: string;
  robots: string;
  openGraph: Partial<{
    title: string;
    type: string;
    locale: string;
    description: string;
    site_name: string;
    url: string;
  }>;
}

const SEO: React.FC<Partial<ISeoProps>> = ({ title, description, openGraph, robots, children }) => {
  return (
    <Head>
      <title key="title">{title ? `${config.titleTemplate.replace(/%s/g, title)}` : config.title}</title>
      <meta key="description" name="description" content={description || config.description} />
      <meta key="og:type" property="og:type" content={openGraph?.type ?? config.openGraph.type} />
      <meta
        key="og:title"
        property="og:title"
        content={openGraph?.title ?? config.openGraph.title ?? title ?? config.title}
      />
      <meta
        key="og:description"
        property="og:description"
        content={openGraph?.description ?? config.openGraph.description ?? description ?? config.description}
      />
      <meta key="og:site_name" property="og:site_name" content={openGraph?.site_name ?? config.openGraph.site_name} />
      <meta key="og:url" property="og:url" content={openGraph?.url ?? config.openGraph.url}></meta>
      {openGraph?.locale && <meta key="og:locale" property="og:locale" content={openGraph.locale} />}
      {config.twitter.cardType && <meta key="twitter:card" name="twitter:card" content={config.twitter.cardType} />}
      {config.twitter.site && <meta key="twitter:site" name="twitter:site" content={config.twitter.site} />}
      {config.twitter.handle && <meta key="twitter:creator" name="twitter:creator" content={config.twitter.handle} />}
      <meta key="robots" name="robots" content={robots ?? 'index,follow'} />
      <meta key="googlebot" name="googlebot" content={robots ?? 'index,follow'}></meta>
      {children}
    </Head>
  );
};

export default SEO;
