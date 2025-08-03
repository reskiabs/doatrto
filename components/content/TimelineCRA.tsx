import { Timeline } from "@/components/ui/timeline";

export function TimelineCRA() {
  const data = [
    {
      key: "latar-belakang",
      title: "Latar Belakang",
      content: (
        <div>
          <p className="text-xl font-normal leading-9">
            Ijinkan saya menceritakan background hidup saya.Saya anak pertama
            dari 3 bersaudara, saya memiliki masalah emosi di masa lalu terkait
            dengan keluarga, dan trauma perihal kerusuhan 1998.
            <br />
            Saya ingin sekali bisa merasakan kebahagiaan dan ketenangan dalam
            diri saya. Dulu saya sering marah-marah meledak, dan memiliki
            ketakutan yang sangat ekstrim.
            <br />
            Ketika ada demo besar di Indonesia, saya selalu melarikan diri
            keluar negeri, gelisah, tidak bisa tidur, bahkan ketika saya sedang
            di luar negeri, sepanjang malam saya sibuk memantau semua peristiwa
            yang terjadi di Jakarta.Saya terus berdoa pada Tuhan meminta
            pertolongan dan jawaban sambil saya terus berusaha mencari caranya.
          </p>
        </div>
      ),
    },
    {
      key: "changelog",
      title: "Jawaban Tuhan",
      content: (
        <div>
          <p className="text-xl font-normal leading-9">
            Akhirnya Tuhan menjawab doa saya, genap 10 tahun kemudian, akhirnya
            setiap potongan puzzle dan pertanyaan saya menjadi lengkap, dan
            itulah awal Divine Oracular Assistance (D.O.A) terbentuk, yang
            merupakan jawaban dari doa saya selama ini.
            <br />
            Awalnya teknik ini saya gunakan untuk mengatasi masalah dalam hidup
            saya sendiri dan ternyata it works! Kini hidup saya tenang, bahagia,
            penuh kedamaian, tidak ada hari yang saya lewati tanpa senyuman
            tulus dan rasa syukur atas nikmat Tuhan yang saya rasakan dalam
            hidup saya dan keluarga pun kembali rukun.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
