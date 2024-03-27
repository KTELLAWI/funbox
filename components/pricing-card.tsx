import { FaStar } from "react-icons/fa";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  title: string;
  features: string[];
  price: string;
  bgColor: string;
  btnColor: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  features,
  price,
  bgColor,
  btnColor,
}) => {
  return (
    <Card style={{ backgroundColor: bgColor }} className="flex flex-col justify-between border-none rounded-3xl">
      <CardHeader>
        <CardTitle className="text-[#393d72] text-xl md:text-2xl font-semibold mt-4 mb-8 text-center">{title}</CardTitle>
        <ul>
          {features.map((feature, index) => (
            <li key={index} className="text-[#787878] text-sm md:text-base font-rubik pb-4 flex items-start gap-2">
              <span className="bg-[#fc4980] rounded-full p-1">
                <FaStar color="#fff" className="w-3 h-3" />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </CardHeader>
      <CardFooter className="mt-5">
        <Button
          variant="secondary"
          size="default"
          style={{ backgroundColor: btnColor }}
          className="w-full rounded-[20px] text-white text-lg font-semibold h-4 py-6"
        >
          {price}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
