import { useState } from "react";
import productList from "./components/Data";
import TableRow from "./components/TableRow";
const App2 = () => {
  const [products, setProducts] = useState(
    productList.map((item) => ({
      ...item,
      quantity: 0,
      total: 0,
    }))
  );

  const IncrementQuantity = (id) => {
    setProducts(
      products.map((product) => {
        if (product.id === id && product.stock > product.quantity) {
          product.quantity++;
          product.total = product.price * product.quantity;
        }
        return product;
      })
    );
  };

  const DecrementQuantity = (id) => {
    setProducts(
      products.map((product) => {
        if (product.id === id && product.quantity > 0) {
          product.quantity--;
          product.total = product.price * product.quantity;
        }
        return product;
      })
    );
  };

  const total = products.reduce((acc, cur) => acc + cur.total, 0);

  return (
    <div>
      <h1>Product List</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              {...product}
              name={product.productName}
              increment={IncrementQuantity}
              decrement={DecrementQuantity}
            />
          ))}
        </tbody>
      </table>
      {total > 0 && <p> Total:{total}</p>}
    </div>
  );
};

export default App2;
