const Comments = ({ handleComments, active }) => {
  return (
    <div
      onClick={handleComments}
      className={active === "comments" ? "active" : ""}
    >
      Comments
    </div>
  );
};

export default Comments;