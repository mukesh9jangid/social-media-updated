import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./Loadingspinner";
// import { v4 as uuidv4 } from "uuid";

const PostList = () => {
  const { postList, fetching } = useContext(PostListData);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
      {/* {!fetching &&
        postList.map((post, index) => (
          <Post key={post.id || uuidv4() || index} post={post} />
        ))} */}
    </>
  );
};

export default PostList;
