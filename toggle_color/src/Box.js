
const Box = ({colorValue='Empty Value',hexValue,darkText}) => {
  return (
    <div className="box"
    style={{
        backgroundColor:colorValue,
        color:darkText?"#000":"#FFF"
    }}
    
    >
        <p>{colorValue?colorValue:"Empty Value"}</p>
        <p>{hexValue?hexValue:null}</p>
    </div>
  )
}

export default Box