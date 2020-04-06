import Head from "next/head";

const HomeLayout = ({ children }) => (
  <React.Fragment>
    <Head>
      <title>Next-App</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href="/rizwan.css" />

      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js" />
    </Head>
    <h1>Navbar</h1>
    <div>{children}</div>
  </React.Fragment>
);

export default HomeLayout;
