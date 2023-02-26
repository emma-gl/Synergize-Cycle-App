import React from 'react';
//react app build
function App(props) {
  return (
    <div className="App">
    {/* <header className="App-header">
      <img src="/logo.png" className="App-logo" alt="logo" />
      <h1 className="App-title">Synergize</h1>
    </header> */}
    <main>
      <form onSubmit={(event) => { event.preventDefault(); props.showNextMenstruationDate(); }}>
        <label htmlFor="inputDate">Enter the date of your last menstrual cycle:</label>
        <input type="date" id="inputDate" name="inputDate" />
        <label htmlFor="cycleLength"><br></br>Enter the length of your average menstrual cycle:</label>
        <input type="number" id="cycleLength" name="cycleLength" />
        <button type="submit">Calculate</button>
      </form>
      </main>
      <footer className="App-footer">
        © 2023 Synergize
      </footer>
    </div>
  );
}

export default App;
