import { Form } from "./Form";
import { Instructions } from "./Instructions";
import { Results } from "./Results";

interface Props {
  styles?: string;
}

export const Calculator = ({ styles = "" }: Props) => {
  return (
    <div className={`${styles}`}>
      <Form />
      <div>
        <Results />
        <Instructions />
      </div>
    </div>
  );
};
