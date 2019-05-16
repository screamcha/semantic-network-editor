import React from "react";

import Form from "components/Form/Form";
import Input from "components/Form/Input/Input";
import Button from "components/Button";

import { createUser } from "services/apollo/user";
import { required, minLength } from "utils/validators";

const SignUp = props => {
  const handleSubmit = async values => {
    console.log(values);
    const result = await createUser(values);
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
        <Button type="submit">Sign up</Button>
      </Form>
    </section>
  );
};

export default SignUp;
