import products from '../content/products.json';

const ProductItemDetails = ({ productTitle }) => {
  return (
    <div className="div-item-text">

      <h3>{productTitle}</h3>
      <p id="card-p">{products.description}</p>
      <div className="double-pair">
        <div className="single-pair">
          <p className="heading-second">Product</p>
          <h6>{products.product}</h6>
        </div>
        <div className="single-pair">
          <p className="heading-second">Max Finance Amount</p>
          <h6>{products.maxAmount}</h6>
        </div>
      </div>

      <div className="double-pair">
        <div className="single-pair">
          <p className="heading-second">Tenor</p>
          <h6>{products.tenor}</h6>
        </div>
        <div className="single-pair ratepa">
          <p className="heading-second">Rate p.a</p>
          <h6>{products.tenor}</h6>
        </div>
      </div>


    </div>
  )
}

export default ProductItemDetails;