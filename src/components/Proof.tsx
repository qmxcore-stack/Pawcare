export default function Proof() {
  const proofs = [
    {
      before: 'https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/08/images-3.jpeg',
      after: 'https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-16-2026-11_57_11-PM.png',
    },
    {
      before: 'https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/08/images-5.jpeg',
      after: 'https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-17-2026-12_03_56-AM.png',
    },
    {
      before: 'https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/08/images-4.jpeg',
      after: 'https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-17-2026-12_05_37-AM.png',
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hasil Terbukti <span className="text-green-600">Berkesan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lihat sendiri perubahan ketara selepas menggunakan PawCare. Bulu kembali tumbuh dan kulit sembuh sepenuhnya.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {proofs.map((proof, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <div className="flex">
                <div className="w-1/2 relative">
                  <img src={proof.before} alt="Sebelum" className="w-full h-48 object-cover" />
                  <div className="absolute bottom-0 inset-x-0 bg-red-600/90 py-1.5 text-center">
                    <span className="text-white font-bold text-xs tracking-wider uppercase">Sebelum</span>
                  </div>
                </div>
                <div className="w-1/2 relative border-l-2 border-white">
                  <img src={proof.after} alt="Selepas" className="w-full h-48 object-cover" />
                  <div className="absolute bottom-0 inset-x-0 bg-green-600/90 py-1.5 text-center">
                    <span className="text-white font-bold text-xs tracking-wider uppercase">Selepas</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-sm text-gray-500 mt-8 italic">
          *Hasil mungkin berbeza mengikut tahap jangkitan dan tindak balas kucing masing-masing.
        </p>
      </div>
    </section>
  );
}
