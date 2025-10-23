import { Payments } from "../components";
interface Props {
  styles?: string;
}

export const Results = ({ styles = "" }: Props) => {
  return (
    <div className={`${styles} bg-Slate-900 text-white py-8 px-6 `}>
      <h2 className="text-2xl mb-6">Your results</h2>
      <p className="text-Slate-300 mb-6">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click "calculate repayments"
        again.
      </p>
      <Payments />
    </div>
  );
};
