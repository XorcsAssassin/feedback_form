import './maincontentSales.css';

function MainContent({selectedProduct}) {
  return (
    <div>
      <h2>Main Content</h2>
      {selectedProduct ? (
        <p>Selected Product: {selectedProduct.name}</p>
      ) : (
        <p>Please select a product from the sidebar.</p>
      )}
    </div>
  );
}

export default MainContent;
