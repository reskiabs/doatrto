import { useMobileScrollOffset } from "@/hooks/useMobileScrollOffset";
import Image from "next/image";

const SessionGridContent = () => {
  const row1Ref = useMobileScrollOffset(0.2);
  const row2Ref = useMobileScrollOffset(0.2);
  return (
    <div className="w-full max-w-[1140px] px-[15px] lg:px-0 mx-auto space-y-[15px] lg:space-y-[30px] mt-[50px] md:mt-[80px] lg:mt-[100px]">
      {/* Row 1 */}
      <div ref={row1Ref} className="overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-[10px] lg:gap-[30px] min-w-max">
          <div className="flex p-[15px] lg:p-[30px] w-[372px] lg:w-[750px] rounded-[15px] lg:rounded-[25px] border gap-[30px] border-surface">
            <div className="w-[360px]">
              <p className="font-bold text-base lg:text-[25px] mb-[10px] lg:mb-[20px]">
                Lorem Ipsum (Subjudul H3)
              </p>
              <p className="font-normal text-xs line-clamp-5 text-ellipsis lg:text-xl text-muted">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s (Body)
              </p>
            </div>
            <div className="relative min-w-[125px] lg:min-w-[300px] h-[135px] lg:h-[315px] rounded-[15px] overflow-hidden bg-surface">
              <Image
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&q=80"
                alt="Background of a beautiful view"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex p-[15px] lg:p-[30px] w-[200px] lg:w-[360px] h-[170px] lg:h-[375px] rounded-[15px] lg:rounded-[25px] border gap-[30px] border-surface">
            <div className="w-[360px]">
              <p className="font-bold text-base lg:text-[25px] mb-[10px] lg:mb-[20px]">
                Lorem Ipsum (Subjudul H3)
              </p>
              <p className="font-normal text-xs line-clamp-5 text-ellipsis lg:text-xl text-muted">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s (Body)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div ref={row2Ref} className="overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-[10px] lg:gap-[30px] min-w-max">
          <div className="flex p-[15px] lg:p-[30px] w-[200px] lg:w-[360px] h-[170px] lg:h-[375px] rounded-[15px] lg:rounded-[25px] border gap-[30px] border-surface">
            <div className="w-[360px]">
              <p className="font-bold text-base lg:text-[25px] mb-[10px] lg:mb-[20px]">
                Lorem Ipsum (Subjudul H3)
              </p>
              <p className="font-normal text-xs line-clamp-5 text-ellipsis lg:text-xl text-muted">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s (Body)
              </p>
            </div>
          </div>
          <div className="flex p-[15px] lg:p-[30px] w-[372px] lg:w-[750px] rounded-[15px] lg:rounded-[25px] border gap-[30px] border-surface">
            <div className="w-[360px]">
              <p className="font-bold text-base lg:text-[25px] mb-[10px] lg:mb-[20px]">
                Lorem Ipsum (Subjudul H3)
              </p>
              <p className="font-normal text-xs line-clamp-5 text-ellipsis lg:text-xl text-muted">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s (Body)
              </p>
            </div>
            <div className="relative min-w-[125px] lg:min-w-[300px] h-[138px] lg:h-[315px] rounded-[15px] overflow-hidden bg-surface">
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
    </div>
  );
};

export default SessionGridContent;
