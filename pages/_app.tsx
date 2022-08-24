import "../styles/globals.scss";
import "../styles/colors.module.scss";
import type { AppProps } from "next/app";
import { Layout } from "../components";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import combineReducers from "../states/reducers";

const store = configureStore({ reducer: combineReducers });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
