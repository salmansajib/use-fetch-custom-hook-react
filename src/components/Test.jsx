import UseFetch from './UseFetch';

function Test() {
  const { data, error, pending } = UseFetch(
    'https://dummyjson.com/products',
    {}
  );

  console.log(error, data, pending);

  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {pending ? <h3>Pending! Please wait...</h3> : null}
      {error ? <h3> {error} </h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((item) => <p key={item.id}>{item.title}</p>)
        : null}
    </div>
  );
}

export default Test;
