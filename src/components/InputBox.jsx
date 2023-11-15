import "../assets/styles/inputbox.scss";

export default function InputBox(props) { 
  return (
    <div className="InputGroup">
      <div className="word">{props.text}</div>
      <input
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}