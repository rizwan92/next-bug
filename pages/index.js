import Head from "next/head";
import HomeLayout from "../layouts/HomeLayout";

const Home = () => (
  <HomeLayout>
    <div className="container">
      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
      <style jsx global>
        {`
          body {
            padding: 0;
            margin: 0;
            background-color: #000;
          }
        `}
      </style>
    </div>
  </HomeLayout>
);

export default Home;
