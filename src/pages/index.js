import User from '../component/user'
function home({users})
{
  return <><h1>hello dear</h1>{
    users.map((user)=>{
      return (
        <div key={user.id}>
          {/* <p>{user.name}</p> */}
          <User uuser={user}/>
        </div>
      )
    })
  }
  </>
}
export default home 

export async function getStaticProps(){
  const response =await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log(data)
  return{
    props:{
      users:data
    }
  }
}