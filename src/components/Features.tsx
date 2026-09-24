import { Truck, Gift, ShieldCheck, HeartPulse } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Truck className="w-6 h-6 text-green-700" />,
      title: 'Pos Setiap Hari',
      desc: 'Order sebelum 3PM, pos hari yang sama.',
    },
    {
      icon: <Gift className="w-6 h-6 text-green-700" />,
      title: 'Free Gift',
      desc: 'Pembelian 2 botol ke atas layak dapat hadiah.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-700" />,
      title: 'Jaminan Pulangan',
      desc: 'Jika tidak berpuas hati, kami pulangkan wang.',
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-green-700" />,
      title: 'Produk Terlaris',
      desc: 'Dipercayai ribuan pencinta kucing.',
    }
  ];

  return (
    <section className="py-12 bg-green-50 border-y border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">{feature.title}</h3>
              <p className="text-xs md:text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
