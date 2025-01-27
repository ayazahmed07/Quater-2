import { FaFacebook, FaInstagram, FaLinkedin, FaTruck } from "react-icons/fa";

const Footer =()=>{
    return (
        <div>
  <div className="flex flex-wrap bg-[#EEEFFB] h-auto w-full py-10 px-4 lg:px-16">
        {/* Hekto Brand and Contact Section */}
        <div className="flex flex-col w-full lg:w-1/3 mb-8 lg:mb-0">
          <p className="font-extrabold text-3xl lg:text-4xl">Hekto</p>

          <div className="flex flex-wrap mt-6">
            <input
              type="text"
              placeholder="Enter Email Address"
              className="w-full lg:w-2/3 border border-gray-300 px-4 py-2 text-center focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
            <button className="w-full lg:w-auto px-4 py-2 mt-4 lg:mt-0 lg:ml-2 text-white bg-pink-600">
              Sign Up
            </button>
          </div>

          <div className="text-[#8A8FB9] mt-8">
            <p>Contact Info</p>
            <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
          </div>
        </div>

        {/* Categories, Customer Care, and Pages Sections */}
        <div className="flex flex-wrap lg:flex-nowrap gap-10 lg:gap-20 w-full lg:w-2/3">
          <div className="w-full lg:w-1/3">
            <p className="font-bold mb-6 text-2xl">Categories</p>
            <ul className="text-[#8A8FB9] space-y-2">
              <li>Laptop & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>

          <div className="w-full lg:w-1/3">
            <p className="font-bold mb-6 text-2xl">Customer Care</p>
            <ul className="text-[#8A8FB9] space-y-2">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Order History</li>
              <li>Order Tracking</li>
            </ul>
          </div>

          <div className="w-full lg:w-1/3">
            <p className="font-bold mb-6 text-2xl">Pages</p>
            <ul className="text-[#8A8FB9] space-y-2">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              {/* <li>Visual Composer Elements</li>
              <li>WooCommerce Pages</li> */}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex flex-wrap bg-[#E7E4F8] h-auto w-full items-center justify-between px-4 py-4 lg:px-16">
        <p className="text-[#9DA0AE] text-center w-full lg:w-auto">
          © Ayaz Ahmed - All Rights Reserved 2024
        </p>
        <div className="flex gap-4 mt-4 lg:mt-0 justify-center w-full lg:w-auto">
          <FaFacebook size={20} className="text-blue-600" />
          <FaLinkedin size={20} className="text-blue-600" />
          <FaInstagram size={20} className="text-red-600" />
        </div>
      </div>
        </div>
    );
};

export default Footer;