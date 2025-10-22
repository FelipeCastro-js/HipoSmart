import { Form, Instructions, Results } from "../components";

interface Props {
  styles?: string;
}

export const Calculator = ({ styles = "" }: Props) => {
  return (
    <div className={`${styles} w-[375px]`}>
      <Form />
      <div>
        <Results />
        <Instructions />
      </div>
    </div>
  );
};
