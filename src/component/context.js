import React, { Component } from "react";

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    shoes: [
      {
        id: 0,
        name: "VALOUR BLUE",
        img:
          "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/828-8030-_2_360x.jpg?v=1591259697",
        Rs: "9.99",
      },
      {
        id: 1,
        name: "JORDAN MARS 270 LONDON",
        img:
          "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/828-2030-_2_360x.jpg?v=1591259658",
        Rs: "9.99",
      },
      {
        id: 2,
        name: "RACER BLUE",
        img:
          "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/851-9266-b_360x.jpg?v=1585297785",
        Rs: "9.99",
      },
      {
        id: 3,
        name: "RACER BLUE",
        img:
          "https://www.shoecarnival.com/dw/image/v2/BBSZ_PRD/on/demandware.static/-/Sites-scvl-master-catalog/default/dw7b241007/103543_205154_1.jpg?sw=700&sh=593&sm=fit",
        Rs: "9.99",
      },
      {
        id: 4,
        name: "Running Shoe",
        img: "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
        Rs: "9.99",
      },
      {
        id: 5,
        name: "Running Shoe",
        img:
          "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/428-9025-_1_360x.jpg?v=1591258447",
        Rs: "9.99",
      },

      {
        id: 6,
        name: "VALOUR BLUE",
        img:
          "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/853-6214-_2_360x.jpg?v=1591878784",
        Rs: "9.99",
      },
      {
        id: 7,
        name: "JORDAN MARS 270 LONDON",
        img:
          "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/881-2175-_2_360x.jpg?v=1591879104",
        Rs: "9.99",
      },
      {
        id: 8,
        name: "RACER BLUE",
        img:
          "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/851-1251-c_360x.JPG?v=1573496007",
        Rs: "9.99",
      },
      {
        id: 9,
        name: "RACER BLUE",
        img:
          "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/851-9255-b_360x.jpg?v=1574316425",
        Rs: "9.99",
      },
      {
        id: 10,
        name: "Running Shoe",
        img:
          "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/859-9201-_2_360x.jpg?v=1592562290",
        Rs: "9.99",
      },
      {
        id: 11,
        name: "Running Shoe",
        img:
          "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/428-9025-_1_360x.jpg?v=1591258447",
        Rs: "9.99",
      },
    ],
  };

  render() {
    const { shoes } = this.state;
    return (
      <div>
        <DataContext.Provider value={{ shoes }}>
          {this.props.children}
        </DataContext.Provider>
      </div>
    );
  }
}
