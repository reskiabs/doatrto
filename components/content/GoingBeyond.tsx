"use client";

import LoaderContent from "@/components/common/LoaderContent";
import SomethingWentWrong from "@/components/common/SomethingWentWrong";
import { useBeyondOptimized } from "@/hooks/optimized/useBeyondOptimized";
import { useMobileScrollOffset } from "@/hooks/useMobileScrollOffset";
import { memo } from "react";
import BeyondCardList from "../card/BeyondCardList";
import ContentTitle from "../typography/ContentTitle";

const GoingBeyond = memo(() => {
  const scrollRef = useMobileScrollOffset(0.17);
  const { beyond, loading, error } = useBeyondOptimized();

  if (loading) return <LoaderContent />;
  if (error) return <SomethingWentWrong />;

  return (
    <main className="flex flex-col items-center w-full mt-[30px] md:mt-[60px] lg:mt-[80px]">
      <div className="w-full flex flex-col items-center lg:max-w-[1140px]">
        <div className="flex flex-col items-center mb-[20px] lg:mb-[30px]">
          <ContentTitle titleKey="beyondConventionalTherapies" />
        </div>

        <div ref={scrollRef} className="w-full overflow-x-auto scrollbar-hide">
          <div className="grid grid-cols-3 gap-3.5 lg:gap-6 min-w-max snap-x snap-mandatory px-[15px] lg:px-0">
            {beyond.map((item) => (
              <div key={item.id} className="snap-start">
                <BeyondCardList
                  title={item.title}
                  description={item.description}
                  image={item.thumbnail}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
});

GoingBeyond.displayName = 'GoingBeyond';

export default GoingBeyond;
