import React from 'react';
import Head from 'next/head';
import Link from 'next/link'

const Layout=({children}:any)=>{
    return(
        <>
        <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"/>

        </Head>
      
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
  <div className="container-fluid">
     <Link href="/">
            home 
    </Link>
    <div>
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
           
              
          <Link style={{ padding: '10px' }} href="/register">
              Register
         </Link>
         </li>

         <li>
         <Link href="/login" style={{float:'right' }}>
              login
          </Link>
         
        </li>
        
        
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav> 


       <main className="form-signin w-100 m-auto">
        {children}
      </main>
        </>
    )
}
export default Layout