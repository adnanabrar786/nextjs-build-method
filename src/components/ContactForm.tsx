import { useFormik } from "formik";
import React from "react";
import { object, ref, string } from "yup";
const STRING_TYPE = string();

interface IContactForm {
  name: string;
  email: string;
  password: string;
}

export const CONTACT_FORM = () =>
  object({
    name: STRING_TYPE.required("Required name"),
    email: STRING_TYPE.required("Required email").email("Enter valid email"),
    // password: STRING_TYPE.required("Please enter a password")
    // .min(8, "Password must be at least 8 characters")
    // .max(30, "Max 30 characters")
  });

const ContactForm = () => {
  const handleClick = () => {
    console.log(formik.values);
  };

  const formik = useFormik<IContactForm>({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: CONTACT_FORM(),
    onSubmit: handleClick,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>:
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>
        <br />
        <div>
          <label htmlFor="email">Email Address</label>:
          <div>
            <input
              type="text"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
        </div>
        <br />
        <div>
          <label htmlFor="password">Password</label>:
          <input
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
