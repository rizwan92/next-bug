import HomeLayout from "../layouts/HomeLayout";

const Username = ({ username }) => (
  <HomeLayout>
    <h1>{username}</h1>
  </HomeLayout>
);

Username.getInitialProps = (ctx) => {
  const { req } = ctx;
  console.log(req.url);
  const { username } = ctx.query;
  // console.log(typeof windows === "undefined");
  return { username };
};

export default Username;
