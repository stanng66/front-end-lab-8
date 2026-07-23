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

  // Step 2.1: Once the User presses the submit button on the login/register forms, the user should be redirected to a separate component showing that the action has been successful.
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/success");
  };

  return (
    <div>
      <h2>Register</h2>
      {/* Step 1.2: For example, for register, there should be a registration form */}
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" />
        <input placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
