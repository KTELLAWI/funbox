import Image from "next/image";

interface HeaderProps {
  title: string
  className: string
}

const Header = ({ title, className }: HeaderProps) => {
  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <h1 className={className}>{title}</h1>
      <Image src="/separator.png" alt="separator" width={80} height={80} priority />
    </div>
  );
};

export default Header;
