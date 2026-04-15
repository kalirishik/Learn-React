import Box from "./Box";
import AddColor from "./AddColor";
import ToggleColor from "./ToggleColor";
import { useState } from "react";

const App=()=>{

  const [colorValue,setColorValue]=useState('');
  const [hexValue,setHexValue]=useState('');
  const [darkText,setDarkText]=useState(true);

  return(
    <div className="toggleDiv">
        <br/>
        <h2>Toggle Color</h2>
        <Box
        colorValue={colorValue}
        hexValue={hexValue}
        darkText={darkText}
        />
        <AddColor
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        />
        <ToggleColor
        darkText={darkText}
        setDarkText={setDarkText}
        />

    </div>
  )
}


export default App;
