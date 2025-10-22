import { Input } from "../components";

interface Props {
  styles?: string;
}

export const Form = ({ styles = "" }: Props) => {
  return (
    <div className={`${styles} bg-white px-6 py-8`}>
      <h1>Mortgage Calculator</h1>
      <button>Clear All</button>
      <Input label="Mortgage Amount" unit="$COP" position="left" />
      <Input label="Mortgage Terms" unit="years" />
      <Input label="Interest Rate" unit="%" />
    </div>
  );
};
