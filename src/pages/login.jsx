import "../assets/styles/index.scss"
import InputBox from "../components/InputBox"
import { useNavigate } from 'react-router-dom';
import { useState } from "react"
import { login } from "../api"

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  const handleSubmit = () => {
    login(username, password).then((res) => {
        console.log(123)
          navigate("/welcome")
      }).catch((err) => {
          console.log(err)
      });
  }

  return (
    <div className="Wrapper">
      <div className="InputGroup">
        <form
          className="InputWrapper"
          method="get"
          onSubmit={ 
            (e) => {
              e.preventDefault();
              handleSubmit()
            } }
        >
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