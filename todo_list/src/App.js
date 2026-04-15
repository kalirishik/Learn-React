import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {
  // const [items, setItems] = useState([
  //   {
  //     id: 1,
  //     checked: true,
  //     item: "Coding Practice",
  //   },
  //   {
  //     id: 2,
  //     checked: false,
  //     item: "Listening Practice",
  //   },
  //   {
  //     id: 3,
  //     checked: false,
  //     item: "Reading Practice",
  //   },
  // ]);

  // const [items, setItems] = useState(JSON.parse(localStorage.getItem("Todo_items")));

  const [items, setItems] = useState([]);

  // useEffect(()=>{
  //   console.log("Loading - useEffect")
  // },[])

  useEffect(() => {
  const storedItems = JSON.parse(localStorage.getItem("Todo_items"));
    if(storedItems)
      setItems(storedItems);
  }, []);

  const handleChange = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item,
    );
    setItems(listItems);
    localStorage.setItem("Todo_items", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("Todo_items", JSON.stringify(listItems));
  };

  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
    console.log("submitted");
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };
    const listItems = [...items, addNewItem ];
    setItems(listItems);
    localStorage.setItem("Todo_items", JSON.stringify(listItems));
  };

  const [searchData,setSearchData]=useState('');

  return (
    <div className="App">
      <Header title="Kali University" />
      <br />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
      searchData={searchData}
      setSearchData={setSearchData}
      />
      <Content
        items={items.filter((item)=>(item.item).toLowerCase().includes(searchData.toLowerCase()))}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
