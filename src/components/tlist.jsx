const tlist = (props) => {
    console.log(props);
    return (
      <div>
        <h2><b>{props.title}</b></h2>
        <ul>
        {props.tasks.map((task) => (
          <li>{task}</li>
        ))}
        </ul>
      </div>
    );
  };
  
  export default tlist;
  