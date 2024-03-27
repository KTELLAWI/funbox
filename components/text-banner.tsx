import Image from "next/image"

interface TextBannerProps {
  imageUrl: string;
  altText: string;
  className: string
  children: React.ReactNode;
}

const TextBanner = ({ imageUrl, altText, className, children }: TextBannerProps) => {
  return (
    <div className="relative">
      <Image
        src={imageUrl}
        alt={altText}
        width={0}
        height={0}
        sizes="100vw"
        className={className}
      />
      <div
        className="absolute top-0 left-0 w-full h-full flex justify-center items-center backdrop-brightness-50"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full px-4">
        {children}
      </div>
    </div>
  )
}

export default TextBanner