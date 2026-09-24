import { useState, useEffect } from 'react';
import { X, Clock } from 'lucide-react';

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Show modal after 2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let targetTime = localStorage.getItem('promoTimer_3days');
    if (!targetTime) {
      // 3 days from now
      const newTarget = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;
      localStorage.setItem('promoTimer_3days', newTarget.toString());
      targetTime = newTarget.toString();
    }

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = parseInt(targetTime!) - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-[340px] rounded-3xl shadow-2xl relative animate-in zoom-in-95 duration-300 border-4 border-[#1e7b36]/20 overflow-hidden">
        
        {/* Background Wallpaper */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-16-2026-08_09_35-PM.png"
            alt="PawCare Wallpaper"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-white"></div>
        </div>

        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-20 w-8 h-8 bg-gray-100/80 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors backdrop-blur-sm"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center p-8 pt-10 relative z-10">
          <div className="w-16 h-16 bg-red-100/90 backdrop-blur-sm text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
            <Clock className="w-8 h-8 animate-pulse" />
          </div>
          
          <h2 className="text-2xl font-black text-gray-900 mb-1 uppercase tracking-tight">Promosi Khas!</h2>
          <div className="bg-orange-100 text-orange-600 font-bold py-1 px-4 rounded-full inline-block mb-4 text-xl">
            HANYA RM29
          </div>
          
          <p className="text-gray-600 font-medium mb-6 text-sm leading-relaxed">
            Tawaran istimewa ini akan tamat dalam masa:
          </p>

          <div className="flex justify-center gap-3 mb-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center text-xl font-bold mb-1 shadow-md">
                {timeLeft.days.toString().padStart(2, '0')}
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Hari</span>
            </div>
            <div className="text-xl font-bold text-gray-400 mt-2">:</div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center text-xl font-bold mb-1 shadow-md">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Jam</span>
            </div>
            <div className="text-xl font-bold text-gray-400 mt-2">:</div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center text-xl font-bold mb-1 shadow-md">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Minit</span>
            </div>
            <div className="text-xl font-bold text-gray-400 mt-2">:</div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center text-xl font-bold mb-1 shadow-md">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider">Saat</span>
            </div>
          </div>
          
          <a 
            href="#order"
            onClick={() => setIsOpen(false)}
            className="block w-full bg-[#1e7b36] hover:bg-[#166028] text-white py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-green-600/30 uppercase"
          >
            Tempah Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}
