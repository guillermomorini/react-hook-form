import { SubmitHandler, useForm } from "react-hook-form";

type Input = {
  name: string;
};

export const SandboxPage: React.FC = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({
    mode: "all",
  });

  const onSubmit: SubmitHandler<Input> = (data) => console.log();

  return (
    <div>
      <h3>Sandbox page</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: "name is required" })}></input>
        <div>{errors.name?.message}</div>
        <input type="submit" />
      </form>
    </div>
  );
};
