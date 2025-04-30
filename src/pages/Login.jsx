import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (state === 'Sign Up') {
      console.log('Signing Up:', { name, email, password });
    } else {
      console.log('Logging In:', { email, password });
    }
  };

  return (
    <form
      className="min-h-[80vh] flex flex-col items-center justify-center gap-6"
      onSubmit={onSubmitHandler}
    >
      <div className="text-center">
        <p className="text-2xl font-bold">
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </p>
      </div>
      {state === 'Sign Up' && (
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-4 py-2 rounded w-80"
        />
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border px-4 py-2 rounded w-80"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border px-4 py-2 rounded w-80"
      />
      <button
        type="submit"
        className="bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all duration-300"
      >
        {state === 'Sign Up' ? 'Sign Up' : 'Login'}
      </button>
      <p
        className="text-sm text-gray-600 cursor-pointer"
        onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
      >
        {state === 'Sign Up' ? 'Already have an account? Login' : 'Don’t have an account? Sign Up'}
      </p>
    </form>
  );
};

export default Login;
