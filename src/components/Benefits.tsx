import { Leaf, Zap, ShieldOff, Smile, CheckCircle } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: 'Bahan Semulajadi',
      desc: 'Dipilih dari ekstrak herba berkualiti tinggi yang selamat untuk si bulus.',
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      title: 'Berkesan & Pantas',
      desc: 'Formula kuat yang terbukti melawan kulat & bakteria dengan pantas.',
    },
    {
      icon: <ShieldOff className="w-8 h-8 text-blue-500" />,
      title: 'Tanpa Steroid',
      desc: '100% bebas steroid. Selamat digunakan tanpa sebarang kesan sampingan.',
    },
    {
      icon: <Smile className="w-8 h-8 text-pink-500" />,
      title: 'Tidak Perit',
      desc: 'Semburan halus yang melegakan, tidak menyebabkan rasa pedih pada kulit terjejas.',
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: 'Mudah Digunakan',
      desc: 'Hanya perlu sembur 2-3 kali sehari pada kawasan yang dijangkiti.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kenapa Pilih <span className="text-green-600">PawCare?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dirumus khas untuk keselesaan dan kesembuhan pantas kucing kesayangan anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {benefits.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl hover:bg-green-50 transition-colors border border-gray-100 hover:border-green-200">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 transform -rotate-3">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
