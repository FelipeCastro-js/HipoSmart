interface Props {
  styles?: string;
}

export const Results = ({ styles = "" }: Props) => {
  return (
    <div
      className={`${styles} bg-Slate-900 text-white py-8 px6 text-center`}
    ></div>
  );
};
