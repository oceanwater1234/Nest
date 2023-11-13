import "../styles/index.scss";
import { useState } from "react";
import InputBox from "./InputBox";

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="Wrapper">
      <div className="InputGroup">
        <form className="InputWrapper" method="get">
          <InputBox
            name="username"
            text="username"
            type="text"
            value={username}
            onChange={(e) => { setUsername(e.target.value)}}
          />
          <InputBox
            name="password"
            text="password"
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value)}}
          />
          <button type="submit">button</button>
        </form>
      </div>
    </div>
  );
}

export default App;
