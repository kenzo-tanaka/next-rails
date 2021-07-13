import { NextPage } from "next";
import PostsList from "../components/PostsList";

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
  return (
    <div>
      <h1>POSTS</h1>
      <PostsList />
    </div>
  );
};

export default Home;
