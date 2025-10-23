import { useForm } from "react-hook-form";
import { Button, Input, Radio } from "../components";

interface Props {
  styles?: string;
}

interface Input {
  mortgageAmount: number;
  mortgageTerms: number;
  interestRate: number;
  mortgageType: "Repayment" | "Interest Only";
}

export const Form = ({ styles = "" }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  const sendForm = () => {
    // Calculate mortgage
  };

  return (
    <form
      onSubmit={handleSubmit(sendForm)}
      className={`${styles} bg-white px-6 py-8 md:p-10`}
    >
      <div className="md:flex md:justify-between md:items-center md:mb-5">
        <h1 className="text-2xl font-bold mb-2 md:mb-10">
          Mortgage Calculator
        </h1>
        <button className="underline text-Slate-700 mb-6 cursor-pointer md:mb-0">
          Clear All
        </button>
      </div>
      <div className="flex flex-col gap-6 mb-6">
        <Input
          {...register("mortgageAmount", {
            required: true,
            valueAsNumber: true,
          })}
          error={errors.mortgageAmount?.type === "required"}
          label="Mortgage Amount"
          unit="$COP"
          position="left"
        />
        <div className=" md:flex md:gap-6 ">
          <Input
            {...register("mortgageTerms", {
              required: true,
              valueAsNumber: true,
            })}
            error={errors.mortgageTerms?.type === "required"}
            label="Mortgage Terms"
            unit="years"
          />
          <Input
            {...register("interestRate", {
              required: true,
              valueAsNumber: true,
            })}
            error={errors.interestRate?.type === "required"}
            label="Interest Rate"
            unit="%"
          />
        </div>
      </div>

      <h2 className="text-Slate-700 mb-3">Mortgage Type</h2>
      <Radio
        {...register("mortgageType", { required: true })}
        label="Repayment"
      />
      <Radio
        {...register("mortgageType", { required: true })}
        label="Interest Only"
      />
      {errors.mortgageType && (
        <p className="text-Red text-sm my-3">This field is required</p>
      )}

      <Button />
    </form>
  );
};
