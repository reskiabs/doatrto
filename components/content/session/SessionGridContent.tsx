import Image from "next/image";

const SessionGridContent = () => {
  return (
    <div className="w-full max-w-[1140px] mx-auto space-y-[30px] mt-[100px]">
      <div className="flex items-cente gap-[30px]">
        <div className="flex p-[30px] w-[750px] rounded-[25px] border gap-[30px] border-surface">
          <div className="w-[360px]">
            <p className="font-bold text-2xl mb-[20px]">
              Lorem Ipsum (Subjudul H3)
            </p>
            <p className="font-normal text-xl text-muted">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s (Body)
            </p>
          </div>
          <div className="relative w-[300px] h-[315px] rounded-[15px] overflow-hidden bg-surface">
            <Image
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&q=80"
              alt="Background of a beautiful view"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex p-[30px] w-[360px] h-[375px] rounded-[25px] border gap-[30px] border-surface">
          <div className="w-[360px]">
            <p className="font-bold text-2xl mb-[20px]">
              Lorem Ipsum (Subjudul H3)
            </p>
            <p className="font-normal text-xl text-muted">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s (Body)
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-cente gap-[30px]">
        <div className="flex p-[30px] w-[360px] h-[375px] rounded-[25px] border gap-[30px] border-surface">
          <div className="w-[360px]">
            <p className="font-bold text-2xl mb-[20px]">
              Lorem Ipsum (Subjudul H3)
            </p>
            <p className="font-normal text-xl text-muted">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s (Body)
            </p>
          </div>
        </div>
        <div className="flex p-[30px] w-[750px] rounded-[25px] border gap-[30px] border-surface">
          <div className="w-[360px]">
            <p className="font-bold text-2xl mb-[20px]">
              Lorem Ipsum (Subjudul H3)
            </p>
            <p className="font-normal text-xl text-muted">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s (Body)
            </p>
          </div>
          <div className="relative w-[300px] h-[315px] rounded-[15px] overflow-hidden bg-surface">
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
              alt="Background of a beautiful view"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionGridContent;
