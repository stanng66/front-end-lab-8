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
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/success");
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" />
        <input placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
