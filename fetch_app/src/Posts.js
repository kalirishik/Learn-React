const Posts = ({ handlePosts, active }) => {
  return (
    <div
      onClick={handlePosts}
      className={active === "posts" ? "active" : ""}
    >
      Posts
    </div>
  );
};

export default Posts;