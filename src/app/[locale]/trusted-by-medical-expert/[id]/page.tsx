import TrustByMedicalExpert from "@/components/content/TrustedByMedicalExpert";
import PageHeader from "@/components/typography/PageHeader";
import Image from "next/image";

const TrustedByMedicalExpertDetailPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[104px]">
        <PageHeader
          pageTitle="TRUSTED BY MEDICAL EXPERT"
          detailTitle="Experince Breathwork"
        />
        <div className="relative w-[1140px] h-[641px] rounded-[50px] overflow-hidden mt-[50px]">
          <Image
            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Background of a beautiful view"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="mt-[100px] w-full flex flex-col justify-center items-center">
        <div className="w-full max-w-[1140px]">
          <h1 className="font-medium text-[40px] text-tertiary text-left">
            Speaker: <span className="font-extrabold">Niraj Naik</span>
          </h1>
        </div>
        <p className="font-normal text-justify text-2xl max-w-[1140px] mt-[30px]">
          Mindfulness adalah tentang berada di saat ini, baik atau buruk. Saya
          suka menganggap mindfulness sebagai hidup yang penuh tujuan.
          Seringkali kita teralihkan dan khawatir tentang apa yang akan terjadi
          selanjutnya, sehingga kita melewatkan apa yang sedang terjadi saat
          ini. Saya selalu berpesan kepada orang-orang untuk benar-benar
          menjalani hidup mereka, merasakan segalanya!
          <br />
          <br />
          Kita cenderung ingin menjalani setiap pengalaman, baik atau buruk,
          dengan tergesa-gesa, seolah menjalani hidup dengan santai. Namun, jika
          kita meluangkan waktu untuk lebih peka, memperlambat langkah,
          merasakan berat cangkir kopi di tangan, memperhatikan angin bertiup di
          sela-sela dedaunan di pohon, menghirup udara setelah hujan, kita dapat
          menikmati semua momen indah yang ditawarkan kehidupan.
          <br />
          <br />
          Perhatian penuh adalah cara yang bagus untuk menjalani hidup dengan
          sengaja.
          <br />
          <br />
          Meditasi berbeda karena meditasi adalah praktik yang menggunakan
          teknik-teknik seperti mindfulness untuk membantu kita berfokus pada
          hasil yang diinginkan. Saat bermeditasi, kita mencoba menenangkan
          dunia luar dan hidup di dalam diri kita sendiri untuk sementara waktu.
          <br />
          <br />
          Selama latihan pernapasan, kita menggunakan kesadaran penuh untuk
          menarik perhatian kita ke dalam diri kita sendiri dan benar-benar
          merasakan aliran napas masuk dan keluar serta bagaimana rasanya bagi
          tubuh kita.
          <br />
          <br />
          Meditasi dapat digunakan untuk mencapai berbagai hasil. Pernapasan
          dalam yang lambat paling sering digunakan dalam sesi yang bertujuan
          untuk menenangkan dan merelaksasi kita, sementara pernapasan cepat
          dapat digunakan untuk mencapai tingkat kesadaran yang lebih tinggi.
          <br />
          <br />
          Cara lain untuk memikirkan perbedaan antara perhatian penuh dan
          meditasi adalah bahwa Anda tidak dapat bermeditasi tanpa perhatian
          penuh, tetapi Anda dapat penuh perhatian tanpa bermeditasi.
        </p>
      </div>
      <div>
        <TrustByMedicalExpert />
      </div>
    </div>
  );
};

export default TrustedByMedicalExpertDetailPage;
