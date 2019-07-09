import React from "react";

import Form from "components/Form/Form";
import Input from "components/Form/Input/Input";
import Button from "components/Button";

import { signUp } from "services/apollo/user";
import { required, minLength, confirmation } from "utils/validators";

const SignUp = props => {
  const handleSubmit = async values => {
    const result = await signUp(values);
    console.log(result);
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
        <Input
          label="Confirm password"
          name="confirm-password"
          type="password"
          validators={[required, minLength(6), confirmation("password")]}
        />
        <Button type="submit">Sign up</Button>
      </Form>
    </section>
  );
};

export default SignUp;
