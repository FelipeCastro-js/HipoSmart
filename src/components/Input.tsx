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
      <label className="mb-3 block text-Slate-700" htmlFor={label}>
        {label}
      </label>
      <div className=" relative">
        <input
          className={`outline ${
            position === "right" ? "pl-4" : "pl-22"
          }  outline-Slate-500 cursor-pointer focus:outline-Lime peer rounded-sm  w-full h-[46px] font-bold
        [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none 
        [&::-webkit-inner-spin-button]:appearance-none `}
          type="number"
          id={label}
        />
        <span
          className={`bg-Slate-100 peer-focus:bg-Lime ${
            position === "right"
              ? "right-0 rounded-r-sm"
              : "left-0 rounded-l-sm"
          } absolute top-0 ${
            position === "right" ? "right-0" : "left-0"
          } h-full px-4 grid place-content-center text-Slate-700 font-bold`}
        >
          {unit}
        </span>
      </div>
    </div>
  );
};
