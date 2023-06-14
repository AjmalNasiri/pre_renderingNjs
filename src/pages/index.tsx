import Layout from './layouts/layout';


export async function getServerSideProps(context:any) {
  const { req } = context;
  const cookies = req.headers.cookie || '';

  const response = await fetch('http://127.0.0.1:8000/api/user', {
    headers: {
      cookie: cookies
    }
  });

  if (!response.ok) {
    // Redirect to login page if authentication fails
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    };
  }

  const data = await response.json();

  return {
    props: {
      data
    }
  };
}

function HomePage(data:any ) {
  return (
    <div>
      <Layout>
      <p>Data: {JSON.stringify(data)}</p>
      </Layout>
    </div>
  );
}

export default HomePage;

