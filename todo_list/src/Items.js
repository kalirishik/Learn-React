import { FaTrashAlt } from "react-icons/fa";

const Items = ({ item, handleChange, handleDelete }) => {
  return (
    <li className="item">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleChange(item.id)}
              />
              <label
                style={{textDecoration: item.checked ? "line-through":"none"}}
                onDoubleClick={() => handleChange(item.id)}
              >
                {item.item}
              </label>
              <FaTrashAlt
                role="button"
                tabIndex={0}
                onClick={() => handleDelete(item.id)}
                aria-label= {`delete ${item.item}`}
              />
    </li>
  )
}

export default Items