import '@miista/assets/globals.css';
import '@miista/assets/tailwind.css';

import React from 'react';

import type { AppProps } from 'next/app';
import { Head } from '@miista/components/common';
import { SWRConfig } from 'swr';
import { fetcher } from '@miista/lib';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head />
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </React.Fragment>
  );
}

export default MyApp;
