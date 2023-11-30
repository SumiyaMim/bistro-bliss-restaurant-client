import { Helmet } from "react-helmet-async"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  return (
    <div className="md:py-20 lg:py-32">
       <Helmet>
            <title>Dashboard | Payment</title>
       </Helmet>
       <div className="mx-auto text-center md:w-1/2 lg:w-4/12 my-8">
            <h3 className="text-2xl uppercase font-medium">PAYMENT</h3>
        </div>
        <div className="lg:px-20">
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    </div>
  )
}

export default Payment
