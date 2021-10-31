import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <footer>lasha</footer>
    </>
  );
}

export default MyApp;
