import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; // Import the CSS file

export default function SignupPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    resetField,
    watch,
    formState: { errors },
  } = useForm();

  //   const handleChange = (e) => {
  //     const { name, value, type, checked } = e.target;
  //     const val = type === "checkbox" ? checked : value;
  //     setFormData((prevFormData) => ({
  //       ...prevFormData,
  //       [name]: val,
  //     }));
  //   };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/welcome");
  };

  return (
    <div className="signup-container">
      <h1 className="signup-heading">Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
        <label>
          First Name
          <input
            type="required"
            {...register("first", {
              required: {
                value: true,
                message: "Enter first name",
              },
            })}
            placeholder="first name"
          />
        </label>
        <label>
          Last Name
          <input
            type="required"
            {...register("last", {
              required: {
                value: true,
                message: "Enter last name",
              },
            })}
            placeholder="last name"
          />
        </label>
        <label>
          Email
          <input
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "Enter email",
              },
            })}
            placeholder="email"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            {...register("password", {
              required: { value: true, message: "비밀번호를 입력해주세요" },
              minLength: {
                value: 8,
                message: "8자리 ~ 20자리 이내로 입력해주세요.",
              },
              maxLength: {
                value: 20,
                message: "8자리 ~ 20자리 이내로 입력해주세요.",
              },
            })}
            placeholder="password"
          />
        </label>
        <label>
          Confirm Password
          <input
            type="confirmPassword"
            {...register("password", {
              required: { value: true, message: "비밀번호를 입력해주세요" },
              validate: (value) =>
                value === watch("password") || "The passwords do not match",
            })}
            placeholder="password"
          />
        </label>
        <label>
          School
          <input
            type="required"
            {...register("school", {
              required: {
                value: true,
                message: "Enter school",
              },
            })}
            placeholder="school"
          />
        </label>
        Role
        <label style={{ display: "flex", alignItems: "bottom" }}>
          <span>Student</span>
          <input type="radio" {...register("Manager")} />
          <span>Manager</span>
          <input type="radio" {...register("Manager")} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
