import React from "react";

function App() {
  const [givenInput, SetGivenInput] = React.useState(0);
  const [factorial, Setfactorial] = React.useState(0);

  const Factorial = (e) => {
    e.preventDefault();
    var ans = 1;

    for (var i = 2; i <= givenInput; i++) ans = ans * i;

    return Setfactorial(ans);
  };
  const onChange = (e) => {
    SetGivenInput(e.target.value);
  };
  return (
    <div>
      <h1>Factorial Calculator</h1>
      <form>
        <input
          type="number"
          placeholder="Enter a number..."
          onChange={onChange}
        />
        <br />
        <button type="submit" onClick={Factorial}>
          Calculate Factorial
        </button>
      </form>
      <h2>Factorial: {factorial}</h2>
    </div>
  );
}

export default App;
