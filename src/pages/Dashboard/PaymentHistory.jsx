import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async"
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const PaymentHistory = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })

  return (
    <div>
       <Helmet>
            <title>Dashboard | Payment History</title>
       </Helmet>
        <div className="mx-auto text-center md:w-1/2 lg:w-4/12 my-8">
            <p className="text-[#D99904] italic text-sm font-medium mb-3">--- At a Glance! ---</p>
            <h3 className="text-2xl uppercase font-medium border-y-4 py-4">PAYMENT HISTORY</h3>
        </div>
        <div className="bg-white p-5 md:p-8 lg:p-12">
          <h2 className="text-sm md:text-base lg:text-xl font-display font-extrabold mb-5">Total Payments: {payments.length}</h2>
          <div className="overflow-x-auto rounded-t-lg">
            <table className="table w-full">
                {/* head */}
                <thead className="bg-[#D1A054]  uppercase text-white">
                    <tr>
                        <th></th>
                        <th className="font-medium">Total Price</th>
                        <th className="font-medium">Transaction ID</th>
                        <th className="font-medium">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment, index) => 
                    <tr key={payment._id}>
                        <th className="text-[#737373] text-xs">{index + 1}</th>
                        <td className="text-[#737373] text-xs">${payment.price}</td>
                        <td className="text-[#737373] text-xs">{payment.transactionId}</td>
                        <td className="text-[#737373] text-xs">{payment.status}</td>
                    </tr>
                    )}
                </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}

export default PaymentHistory
