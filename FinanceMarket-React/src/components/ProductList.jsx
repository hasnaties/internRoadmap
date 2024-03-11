import ProductItem from "./ProductItem";
import ProductItemNoImage from "./ProductItemNoImage";

import products from '../content/products.json';

import imageItemOne from '../../images/usingcard.png';
import imageItemTwo from '../../images/vertical1.png';

const ProductList = () => {
  return (
    <>
      {/* Section Heading */}
      <div id="menu-heading">
        <h2 id="menu-heading-text">Finance Products</h2>
      </div>

      {/* Product-list */}
      <div id="v-list">

        <ProductItem
          imageSrc={imageItemOne}
          productTitle={products.Item1.title}
        />
        <ProductItemNoImage productTitle={products.Item2.title} />
        <ProductItem
          imageSrc={imageItemTwo}
          productTitle={products.Item3.title}
        />
      </div>
    </>
  )
}

export default ProductList;