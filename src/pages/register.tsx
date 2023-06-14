
import { useRouter } from 'next/router';
import Layout from './layouts/layout';
import React, {SyntheticEvent ,useState } from 'react';

const register=()=>{
   const [name, setName]= useState('');
   const [email, setEmail]=useState('');
   const [password, setPassword]=useState('');
   
   const router=useRouter();
   const submit=async(e:SyntheticEvent)=>{
            e.preventDefault();
            await fetch('http://127.0.0.1:8000/api/register',{
               method:"POST",
               headers:{'Content-Type':'application/json'},
               body:JSON.stringify({
                 name,
                 email,
                 password
               })
            });
            await router.push('/login');
   }
    return(
    
      <Layout>
      <form onSubmit={submit}>
<h1 className="h3 mb-3 fw-normal">Please sign in</h1>

<div className="form-floating">
<label>name</label>   
 <input type="text" className="form-control"  placeholder="name@example.com" required
 onChange={e=>setName(e.target.value)}/>
</div>
<div className="form-floating">
<label>email</label>
 <input type="email" className="form-control"  placeholder="Password" required
 onChange={e=>setEmail(e.target.value)}/>
</div>
<div className="form-floating">
<label>password</label>
 <input type="password" className="form-control"  placeholder="Password" required 
 onChange={e=>setPassword(e.target.value)}/>
</div>
<button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
</form>
  </Layout>
    );
};
export default register ;