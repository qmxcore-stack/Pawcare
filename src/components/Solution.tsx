import { ShieldPlus } from 'lucide-react';

export default function Solution() {
  return (
    <section className="py-20 bg-green-600 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,100 100,0 100,100" fill="currentColor" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-green-600 mb-6 shadow-xl">
            <ShieldPlus className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Memperkenalkan PawCare: Penyelamat Kulit Si Bulus
          </h2>
          <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 max-w-2xl mx-auto">
            <img 
              src="https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-16-2026-08_09_35-PM.png" 
              alt="Botol PawCare" 
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-xl md:text-2xl font-medium text-green-100 mb-8 leading-relaxed">
            Semburan rawatan revolusi dengan ekstrak herba premium yang meresap jauh ke dalam kulit untuk mematikan akar kulat dan kurap dengan segera.
          </p>
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
            <p className="text-lg">
              PawCare bukan sekadar melegakan kegatalan, ia memulihkan sel kulit yang mati, merangsang pertumbuhan bulu baru, dan mencipta lapisan pelindung anti-bakteria. Kucing anda akan selesa dari semburan pertama!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
