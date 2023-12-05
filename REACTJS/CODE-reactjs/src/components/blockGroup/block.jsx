import "./block.css";

function Block({ no, number , isInside , description, style}) {
    //  const {title, number, isInside, description} = props;
    //  const title = props.title;
        const titleStr = <h3>đây là khối {no}</h3>;
  return (
    <>
       {!isInside && titleStr}
       {number && <h4>{number}</h4>}
      {/* {!props.isInside && <h3>{props.number}</h3>}
      {!props.isInside && <h1>{props.description}</h1>} */}
      <div className="block" style={style}>
        {/* {props.isInside && <h3>{props.number}</h3>}
        {!props.isInside && <h1>{props.description}</h1>} */}
        {isInside && titleStr}
      </div>
    </>
  );
}

export default Block;
