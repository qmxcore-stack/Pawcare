import { useState, useEffect, type FormEvent } from 'react';
import { X, Mail } from 'lucide-react';

export default function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Show modal after 2 seconds of loading the site
    const timer = setTimeout(() => {
      // Check if user has already seen/closed it in this session
      const hasSeenModal = sessionStorage.getItem('hasSeenNewsletter');
      if (!hasSeenModal) {
        setIsOpen(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenNewsletter', 'true');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-[320px] rounded-2xl overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Header */}
        <div className="h-32 w-full relative">
          <img 
            src="https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/08/Firefly-10-scaled.jpg" 
            alt="Kucing Sihat" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="px-6 pb-6 pt-2 text-center">
          {!isSubmitted ? (
            <>
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-inner">
                <Mail className="w-6 h-6" />
              </div>
              
              <h2 className="text-xl font-black text-gray-900 mb-2 tracking-tight leading-tight">
                Nak Kucing Sihat & Ceria?
              </h2>
              <p className="text-gray-600 font-medium mb-5 text-sm leading-relaxed">
                Dapatkan tips penjagaan kucing, panduan elak masalah kulit & rahsia penjagaan yang boleh anda praktikkan di rumah
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input 
                  type="text" 
                  placeholder="Nama Panggilan" 
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none text-center"
                />
                <input 
                  type="email" 
                  placeholder="Alamat Email" 
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none text-center"
                />
                <button 
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl transition-colors shadow-md mt-2"
                >
                  Subscribe Newsletter
                </button>
              </form>
              
              <button 
                onClick={handleClose}
                className="mt-4 text-sm text-gray-400 hover:text-gray-600 font-medium underline-offset-4 hover:underline"
              >
                Tidak, terima kasih
              </button>
            </>
          ) : (
            <div className="py-8">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">Berjaya!</h2>
              <p className="text-gray-600">Sila semak email anda sebentar lagi.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
