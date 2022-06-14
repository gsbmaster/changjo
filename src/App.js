import logo from "./logo.svg";
import "./App.css";
import { Link, Routes, Route, useNavigate, outlet, Navigate} from "react-router-dom";

function App() {

  const navigate = useNavigate();
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
                  <button onClick={() => {
                    navigate('/goTogbmPage');
                  }}
                    className="goToPageBtn"
                    href="/goTogbmPage"
                  >
                    <span> go to GBM's page </span>
                  </button>
                  <button onClick={() => {
                    navigate('/goTojjjPage');
                  }} className="goToPageBtn" href="/goTojjjPage">
                    <span> go to JJJ's page </span>
                  </button>
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
            <h1 className="mainContent">Hi, JJJ(Updated)</h1>
          }>

          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
