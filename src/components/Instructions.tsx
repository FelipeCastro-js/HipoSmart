interface Props {
  styles?: string;
}

export const Instructions = ({ styles = "" }: Props) => {
  return (
    <div
      className={`${styles} bg-Slate-900 text-white py-8 px6 text-center lg:h-full lg:rounded-bl-[80px]`}
    >
      <img
        className="m-auto mb-4"
        src="/assets/images/illustration-empty.svg"
        alt="illustration empty"
      />
      <h2 className="text-2xl font-bold mb-4">Your Instructions</h2>
      <p className="text-Slate-300">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click "calculate repayments"
        again.
      </p>
    </div>
  );
};
