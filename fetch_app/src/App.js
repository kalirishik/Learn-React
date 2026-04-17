import { useState } from "react";
import Comments from "./Comments";
import Posts from "./Posts";
import Users from "./Users";

function App() {

  const [data, setData] = useState([]);
  const [active, setActive] = useState("");

  const handleUsers = async () => {
    setActive("users");
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    setData(result);
  };

  const handlePosts = async () => {
    setActive("posts");
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await response.json();
    setData(result);
  };

  const handleComments = async () => {
    setActive("comments");
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const result = await response.json();
    setData(result);
  };

  return (
    <>
      <div className="fetch-data">
        <div className="box1">
          <Users handleUsers={handleUsers} active={active} />
        </div>
        <div className="box2">
          <Posts handlePosts={handlePosts} active={active} />
        </div>
        <div className="box3">
          <Comments handleComments={handleComments} active={active} />
        </div>
      </div>

      <br />

      <main>
        {data.length > 0 && (
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <pre>{JSON.stringify(item, null, 2)}</pre>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}

export default App;