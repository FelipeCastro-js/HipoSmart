import { Form, Instructions, Results } from "../components";

interface Props {
  styles?: string;
}

export const Calculator = ({ styles = "" }: Props) => {
  return (
    <div
      className={`${styles}  md:max-w-[688px] md:my-10 md:rounded-2xl overflow-hidden`}
    >
      <Form />
      <div>
        <Instructions />
        <Results />
      </div>
    </div>
  );
};
