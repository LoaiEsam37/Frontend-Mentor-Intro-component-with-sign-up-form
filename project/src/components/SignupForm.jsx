import "../styles/Signupform.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function SignupForm() {
  const schema = yup.object().shape({
    firstName: yup.string().required("First Name cannot be empty"),
    lastName: yup.string().required("Last Name cannot be empty"),
    email: yup
      .string()
      .email("Looks like this is not an email")
      .required("Email cannot be empty"),
    password: yup.string().min(8).max(20).required("Password cannot be empty"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First Name" {...register("firstName")} />
      {errors?.firstName && <span>{errors.firstName.message}</span>}
      <input type="text" placeholder="Last Name" {...register("lastName")} />
      {errors?.lastName && <span>{errors.lastName.message}</span>}
      <input type="text" placeholder="Email Address" {...register("email")} />
      {errors?.email && <span>{errors.email.message}</span>}
      <input type="password" placeholder="Password" {...register("password")} />
      {errors?.password && <span>{errors.password.message}</span>}
      <input type="submit" value="Claim your free trial" />

      <p>
        By clicking the button, you are agreeing to our{" "}
        <a href="">Terms and Services</a>
      </p>
    </form>
  );
}

export default SignupForm;
