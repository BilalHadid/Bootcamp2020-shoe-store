import React from "react";

export const Cards = () => {
  const shoes = {
    "air-jordan-3-valor-blue": {
      name: "VALOUR BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
      Rs: "9.99",
    },
    "jordan-mars-270-london": {
      name: "JORDAN MARS 270 LONDON",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
      Rs: "9.99",
    },
    "air-jordan-1-zoom-racer-blue": {
      name: "RACER BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
      Rs: "9.99",
    },
    "Men's Nike Air Max Excee Sneakers": {
      name: "RACER BLUE",
      img:
        "https://www.shoecarnival.com/dw/image/v2/BBSZ_PRD/on/demandware.static/-/Sites-scvl-master-catalog/default/dw7b241007/103543_205154_1.jpg?sw=700&sh=593&sm=fit",
      Rs: "9.99",
    },
    "Men's Running show": {
      name: "Running Shoe",
      img:
        "https://vader-prod.s3.amazonaws.com/1569592693-cloudswift-fw19-rock-slate-m-g1-1569592684.jpg",
      Rs: "9.99",
    },
  };
  return (
    <ul>
      {Object.entries(shoes).map(([ProductId, { name, img, Rs }]) => (
        <li key={ProductId}>
          <h2>{name}</h2>
          <img src={img} alt={name} />
          <h6>{Rs}$</h6>
        </li>
      ))}
    </ul>
  );
};
