import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Vanheusen India an initiative of Madura Fashion & Lifestyle, a
          division of Aditya Birla Fashion and Lifestyle is a branded apparel
          companies and a premium lifestyle player in the retail sector. After
          consolidating with its own brands, it introduced premier international
          labels, enabling Indian consumers to buy the global fashionwear and
          accessories within the country.
        </p>
        <p>
          Customers like the value, quality and fabric of the shirt. They
          mention that its an average product, worth buying and that the cloth
          material is also nice. They appreciate the fit, saying that its
          perfect for formal use. Opinions are mixed on the appearance.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
