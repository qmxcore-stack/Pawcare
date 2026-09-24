import { AlertCircle } from 'lucide-react';

export default function Problem() {
  return (
    <section className="py-20 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-red-200 rounded-3xl transform -rotate-3 scale-105 opacity-50"></div>
            <img 
              src="https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Kucing Sedih" 
              className="relative rounded-3xl shadow-xl w-full h-auto object-cover aspect-video lg:aspect-square"
            />
          </div>
          
          <div className="order-1 lg:order-2 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 text-red-700 font-semibold text-xs mb-4">
              <AlertCircle className="w-4 h-4" />
              <span>Amaran Jangkitan</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Kucing Anda Asyik Menggaru & Bulu Makin Gugur?
            </h2>
            <p className="text-base text-gray-600 mb-6">
              Jangkitan kurap dan kulat bukan sahaja menyakitkan kucing anda, malah ia boleh berjangkit kepada manusia! Jika dibiarkan:
            </p>
            
            <ul className="space-y-3 mb-6 w-full">
              {[
                'Kawasan botak dan kemerahan semakin merebak',
                'Kucing hilang selera makan dan murung',
                'Risiko berjangkit kepada kanak-kanak dan ahli keluarga',
                'Kos rawatan klinik veterinar yang sangat tinggi'
              ].map((point, idx) => (
                <li key={idx} className="flex items-center justify-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-700 font-bold text-xs">X</span>
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{point}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-base font-bold text-gray-900">
              Jangan biarkan si bulus merana. Bertindak sekarang sebelum terlambat!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
