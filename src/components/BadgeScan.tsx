import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BsPersonBadgeFill } from "react-icons/bs";
import OpenWorkList from "./OpenWorkList";

const schema = z.object({
  badge: z.string().min(1, { message: "Your badge ID did not scan." }),
});

type FormData = z.infer<typeof schema>;

const BadgeScan = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FieldValues) => {
    console.log(data);
    OpenWorkList();
  };

  return (
    <div className="position-absolute start-50 translate-middle-x w-75">
      <h1 className="display-1">
        <BsPersonBadgeFill />
        Scan your badge
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="m-3">
          <label htmlFor="badge" className="form-label">
            Badge Number
          </label>
          <input
            {...register("badge")}
            type="text"
            className="form-control"
            placeholder="Click here and scan your badge or type your badge number"
          />
          {errors.badge && (
            <p className="text-danger">{errors.badge.message}</p>
          )}
        </div>
        <div
          className="btn-group position-absolute start-50 translate-middle-x w-75"
          role="group"
        >
          <button className="btn btn-danger m-3 btn-lg" type="reset">
            Reset
          </button>
          <button
            disabled={!isValid}
            className="btn btn-primary m-3 btn-lg"
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default BadgeScan;
