"use client";

import LoaderContent from "@/components/common/LoaderContent";
import SomethingWentWrong from "@/components/common/SomethingWentWrong";
import { HonestReview } from "@/components/content/HonestReview";
import ImageGrid from "@/components/content/ImageGrid";
import DetailHeader from "@/components/typography/DetailHeader";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useHonestReviewsOptimized } from "@/hooks/optimized/useHonestReviewsOptimized";
import { splitDescription } from "@/lib/splitDescription";
import { MoveRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { extractYouTubeId } from "../../../../lib/extractYouTubeId";

const HonestReviewDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { review, loading, error } = useHonestReviewsOptimized(id);
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false);
  const t = useTranslations("button");

  if (!review) return null;
  if (loading) return <LoaderContent />;
  if (error) return <SomethingWentWrong />;

  const { short, remaining } = splitDescription(review.description || "");
  const videoId = extractYouTubeId(review.video);
  const hasVideo = Boolean(videoId);

  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[50px] lg:pt-[104px]">
        <DetailHeader titleKey="honestReview" descriptionKey="honestReview" />

        <div className="flex flex-col px-[15px] lg:-px-0 lg:flex-row justify-between gap-[20px] lg:gap-[50px] mt-[50px] lg:mt-[80px]">
          <div className="relative size-[372px] lg:size-[555px] rounded-[15px] lg:rounded-[25px] overflow-hidden bg-gray-300">
            <Image
              src={review.thumbnail}
              alt={review.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="w-[365px] px-[5px] lg:px-0 lg:w-[525px] ">
            <h1 className="font-extrabold text-center lg:text-left text-[28px] lg:text-[40px] text-tertiary truncate">
              {review.name}
            </h1>
            <h2 className="font-semibold text-center lg:text-left text-sm lg:text-[40px] text-tertiary truncate">
              {review.title}
            </h2>
            <div
              className="font-normal line-clamp-8 text-justify text-sm lg:text-xl my-[20px] lg:my-[30px]"
              dangerouslySetInnerHTML={{
                __html: short,
              }}
            />
            <div className="flex justify-center lg:justify-start">
              {hasVideo ? (
                <Dialog
                  open={isVideoDialogOpen}
                  onOpenChange={setIsVideoDialogOpen}
                >
                  <DialogTrigger asChild>
                    <button
                      className="inline-flex items-center px-6 py-3 lg:py-4 rounded-full text-white font-medium text-xs lg:text-lg bg-gradient-to-r from-secondary to-primary hover:cursor-pointer"
                      onClick={() => setIsVideoDialogOpen(true)}
                    >
                      <span className="flex items-center gap-2.5">
                        {t("watchVideo")} <MoveRight size={20} />
                      </span>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="!w-[340px] !h-[240px] lg:!w-[1140px] lg:!h-[690px] !max-w-none p-4 lg:p-6">
                    <DialogHeader>
                      <DialogTitle className="text-lg lg:text-xl font-semibold mb-3 lg:mb-4">
                        {review.name} - Video
                      </DialogTitle>
                    </DialogHeader>
                    <div className="w-full h-[191px] lg:h-[641px]">
                      {videoId && (
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                          title={review.name}
                          style={{ border: 0 }}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg"
                        />
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              ) : (
                <button
                  className="inline-flex items-center px-6 py-3 lg:py-4 rounded-full text-white font-medium text-xs lg:text-lg bg-gray-400 cursor-not-allowed opacity-50"
                  disabled
                >
                  <span className="flex items-center gap-2.5">
                    {t("watchVideo")} <MoveRight size={20} />
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto mt-[50px] lg:mt-[100px]">
        {remaining && (
          <div
            className="font-normal px-[15px] lg:px-0 text-justify text-sm lg:text-xl my-[20px] lg:my-[30px]"
            dangerouslySetInnerHTML={{
              __html: remaining,
            }}
          />
        )}
        {Array.isArray(review?.images) && review.images.length > 0 && (
          <ImageGrid images={review.images} />
        )}
      </div>

      <div>
        <HonestReview />
      </div>
    </div>
  );
};

export default HonestReviewDetailPage;
