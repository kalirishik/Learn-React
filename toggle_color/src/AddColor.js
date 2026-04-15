import colorNames from 'colornames'

const AddColor = ({colorValue,setColorValue,setHexValue}) => {
  return (
    <form className="form" onSubmit={(e)=>e.preventDefault()}>
        <input
        type="text"
        id="AddColor"
        placeholder="Add Color Name"
        autoFocus
        value={colorValue}
        onChange={(e)=>{
            setColorValue(e.target.value)
            setHexValue(colorNames(e.target.value))
        }}
        />
    </form>
  )
}

export default AddColor