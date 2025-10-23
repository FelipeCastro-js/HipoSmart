interface Props {
  styles?: string;
}

export const Payments = ({ styles = "" }: Props) => {
  return (
    <div
      className={`${styles} bg-black/25 border-t-4 border-Lime rounded-lg py-6 px-4`}
    >
      <h3 className="text-Slate-300 mb-2">Your Monthly Payments</h3>
      <p className="text-Lime text-[40px] font-bold mb-4">$12345678</p>
      <hr className="text-Slate-300 mb-4" />
      <h3 className="text-Slate-300 mb-2">Total you'll repay over the term</h3>
      <p className="text-2xl font-bold">$12345678</p>
      <hr />
    </div>
  );
};
