import logo from "./logo.svg";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <img src={logo} className="App-logo" alt="logo" />
                <div className="frame">
                  <Link to='/goTogbmPage'>
                  <button
                    className="goToPageBtn"
                    href="/goTogbmPage"
                  >
                    <span> go to GBM's page </span>
                  </button>
                  </Link>
                  <Link to='/goTojjjPage'>
                  <button className="goToPageBtn" href="/goTojjjPage">
                    <span> go to JJJ's page </span>
                  </button>
                  </Link>
                </div>
              </>
            }
          />
          <Route path='/goTogbmPage' element= {
            <>
            <h1 className="mainContent">Hi, GBM</h1>
            </>
          }></Route>

          <Route path='/goTojjjPage' element={
            <h1 className="mainContent">Hi, JJJ</h1>
          }>

          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
