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
import { useParams } from "react-router-dom";

// Step 2.2: One of your components should access and process URL parameters using the useParams() hook. For instance, it accepts a parameter named “price” and displays it in the browsers.
export default function Price() {
  const { price } = useParams();

  return (
    <div>
      <h2> The price is: {price} </h2>
    </div>
  );
}
