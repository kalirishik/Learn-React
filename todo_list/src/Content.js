// import { useState } from "react";

// const Content = () => {
//   function handleName(){
//     const arr=["Hi","Hello","Welcome"];
//     const i=Math.floor(Math.random()*arr.length);
//     return arr[i];
//   }
//   const handleClick1=()=>{
//     console.log("Button Clicking - 1");
//   }
//   const handleClick2=(name)=>{
//     console.log(`Button Clicking 2 - ${name}`);
//   }
//   const handleClick3=(e)=>{
//     console.log(e.target.innerText);
//   }

//   const [count,setCount]= useState(99);

//   const [name,setName]=useState("welcome");

//   function assignName(){
//     const arr=["Hi","Hello","Welcome"];
//     const i=Math.floor(Math.random()*arr.length);
//     setName(arr[i]);
//   }

//   function incrementCount(){
//     setCount(count=>count+1);
//   }
//   return (
//     <main>
//       <p>{handleName()} Guys!</p>
//       <button onClick={handleClick1}>Click 1</button>
//       <button onClick={()=>handleClick2('kali')}>Click 2</button>
//       <button onClick={(e)=>handleClick3(e)}>Click 3</button>

//       <button onClick={()=>setCount(count-1)}>-</button>
//       <p>{count}</p>
//       <button onClick={()=>setCount(count+1)}>+</button>
//       <button onClick={incrementCount}>+</button>

//       <p>{name} Guys!</p>
//       <button onClick={assignName}>Change Name</button>

//     </main>
//   )
// }

// export default Content

// import { useState } from "react";
// import { FaTrashAlt } from "react-icons/fa";

// const Content = () => {
//   const [items, setItems] = useState([
//     {
//       id: 1,
//       checked: true,
//       item: "Coding Practice",
//     },
//     {
//       id: 2,
//       checked: false,
//       item: "Listening Practice",
//     },
//     {
//       id: 3,
//       checked: false,
//       item: "Reading Practice",
//     },
//   ]);

//   const handleChange = (id) => {
//     const listItems = items.map((item) =>
//       item.id === id ? { ...item, checked: !item.checked } : item,
//     );
//     setItems(listItems);
//     localStorage.setItem("Todo_items", listItems);
//   };

//   const handleDelete = (id) => {
//     const listItems = items.filter((item) => item.id !== id);
//     setItems(listItems);
//     localStorage.setItem("Todo_items", listItems);
//   };

//   return (
//     <main>
//       {items.length?(
//         <ul>
//         {items.map((item) => (
//           <li className="item" key={item.id}>
//             <input
//               type="checkbox"
//               checked={item.checked}
//               onChange={() => handleChange(item.id)}
//             />
//             <label
//               style={
//                 item.checked ? { textDecorationLine: "line-through" } : null
//               }
//               onDoubleClick={() => handleChange(item.id)}
//             >
//               {item.item}
//             </label>
//             <FaTrashAlt
//               role="button"
//               tabIndex={0}
//               onClick={() => handleDelete(item.id)}
//             />
//           </li>
//         ))}
//       </ul>
//       ):
//       (
//         <p>List Item is Empty</p>
//       )}
//     </main>
//   );
// };

// import { FaTrashAlt } from "react-icons/fa";

// const Content = ({ items, handleChange, handleDelete }) => {
//   return (
//     <main>
//       {items.length ? (
//         <ul>
//           {items.map((item) => (
//             <li className="item" key={item.id}>
//               <input
//                 type="checkbox"
//                 checked={item.checked}
//                 onChange={() => handleChange(item.id)}
//               />
//               <label
//                 style={
//                   item.checked ? { textDecorationLine: "line-through" } : null
//                 }
//                 onDoubleClick={() => handleChange(item.id)}
//               >
//                 {item.item}
//               </label>
//               <FaTrashAlt
//                 role="button"
//                 tabIndex={0}
//                 onClick={() => handleDelete(item.id)}
//               />
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>List Item is Empty</p>
//       )}
//     </main>
//   );
// };

import ItemLists from "./ItemLists";

const Content = ({ items, handleChange, handleDelete }) => {
  return (
    <>
      {items.length ? (
        <ItemLists
          items={items}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      ) : (
        <p>List Item is Empty</p>
      )}
    </>
  );
};

export default Content;
