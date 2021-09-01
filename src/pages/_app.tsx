import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import type { AppContext, AppProps } from "next/app";
import Head from "next/head";
import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { PublicGuard } from "~/guards";
import Layout from "~/layouts";
import store from "~/stores";
import "~/styles/global.scss";
import type { GuardedNextPage } from "~/types/app";

type AppRootProps = AppProps & {
  Component: Pick<AppProps, "Component"> & GuardedNextPage;
};

const MyApp = ({ Component, pageProps }: AppRootProps): JSX.Element => {
  const Guard = (Component.guard as React.ElementType) || PublicGuard;

  return (
    <Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=yes"
        />
      </Head>
      <Provider store={store}>
        <Guard>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Guard>
      </Provider>
    </Fragment>
  );
};

// we need blocking data requirements
// such cookie, and application settings from backend
MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps: { ...pageProps } };
};

export default MyApp;
