import NewsCard from "@/components/card/NewsCard";
import DetailHeader from "@/components/typography/DetailHeader";

const news = [
  {
    id: 1,
    title: "Session 1 on 1",
    description: "Private session dengan Coach Rheo",
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Session Workshop",
    description: "Private session dengan Coach Rheo",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Session 1 on 1",
    description: "Private session dengan Coach Rheo",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Session Workshop",
    description: "Private session dengan Coach Rheo",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Session 1 on 1",
    description: "Private session dengan Coach Rheo",
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Session Workshop",
    description: "Private session dengan Coach Rheo",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
  },
];

const KlassesPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[104px]">
        <DetailHeader
          title="Klasses"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
      </div>
      <div className="w-full max-w-[1140px] mx-auto grid md:grid-cols-2 gap-6 mt-[100px]">
        {news.map((item) => (
          <NewsCard key={item.id} item={item} buttonText="Book a Session" />
        ))}
      </div>
    </div>
  );
};

export default KlassesPage;
