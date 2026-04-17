const Users = ({ handleUsers, active }) => {
  return (
    <div
      onClick={handleUsers}
      className={active === "users" ? "active" : ""}
    >
      Users
    </div>
  );
};

export default Users;