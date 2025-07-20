import PageHeader from "@/components/typography/PageHeader";
import Image from "next/image";

const OpenEvidenceDetailPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[104px]">
        <PageHeader
          pageTitle="OPEN EVIDENCE BASED SYSTEM"
          detailTitle="INTO THE LIGHT : RIBKA HUTAPEA"
        />
        <div className="relative w-[1140px] h-[641px] rounded-[50px] overflow-hidden mt-[50px]">
          <Image
            src="/images/open-evidence-2.png"
            alt="Affirmation Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="mt-[100px] w-full flex flex-col justify-center items-center">
        <div className="w-full max-w-[1140px]">
          <h1 className="font-extrabold text-[40px] text-tertiary text-left">
            Lorem ipsum dolor
          </h1>
          <div className="grid grid-cols-3 gap-[30px] mt-5">
            <div className="relative w-[360px] h-[202px] rounded-[10px] overflow-hidden">
              <Image
                src="/images/image-qna.png"
                alt="Affirmation Image"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[360px] h-[202px] rounded-[10px] overflow-hidden">
              <Image
                src="/images/image-qna.png"
                alt="Affirmation Image"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[360px] h-[202px] rounded-[10px] overflow-hidden">
              <Image
                src="/images/image-qna.png"
                alt="Affirmation Image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenEvidenceDetailPage;
