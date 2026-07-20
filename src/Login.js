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

    const handleSubmit = (e) => {
        e.preventDefault(); 
        navigate("/success");
    };

    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <input placeholder='Username' />
              <input placeholder='Password' />
            <button type='submit'> Login </button>
        </form>
        </div>
    );
}