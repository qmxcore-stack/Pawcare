import { useState } from 'react';
import { ShoppingCart, Lock, ChevronDown } from 'lucide-react';

export default function Pricing() {
  const [quantities, setQuantities] = useState({
    combo1: 1,
    combo2: 0,
    combo3: 0,
  });

  const updateQuantity = (product: keyof typeof quantities, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [product]: Math.max(0, prev[product] + delta)
    }));
  };

  const calculateTotal = () => {
    return (quantities.combo1 * 39) + (quantities.combo2 * 70) + (quantities.combo3 * 100);
  };

  return (
    <section id="order" className="py-12 bg-[#f9f8f4] font-sans text-gray-800">
      <div className="max-w-lg mx-auto px-4">
        
        {/* Step 1: Pilih Produk */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-[#1e7b36] text-white flex items-center justify-center font-bold text-lg shadow-sm">1</div>
            <h2 className="text-xl font-extrabold text-[#1e7b36] uppercase tracking-wide">Langkah 1: Pilih Produk / Pakej</h2>
          </div>

          <div className="space-y-4">
            {/* Card 1 - Active */}
            <div className="relative bg-white rounded-2xl border-2 border-[#1e7b36] p-4 shadow-md">
              <div className="absolute -top-3 left-4 bg-[#1e7b36] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-sm">
                <span>✨</span> SET RAWATAN ASAS
              </div>
              
              <div className="flex items-start gap-4 mt-2 mb-4">
                <img 
                  src="https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/08/Firefly-10-scaled.jpg" 
                  alt="1 Botol PawCare" 
                  className="w-20 h-20 object-cover rounded-xl border border-gray-100 shadow-sm"
                />
                <div className="flex-1">
                  <h3 className="font-extrabold text-sm mb-1 uppercase">1 Botol PawCare</h3>
                  <p className="text-xs text-gray-500 mb-2">Pakej Percubaan (50ml)</p>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#1e7b36] text-lg">RM39.00</span>
                    <span className="text-xs text-gray-400 line-through">RM69.00</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between bg-[#fbfaf8] p-3 rounded-xl border border-gray-100">
                <span className="text-sm font-semibold">Kuantiti Set:</span>
                <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                  <button onClick={() => updateQuantity('combo1', -1)} className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50 rounded-l-lg font-bold text-lg">-</button>
                  <span className="font-bold text-sm w-4 text-center">{quantities.combo1}</span>
                  <button onClick={() => updateQuantity('combo1', 1)} className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50 rounded-r-lg font-bold text-lg">+</button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative bg-[#fdfbf9] rounded-2xl border border-gray-200 p-4 shadow-sm opacity-80">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-20 h-20 bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center p-2 relative">
                   <img src="https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/08/Firefly-10-scaled.jpg" className="w-8 h-8 object-cover rounded shadow-sm absolute -ml-4" alt=""/>
                   <img src="https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/08/Firefly-10-scaled.jpg" className="w-10 h-10 object-cover rounded shadow-sm relative z-10" alt=""/>
                </div>
                <div className="flex-1">
                  <h3 className="font-extrabold text-sm mb-1 uppercase">2 Botol PawCare</h3>
                  <p className="text-xs text-gray-500 mb-2">Set Rawatan Penuh</p>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#1e7b36] text-lg">RM70.00</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between bg-[#f4f2ee] p-3 rounded-xl border border-gray-200/50">
                <span className="text-sm font-semibold text-gray-600">Kuantiti:</span>
                <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                  <button onClick={() => updateQuantity('combo2', -1)} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-50 rounded-l-lg font-bold text-lg">-</button>
                  <span className="font-bold text-sm w-4 text-center">{quantities.combo2}</span>
                  <button onClick={() => updateQuantity('combo2', 1)} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-50 rounded-r-lg font-bold text-lg">+</button>
                </div>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="relative bg-[#fdfbf9] rounded-2xl border border-gray-200 p-4 shadow-sm opacity-80">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-20 h-20 bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center p-2 relative">
                   <img src="https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/08/Firefly-10-scaled.jpg" className="w-6 h-6 object-cover rounded shadow-sm absolute -ml-6" alt=""/>
                   <img src="https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/08/Firefly-10-scaled.jpg" className="w-8 h-8 object-cover rounded shadow-sm absolute ml-6" alt=""/>
                   <img src="https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/08/Firefly-10-scaled.jpg" className="w-10 h-10 object-cover rounded shadow-sm relative z-10" alt=""/>
                </div>
                <div className="flex-1">
                  <h3 className="font-extrabold text-sm mb-1 uppercase">3 Botol PawCare</h3>
                  <p className="text-xs text-gray-500 mb-2">Set Keluarga Si Bulus</p>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#1e7b36] text-lg">RM100.00</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between bg-[#f4f2ee] p-3 rounded-xl border border-gray-200/50">
                <span className="text-sm font-semibold text-gray-600">Kuantiti:</span>
                <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                  <button onClick={() => updateQuantity('combo3', -1)} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-50 rounded-l-lg font-bold text-lg">-</button>
                  <span className="font-bold text-sm w-4 text-center">{quantities.combo3}</span>
                  <button onClick={() => updateQuantity('combo3', 1)} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-50 rounded-r-lg font-bold text-lg">+</button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Step 2: Maklumat Penghantaran */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-[#1e7b36] text-white flex items-center justify-center font-bold text-lg shadow-sm">2</div>
            <h2 className="text-xl font-extrabold text-[#1e7b36] uppercase tracking-wide">Langkah 2: Maklumat Penghantaran</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-extrabold text-gray-800 mb-1.5 uppercase">Nama Penuh *</label>
              <input type="text" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1e7b36] focus:border-[#1e7b36] outline-none shadow-sm text-sm" placeholder="Contoh: Ali bin Abu" />
            </div>
            <div>
              <label className="block text-sm font-extrabold text-gray-800 mb-1.5 uppercase">No Telefon *</label>
              <input type="tel" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1e7b36] focus:border-[#1e7b36] outline-none shadow-sm text-sm" placeholder="Contoh: 0123456789" />
            </div>
            <div>
              <label className="block text-sm font-extrabold text-gray-800 mb-1.5 uppercase">Alamat *</label>
              <textarea className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1e7b36] focus:border-[#1e7b36] outline-none shadow-sm text-sm" rows={2} placeholder="No. Rumah, Jalan, Taman / Kampung"></textarea>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-extrabold text-gray-800 mb-1.5 uppercase">Poskod *</label>
                <input type="text" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1e7b36] focus:border-[#1e7b36] outline-none shadow-sm text-sm" placeholder="Contoh: 40150" />
              </div>
              <div>
                <label className="block text-sm font-extrabold text-gray-800 mb-1.5 uppercase">Bandar *</label>
                <input type="text" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1e7b36] focus:border-[#1e7b36] outline-none shadow-sm text-sm" placeholder="Contoh: Shah Alam" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-extrabold text-gray-800 mb-1.5 uppercase">Negeri *</label>
              <div className="relative">
                <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1e7b36] focus:border-[#1e7b36] outline-none shadow-sm text-sm appearance-none">
                  <option value="">Sila Pilih Negeri</option>
                  <option value="selangor">Selangor</option>
                  <option value="kuala_lumpur">Kuala Lumpur</option>
                  <option value="johor">Johor</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary Box */}
        <div className="bg-[#f2efe9] rounded-2xl p-5 mb-8 border border-gray-200 shadow-sm relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#e6e2d8] rounded-full opacity-50 pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-3 text-sm">
              <span className="text-gray-700 font-medium">Set Rawatan Asas (1 Botol)</span>
              <span className="font-bold text-gray-900">RM{calculateTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-start mb-5 text-sm">
              <span className="text-gray-700 font-medium">Kos Pos Penghantaran</span>
              <span className="font-bold text-green-700">PERCUMA</span>
            </div>
            
            <div className="border-t border-gray-300 pt-4 mb-5">
              <div className="flex justify-between items-center">
                <span className="font-extrabold text-[#1e7b36] text-sm md:text-base">JUMLAH KESELURUHAN (FPX)</span>
                <span className="font-black text-[#1e7b36] text-xl">RM{calculateTotal().toFixed(2)}</span>
              </div>
            </div>

            <a 
              href="https://toyyibpay.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#1e7b36] hover:bg-[#166028] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-colors shadow-lg"
            >
              <Lock className="w-5 h-5" />
              BELI SEKARANG &rarr;
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
}

