import { useState } from "react";

import { useForm } from "react-hook-form";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // simulate submitting the form to an API
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email: values.email, password: values.password }),
    });
    const data = await response.json();

    if (data.error) {
      setErrors({ api: data.error });
      setLoading(false);
      return;
    }

    if (data.success) {
      setLoading(false);
      // navigate to dashboard or some other page
    }
  };

  const { values, handleChange } = useForm({
    initialValues: { email: "", password: "" },
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={handleSubmit}>
        <div> no:1 -  from main !  </div>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" onChange={handleChange} />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={handleChange}
      />

      {loading ? (
        <div className="spinner" />
      ) : (
        <button type="submit">Submit</button>
      )}

      {errors.api && <p className="error">{errors.api}</p>}
    </form>
  );
}
