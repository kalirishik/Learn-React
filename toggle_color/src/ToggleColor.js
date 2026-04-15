const ToggleColor = ({darkText,setDarkText}) => {
  return (
    <button 
    className="toggle"
    onClick={()=>setDarkText(!darkText)}
    >Toggle Text Color
    </button>
  )
};

export default ToggleColor;
