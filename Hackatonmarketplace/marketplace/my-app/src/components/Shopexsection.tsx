import Image from "next/image";

export default function Shopexsection() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Section Heading */}
      <h2 className="text-[#151875] font-bold text-center text-3xl mt-6">
        What Shopex Offer!
      </h2>

      {/* Responsive Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-[40px] mt-10">
        {/* Card 1 */}
        <div className="border border-gray-300 p-6 text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/Images/free-delivery.png"
              height={65}
              width={65}
              alt="Free Delivery"
            />
          </div>
          <h3 className="font-bold text-[#151875]">Free Delivery</h3>
          <p className="text-gray-600 mt-2">
            Get free delivery on all orders above $50.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-300 p-6 text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/Images/cashback 1.png"
              height={65}
              width={65}
              alt="24/7 Support"
            />
          </div>
          <h3 className="font-bold text-[#151875]">24/7 Support</h3>
          <p className="text-gray-600 mt-2">
            Our team is here to help anytime, anywhere.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border border-gray-300 p-6 text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/Images/premium-quality 1.png"
              height={65}
              width={65}
              alt="Easy Refunds"
            />
          </div>
          <h3 className="font-bold text-[#151875]">Easy Refunds</h3>
          <p className="text-gray-600 mt-2">
            Hassle-free returns and refunds available.
          </p>
        </div>

        {/* Card 4 */}
        <div className="border border-gray-300 p-6 text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/Images/24-hours-support 1.png"
              height={65}
              width={65}
              alt="Secure Payments"
            />
          </div>
          <h3 className="font-bold text-[#151875]">Secure Payments</h3>
          <p className="text-gray-600 mt-2">
            Your transactions are safe and secure with us.
          </p>
        </div>
      </div>
    </div>
  );
}
