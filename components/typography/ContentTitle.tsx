const ContentTitle = ({ title }: { title: string }) => {
  return (
    <p className="text-accent font-extrabold text-[28px] mx-[35px] lg:mx-0 text-center lg:text-[40px]">
      {title}
    </p>
  );
};

export default ContentTitle;
