
const Header = ({title="To do List"}) => {
  // const headerStyle={
  //   backgroundColor:'yellow',
  //   color:'red'
  // }
  return (
    <div>
        {/* <header style={headerStyle}>To Do List</header><br/>
        <header style={{backgroundColor:'yellow',
        color:'red'}}>To Do List</header> */}
        <header>
          <h1>{title}</h1>
        </header>
    </div>
  )
}

Header.defaultProps={
  title:"To do List"
};

export default Header
