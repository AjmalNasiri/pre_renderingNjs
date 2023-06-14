import React, { SyntheticEvent, useState } from 'react';
import Layout from "../pages/layouts/layout";
import { useRouter } from 'next/router';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (event:any) => {
    event.preventDefault();
    const response = await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password}),
      credentials: 'include'
    });

    if (response.ok) {
      // Login successful, redirect to home page
      window.location.href = '/';
    } else {
      // Login failed, show error message
      const data = await response.json();
      console.log(data.error);
      // show error message to user
    }
  };
  
 


    return(
       <Layout>
           <form onSubmit={submit}>
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

    <div className="form-floating">
      <input type="email" className="form-control"  placeholder="name@example.com" required
      onChange={e=>setEmail(e.target.value)}/>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control"  placeholder="Password" required
      onChange={e=>setPassword(e.target.value)}/>
    </div>
    <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
  </form>
       </Layout>
    );
};
export default LoginPage ;