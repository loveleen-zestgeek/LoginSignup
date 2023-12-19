import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import MyFormikYup from "./components/MyFormikYup";
import MyFormikField from "./components/MyFormikField";

function App() {
  return (
    <>
      <h2>Welcome</h2>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/myformikyup">MyFormikYup</Link>
              </li>
              <li>
                <Link to="/myformikfield">MyFormik Field</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/myformikyup" exact element={<MyFormikYup />} />
            <Route path="/myformikfield" exact element={<MyFormikField />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
