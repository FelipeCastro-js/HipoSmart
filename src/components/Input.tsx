interface Props {
  styles?: string;
  label: string;
  unit: string;
  position?: "right" | "left";
  error: boolean;
}

export const Input = ({
  styles = "",
  label,
  unit,
  position = "right",
  error,
  ...props
}: Props) => {
  return (
    <div className={`${styles} md:w-full`}>
      <label className="mb-3 block text-Slate-700" htmlFor={label}>
        {label}
      </label>
      <div className=" relative">
        <input
          className={`outline ${position === "right" ? "pl-4" : "pl-22"} ${
            error ? "outline-Red" : "outline-Slate-500"
          }  cursor-pointer focus:outline-Lime peer rounded-sm  w-full h-[46px] font-bold
        [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none 
        [&::-webkit-inner-spin-button]:appearance-none `}
          type="number"
          id={label}
          {...props}
        />
        <span
          className={`${
            error ? "bg-Red text-White" : "bg-Slate-100"
          } peer-focus:bg-Lime ${
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
      {error && <p className="text-Red text-sm mt-3">This field is required</p>}
    </div>
  );
};
