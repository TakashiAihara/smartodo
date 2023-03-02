import "../styles/globals.css";
import type { AppType } from "next/app";

// import type { Session } from "next-auth";
// import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

// const MyApp: AppType<{ session: Session | null }> = ({
const MyApp: AppType = ({
  Component,
  // pageProps: { session, ...pageProps },
  pageProps: { ...pageProps },
}) => {
  return (
    // <SessionProvider session={session}>
    <Component {...pageProps} />
    // </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
