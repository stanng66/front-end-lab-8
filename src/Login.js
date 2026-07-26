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

export default function Login(){
    // Step 1.3: No validation for forms is required.
    const navigate = useNavigate(); 

    // Step 2.1: Once the User presses the submit button on the login/register forms, the user should be redirected to a separate component showing that the action has been successful.
    const handleSubmit = (e) => {
        e.preventDefault(); 
        navigate("/success");
    };

    return(
        <div>
            <h2> Login </h2>
            {/* Step 1.2: For example, for login, there should be a login form */}
            <form onSubmit={handleSubmit}>
              <input placeholder='Username' />
              <input placeholder='Password' />
            <button type='submit'>Login</button>
        </form>
        </div>
    );
}