import ProductItemDetails from "./ProductItemDetails";
import ProductItemButtons from "./ProductItemButtons";

const ProductItem = ({ imageSrc, productTitle }) => {
  return (
    <div className="div-item">

      {/* Image */}
      <img id="card-img" src={imageSrc} alt="item" />

      {/* Details */}
      <ProductItemDetails productTitle={productTitle} />

      {/* Buttons */}
      <ProductItemButtons />

    </div>
  )
}

export default ProductItem;