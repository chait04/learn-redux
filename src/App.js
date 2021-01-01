import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, signIn } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <h1>Hello Redux</h1>
      </div>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      <br />

      <section>
        <button onClick={() => dispatch(signIn())}>
          {isLogged ? "Sign out" : "Sign In"}
        </button>
        {isLogged ? (
          <p>
            <i>Your are</i>
            <strong> In</strong>
          </p>
        ) : (
          <h3>
            Sign in <code>Bitch!!</code>
          </h3>
        )}
      </section>
    </div>
  );
}

export default App;
