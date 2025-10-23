import { useContext } from "react";
import { Form, Instructions, Results } from "../components";
import { PaymentContext } from "../contexts/Payment-Context";

interface Props {
  styles?: string;
}

export const Calculator = ({ styles = "" }: Props) => {
  const context = useContext(PaymentContext);
  return (
    <div
      className={`${styles}  md:max-w-[688px] md:my-10 md:rounded-2xl overflow-hidden lg:flex lg:max-w-[1008px]`}
    >
      <Form styles="lg:flex-1" />
      <div className="lg:flex-1 lg:bg-white">
        {context.results.monthlyPayment === 0 ? <Instructions /> : <Results />}
      </div>
    </div>
  );
};
