import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import ApiRequest from "./ApiRequest";

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
<<<<<<< Updated upstream

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
=======
>>>>>>> Stashed changes

  // const [items, setItems] = useState(JSON.parse(localStorage.getItem("Todo_items")));

   const [items, setItems] = useState([]);

   const API_URL="http://localhost:3500/items";

  // useEffect(()=>{
  //   console.log("Loading - useEffect") // run one time
  // },[])

  // useEffect(()=>{
  //   console.log("Loading - useEffect") - run every time based on items
  // },[items])

  // useEffect(() => {
  // const storedItems = JSON.parse(localStorage.getItem("Todo_items"));
  //   if(storedItems)
  //     setItems(storedItems);
  // }, []);

  const [fetchError,setFetchError]=useState(null);
  const [isLoading,setIsLoading]=useState(true);

  useEffect(()=>{
    const fetchItems=async()=>{
      try{
        const response = await fetch(API_URL);
        if(!response.ok)
          throw Error("Data not Received");
        const listItems=await response.json();
        setItems(listItems);
        setFetchError(null);
        console.log(listItems);
      }
      catch(e){
        setFetchError(e.message);
        console.log(e.message);
      }
      finally{
        setIsLoading(false)
      }
    }

    setTimeout(()=>{
      (async()=>await fetchItems())()
    },2000);

  },[]);

  const handleChange = async(id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    // localStorage.setItem("Todo_items", JSON.stringify(listItems));

    const myItem = listItems.filter((item)=>item.id === id)

    const updateOptions={
      method:"PATCH",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({checked:myItem[0].checked})
    }

    const reqApi=`${API_URL}/${id}`;

    const result = await ApiRequest(reqApi,updateOptions)

    if(result)
      setFetchError(result);

  };

  const handleDelete = async(id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    // localStorage.setItem("Todo_items", JSON.stringify(listItems));

    const deleteOptions={
      method:"DELETE"
    }
    const reqApi=`${API_URL}/${id}`;
    const result = await ApiRequest(reqApi,deleteOptions)

    if(result)
      setFetchError(result);
  };

  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
    console.log("submitted");
  };

  const addItem = async(item) => {
    const id = items.length ? Number(items[items.length - 1].id) + 1 : 1;
    const addNewItem = { id, checked: false, item };
    // const addNewItem = {checked: false, item };
    const listItems = [...items, addNewItem ];
    setItems(listItems);
    // localStorage.setItem("Todo_items", JSON.stringify(listItems));

    const postOptions={
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(addNewItem)
    }

    const result = await ApiRequest(API_URL,postOptions)

    if(result)  
      setFetchError(result);
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
      <main>
        {isLoading && <p>Loading Items...</p>}  
        {fetchError && <p>{`Error: ${fetchError}`}</p>}<br/>
        {!isLoading && 
          <Content
            items={items.filter((item)=>item.item && (item.item).toLowerCase().includes(searchData.toLowerCase()))}
            handleChange={handleChange}
            handleDelete={handleDelete}
          />
        }
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
