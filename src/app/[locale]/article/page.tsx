import NewsCard from "@/components/card/NewsCard";
import DetailHeader from "@/components/typography/DetailHeader";

const news = [
  {
    id: 1,
    title: "Mindfulness untuk Hidup Lebih Tenang",
    description:
      "Divine Oracular Assistance Tension Releasing Technique Online adalah sebuah cara baru di dunia teknologi pikiran (founded in 2020) yang bermanfaat...",
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Teknik Pernapasan untuk Mengurangi Stres",
    description:
      "Divine Oracular Assistance Tension Releasing Technique Online adalah sebuah cara baru di dunia teknologi pikiran (founded in 2020) yang bermanfaat...",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Meditasi 5 Menit yang Efektif",
    description:
      "Teknik meditasi sederhana selama 5 menit ini terbukti membantu menenangkan pikiran dan meningkatkan konsentrasi secara signifikan...",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Mengatasi Kecemasan dengan DOA TRTO",
    description:
      "Pelajari cara mengatasi kecemasan sehari-hari melalui praktik DOA TRTO yang dikembangkan untuk kesejahteraan mental...",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Rahasia Tidur Berkualitas",
    description:
      "Kualitas tidur yang baik berpengaruh besar pada kesehatan mental. DOA TRTO membantu memperbaiki pola tidur secara alami...",
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Kekuatan Pikiran Positif",
    description:
      "Pikiran positif dapat mempengaruhi kesuksesan dan kesehatan. DOA TRTO mengajarkan cara menjaga pikiran tetap sehat...",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
  },
];

const ArticlePage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[104px]">
        <DetailHeader
          title="The Latest News from D.O.A TRTO"
          description="Lebih dari 500 orang sudah terbantu dan merasakan kebahagiaan
dengan Divine Oracular Assistance Tension Releasing Technique Online"
        />
      </div>
      <div className="w-full max-w-[1140px] mx-auto grid md:grid-cols-2 gap-6 mt-[150px]">
        {news.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ArticlePage;
