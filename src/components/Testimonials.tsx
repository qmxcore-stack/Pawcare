import { Star } from 'lucide-react';
import farahAvatar from '../assets/images/malay_woman_hijab_avatar_1786896931730.jpg';
import amirulAvatar from '../assets/images/malay_man_avatar_1786896948828.jpg';
import ainAvatar from '../assets/images/malay_woman_hijab_avatar_2_1786896962380.jpg';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Farah',
      location: 'Selangor',
      text: 'Kurap hilang dalam masa seminggu! Bulunya pun mula tumbuh semula. Memang berkesan. Anak bulus saya dah kembali aktif.',
      avatar: farahAvatar,
    },
    {
      name: 'Amirul',
      location: 'Johor',
      text: 'Dah try macam-macam ubat, tapi yang ni paling menjadi. Kucing tak garu lagi, thank you! Bau pun herba dan wangi.',
      avatar: amirulAvatar,
    },
    {
      name: 'Ain',
      location: 'Penang',
      text: 'Selamat & mudah guna. Sembur je 2 kali sehari. Kulat cepat kering dan kulit pulih. Tak menyesal beli.',
      avatar: ainAvatar,
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Apa Kata <span className="text-green-600">Pelanggan Kami?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lebih 10,000 pemilik kucing telah mempercayai PawCare untuk merawat si bulus mereka.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((review, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm relative">
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
