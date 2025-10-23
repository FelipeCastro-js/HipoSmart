import { Button, Input, Radio } from "../components";

interface Props {
  styles?: string;
}

export const Form = ({ styles = "" }: Props) => {
  return (
    <div className={`${styles} bg-white px-6 py-8 md:p-10`}>
      <div className="md:flex md:justify-between md:items-center md:mb-5">
        <h1 className="text-2xl font-bold mb-2 md:mb-10">
          Mortgage Calculator
        </h1>
        <button className="underline text-Slate-700 mb-6 cursor-pointer md:mb-0">
          Clear All
        </button>
      </div>
      <div className="flex flex-col gap-6 mb-6">
        <Input label="Mortgage Amount" unit="$COP" position="left" />
        <div className=" md:flex md:gap-6 ">
          <Input label="Mortgage Terms" unit="years" />
          <Input label="Interest Rate" unit="%" />
        </div>
      </div>

      <h2 className="text-Slate-700 mb-3">Mortgage Type</h2>
      <Radio label="Repayment" />
      <Radio label="Interest Only" />

      <Button />
    </div>
  );
};
