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
function App({ Component, pageProps, categories }: IAppProps) {
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
            <Categories categories={categories}>
              <Filter />
            </Categories>
            <Component {...pageProps} />
          </Filter.Provider>
        </Layout>
      </SWRConfig>
    </React.Fragment>
  );
}

App.getInitialProps = async () => {
  const categories: string[] = await fetcher('http://localhost:3000/api/categories');
  return { categories };
};

export default App;
