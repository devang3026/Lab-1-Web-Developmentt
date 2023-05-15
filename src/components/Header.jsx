const Header = (props) => {
    return (
      <header>
        <h1>{props.title}</h1>
        <span><b>Total Number of Task:{props.totalnumbertask}</b></span>
      </header>
    );
  };
  
  export default Header;
  