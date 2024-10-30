import { SubmitHandler, useForm } from "react-hook-form";

type Breed = "German Shepherd" | "Golden Retriever" | "Border Collie";

type Dog = {
  name: string;
  nickname: string;
  breed: Breed;
};

export const Practice: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Dog>();

  const onSubmit: SubmitHandler<Dog> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} />
      <input {...register("nickname", { required: true })} />
      <select {...register("breed")}>
        <option disabled selected>
          -- select an option --
        </option>
        <option value="German Shepherd">German Shepherd</option>
        <option value="Golden Retriever"> Golden Retriever</option>
        <option value="Border Collie">Border Collie</option>
      </select>
      <input type="submit" />
      {errors.nickname && <span>nickname is required.</span>}
      {errors.breed && <span>nickname is required.</span>}
    </form>
  );
};
