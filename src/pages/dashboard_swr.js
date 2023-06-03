import useSWR from 'swr'

const fetcher= async()=>{
    const response = await fetch('http://localhost:3001/posts')
    const data= await response.json()
    return data
    
}

function DashboardSWR(){
  const {data,error}= useSWR('posts',fetcher)
  if(error) return 'error occured'
  if(!data) return 'loading'

  return (
    <div>
        <h2>posts</h2>
        <h2>id - {data.id}</h2>
        <h2>tittle - {data.title}</h2>
        <h2>author - {data.author}</h2>
    </div>
  )

}
export default DashboardSWR