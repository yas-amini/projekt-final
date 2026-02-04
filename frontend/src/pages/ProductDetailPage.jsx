// ProductDetailPage.jsx - Placeholder for the product detail page
import { useParams } from 'react-router-dom';

function ProductDetailPage() {
  const { slug } = useParams();

  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>Product Slug: {slug}</p>
    </div>
  );
}

export default ProductDetailPage;
