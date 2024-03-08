import ProductItemButtons from "./ProductItemButtons";
import ProductItemDetails from "./ProductItemDetails";

const ProductItemNoImage = ({ productTitle }) => {

  return (
    <div className="div-item">

      {/* No Image */}
      <div id="not-found">
        <p id="not-found-text">No image uploaded</p>
      </div>

      {/* Details */}
      <ProductItemDetails productTitle={productTitle} />

      {/* Buttons */}
      <ProductItemButtons />

    </div>
  )
}

export default ProductItemNoImage;