import '@miista/assets/globals.css';
import '@miista/assets/tailwind.css';

import React from 'react';

import { SWRConfig } from 'swr';
import { fetcher } from '@miista/lib';
import type { AppProps } from 'next/app';
import { Head, Layout } from '@miista/components/common';
import { Categories, Filter } from '@miista/components/ui';

interface IAppProps extends AppProps {
  categories: string[];
}
function App({ Component, pageProps }: IAppProps) {
  return (
    <React.Fragment>
      <Head />
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <Layout>
          <Filter.Provider>
            <Categories>
              <Filter />
            </Categories>
            <Component {...pageProps} />
          </Filter.Provider>
        </Layout>
      </SWRConfig>
    </React.Fragment>
  );
}

export default App;
