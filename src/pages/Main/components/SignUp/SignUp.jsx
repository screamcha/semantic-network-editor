import React from 'react';

import Form from '../../../../components/Form/Form';
import Input from '../../../../components/Form/Input/Input';

const SignUp = (props) => {
  const [username, setUsername] = React.useState('');

  const handleSubmit = () => {
    console.log(username);
  }

  return (
    <section className='sign-up-page'>
      <Form
        name='sign-up-form'
        onSubmit={handleSubmit}
      >
        <Input
          label='Username'
          name={username}
          value={username}
          placeholder='Username'
          onChange={setUsername}
        />
      </Form>
    </section>
  );
}

export default SignUp;
