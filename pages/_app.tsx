import { StaticKitProvider } from "@statickit/react";

function App({ Component, pageProps }) {
  return (
    <StaticKitProvider site="b5eb85ca4c57">
      <Component {...pageProps} />
    </StaticKitProvider>
  );
}

export default App;
