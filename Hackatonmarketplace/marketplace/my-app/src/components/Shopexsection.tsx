import { FaTruck } from "react-icons/fa";

export default function Shopexsection() {
  return (
    <div>
      <div className="text-[#151875] font-bold text-center justify-center text-3xl mt-6">
        What Shopex Offer!
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        <div className="flex gap-7 justify-center m-3 text-[#151875]">
          <div className="border border-gray rounded-md w-[270px] h-[320px] text-center ">
            <div className="flex justify-center m-7">
              <FaTruck size={64} color="red" />
            </div>
            <div className="font-bold m-7">24/7 Support</div>
            <div className="m-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque cum
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
