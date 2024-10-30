import { SubmitHandler, useForm } from "react-hook-form";
import "./FirstExample.css";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export const FirstExample: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  console.log(watch("example"));

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form className="quick-start-example" onSubmit={handleSubmit(onSubmit)}>
      <label>
        example: <input defaultValue="text" {...register("example")} />
      </label>
      <label>
        example required:{" "}
        <input
          defaultValue="a"
          {...register("exampleRequired", { required: true })}
        />
      </label>

      <input type="submit" />
      {errors.exampleRequired && <span>exampleRequired cannot be empty</span>}
      <p>
        it is interesting to note that the validation does not occur until you
        click submit, but after that, it happens instantaneously as you type.
      </p>
    </form>
  );
};
