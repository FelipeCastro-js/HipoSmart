interface Props {
  styles?: string;
  label: string;
  unit: string;
  position?: "right" | "left";
}

export const Input = ({
  styles = "",
  label,
  unit,
  position = "right",
}: Props) => {
  return (
    <div className={`${styles}`}>
      <label className="mb-3 block" htmlFor={label}>
        {label}
      </label>
      <div className=" relative">
        <input
          className={`outline ${
            position === "right" ? "pl-3" : "pr-3"
          } outline-Slate-500 rounded-sm  w-full h-[46px] 
        [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none 
        [&::-webkit-inner-spin-button]:appearance-none `}
          type="number"
          id={label}
        />
        <span
          className={`bg-Slate-100 ${
            position === "right"
              ? "right-0 rounded-r-sm"
              : "left-0 rounded-l-sm"
          } absolute top-0 ${
            position === "right" ? "right-0" : "left-0"
          } h-full px-3 grid place-content-center`}
        >
          {unit}
        </span>
      </div>
    </div>
  );
};
