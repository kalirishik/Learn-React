
import Items from "./Items";

const ItemLists = ({ items, handleChange, handleDelete }) => {
  return (
    <ul>
          {items.map((item) => (
            <Items 
            item={item}
            key={item.id}
            handleChange={handleChange}
            handleDelete={handleDelete}
            />
          ))}
    </ul>
  )
}

export default ItemLists