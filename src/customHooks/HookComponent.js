import useData from "./useData";
import useFetchData from "./useFetchData";

const HookComponent = () => {
  const x = useData();
  const [userData, errorMessage] = useFetchData(
    "https://jsonplaceholder.typicode.com/users"
  );
  const [products, errorProductMessage] = useFetchData(
    "https://fakestoreapi.com/products"
  );
  console.log(userData, errorProductMessage);
  return (
    <div>
      <h5>HookComponent</h5>
      <p>my name is {x}</p>
      <hr />
      {userData && (
        <div>
          <h4>users list</h4>
          {userData.map((item, indx) => {
            return (
              <p key={indx}>
                {item.id}. {item.name}
              </p>
            );
          })}
        </div>
      )}
      {errorMessage && <p>{errorMessage}</p>}
      {products && (
        <div>
          <h3>products list </h3>
          {products.map((item, indx) => (
            <p key={indx}>
              {item.id}. {item.title}
            </p>
          ))}
        </div>
      )}
      {errorProductMessage && <h1>{errorProductMessage}</h1>}
    </div>
  );
};

export default HookComponent;
