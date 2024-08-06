import './sidebar.css';

function Sidebar({ products, onProductSelect }) {
  return (
    <div className="sidebar">
      <h3>Products</h3>
      <ul>
      {products ? (
          products.map((product) => (
            <li key={product.id} onClick={() => onProductSelect(product)}>
              {product.name}
            </li>
          ))
        ) : (
          <li>Loading...</li>
        )}
      </ul>
    </div>
  );
}

export default Sidebar;
