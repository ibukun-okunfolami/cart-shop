import React, { useRef } from "react";
import LazyLoad from "react-lazyload";

const StoreItem = (props) => {
  const { product, addProduct } = props;

  const refholder = useRef();

  const removePlaceholder = () => {
    setTimeout(() => {
      refholder.current.remove();
    }, 500);
  };

  return (
    <li className="product-list__li">
      <div className="product-list__item">
        <div className="wrapper">
          <div className="placehold" ref={refholder}></div>
          <LazyLoad>
            <img src={product.image} alt="img" onLoad={removePlaceholder} onError={removePlaceholder} />
          </LazyLoad>
        </div>
        <strong className="product-list__strong">{product.title}</strong>
        <span className="product-list__price">€{product.price}</span>
      </div>
      <div className="product-list__btn-container">
        <button className="product-list__btn" onClick={() => addProduct(product)}>
          <span className="product-list__btn-span">Add to Cart</span>
        </button>
      </div>
    </li>
  );
};

export default StoreItem;
