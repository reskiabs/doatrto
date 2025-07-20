interface PageHeaderProps {
  pageTitle: string;
  detailTitle: string;
}
const PageHeader = ({ pageTitle, detailTitle }: PageHeaderProps) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-tertiary font-normal text-[25px] uppercase">
        {pageTitle}
      </h2>
      <h1 className="text-[50px] font-extrabold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
        {detailTitle}
      </h1>
    </div>
  );
};

export default PageHeader;
