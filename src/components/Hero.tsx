import { ShoppingCart } from 'lucide-react';

export default function Hero() {
  const toyyibpayLink = "https://toyyibpay.com/";

  return (
    <section className="w-full bg-[#f3faf4] pb-8">
      <div className="max-w-xl mx-auto w-full shadow-xl bg-white relative">
        <a href="#order" className="block cursor-pointer">
          <img 
            src="https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/ChatGPT-Image-Sep-19-2026-01_02_26-AM.png" 
            alt="PawCare Hero Banner" 
            className="w-full h-auto block"
          />
        </a>
        
        <div className="px-4 py-6 text-center">
          <a 
            href="#order"
            className="w-full inline-flex items-center justify-center px-8 py-5 text-xl font-black text-white bg-green-700 rounded-2xl hover:bg-green-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <ShoppingCart className="w-7 h-7 mr-3" />
            DAPATKAN SEKARANG
          </a>
          <p className="text-gray-500 text-sm mt-3 font-medium">Klik butang di atas untuk tempahan pantas</p>
        </div>
      </div>
    </section>
  );
}
