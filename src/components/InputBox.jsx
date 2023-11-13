import "../styles/inputbox.scss";

function InputBox(props) { 

  return (
    <>
      <div className="word">{props.text}</div>
      <input
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
}
export default  InputBox;