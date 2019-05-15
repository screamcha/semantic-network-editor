import React from "react";

import Form from "components/Form/Form";
import Input from "components/Form/Input/Input";
import Button from "components/Button";

import { required, minLength } from "utils/validators";

const SignUp = props => {
  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <section className="sign-up-page">
      <Form name="sign-up-form" onSubmit={handleSubmit}>
        <Input label="Username" name="username" validators={[required]} />
        <Input
          label="Password"
          name="password"
          type="password"
          validators={[required, minLength(6)]}
        />
        <Button type="submit">Sign up</Button>
      </Form>
    </section>
  );
};

export default SignUp;
