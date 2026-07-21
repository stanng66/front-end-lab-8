// ====================
// Lab 8
// Stanley Nguyen
// Humber College
// CPAN-144-RNA
// Ronak Sheth
// July 28, 2026
// --------------------
// This program demonstrates react router and routing
// ====================
import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
// Step 1.1: Create a Links in App.js. It should have a few options such as "home," "login," "register."
import Register from "./register";
import Success from "./success";
import Price from "./price";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <h1> React Router and Routing </h1>
        <h2> Stanley Nguyen </h2>
        <h3> Lab 8 </h3>
      </div>

      <nav>
        <Link to="/home">Home</Link> {"   "}
        <Link to="/login">Login</Link> {"   "}
        {/* Step 1.1: Create a Links in App.js. It should have a few options such as "home," "login," "register." */}
        <Link to="/register">Register</Link> {" "}
        <Link to="/price/500">Price Example</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* Step 1.2: Using react-router , Each option should load a specific component relevant to that option. */}
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} />
        <Route path="/price/:price" element={<Price />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
