import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="goToPage" href="gsb/"> go to gbm page</a>
        <a className="goToPage" href="jjj/"> go to jjj page</a>
      </header>
    </div>
  );
}

export default App;
