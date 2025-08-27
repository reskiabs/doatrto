import Link from "next/link";

const MainOutlineButton = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      href={href}
      className="w-full py-0.5 lg:py-4 border-secondary border lg:border-2 rounded-full hover:bg-secondary/7 hover:cursor-pointer"
    >
      <p className="text-center text-xs lg:text-2xl font-medium text-secondary">
        {text}
      </p>
    </Link>
  );
};

export default MainOutlineButton;
