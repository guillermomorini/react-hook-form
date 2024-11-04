import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "./Input";

const onSubmit: SubmitHandler<Input> = (data) => console.log(data);

export const ModeOnSubmitForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({ mode: "onSubmit" });

  return (
    <section>
      <h3>Mode: onSubmit</h3>
      <p>
        onSubmit only triggers the validation to occur when the user submits
        data. This is the default value for the mode prop.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("name", { required: "name is required." })}
        />
        {errors.name?.message}
        <input type="submit" />
      </form>
    </section>
  );
};

export const ModeOnBlurForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({ mode: "onBlur" });

  return (
    <section>
      <h3>Mode: onBlur</h3>
      <p>
        onBlur fires when the user leaves an input field, aka the field loses
        focus
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("name", { required: "name is required." })}
        />
        {errors.name?.message}
        <input type="submit" />
      </form>
    </section>
  );
};

export const ModeOnChangeForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({
    mode: "onChange",
  });

  return (
    <section>
      <h3>Mode: onChange</h3>
      <p>
        Triggers validation whenever the changeevent fires. This leads to
        multiple rerenders. This one can cause performance issues.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("name", { required: "name is required." })}
        />
        {errors.name?.message}
        <input type="submit" />
      </form>
    </section>
  );
};

export const ModeOnTouchedForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({ mode: "onTouched" });

  return (
    <section>
      <h3>Mode: onTouched</h3>
      <p>
        onTouched triggers validation after the first onBlur, then onChange.
        Note this distinction. "All" triggers onChange immediately, while
        "onTouched" triggers onChange only after the first onBlur.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("name", { required: "name is required." })}
        />
        {errors.name?.message}
        <input type="submit" />
      </form>
    </section>
  );
};

export const ModeAllForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({
    mode: "all",
  });

  return (
    <section>
      <h3>Mode: All</h3>
      <p>
        Triggers validation on onBlur, and then on every onChange after that.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("name", { required: "name is required." })}
        />
        {errors.name?.message}
        <input type="submit" />
      </form>
    </section>
  );
};
