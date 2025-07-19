import ContentTitle from "../typography/ContentTitle";
import { ContinuousCarousel } from "./ContinuousCarousel";

const TrustMedicalExpert = () => {
  return (
    <main className="mt-[50px] md:mt-[80px] lg:my-[100px]">
      <div className="flex flex-col justify-center items-center mb-9">
        <ContentTitle title="Trust by Medical Expert" />
      </div>
      <ContinuousCarousel />
    </main>
  );
};

export default TrustMedicalExpert;
