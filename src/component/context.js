import React, { Component } from "react";

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    shoes: [
      {
        id: 0,
        name: "VALOUR BLUE",
        img:
          "https://i.pinimg.com/564x/d8/17/03/d817039e2f4ca479d8fe009850843ef9.jpg",
        descrip:
          "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
        Rs: "9.99",
      },
      {
        id: 1,
        name: "JORDAN MARS 270 LONDON",
        img:
          "https://i.pinimg.com/564x/0e/a6/e3/0ea6e3c04993113c8a04f9ce61c6b6ff.jpg",
        descrip:
          "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
        Rs: "9.99",
      },
      {
        id: 2,
        name: "RACER BLUE",
        img:
          "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/851-9266-b_360x.jpg?v=1585297785",
        descrip:
          "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
        Rs: "9.99",
      },
      {
        id: 3,
        name: "RACER BLUE",
        img:
          "https://www.shoecarnival.com/dw/image/v2/BBSZ_PRD/on/demandware.static/-/Sites-scvl-master-catalog/default/dw7b241007/103543_205154_1.jpg?sw=700&sh=593&sm=fit",
        descrip:
          "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
        Rs: "9.99",
      },
      {
        id: 4,
        name: "Running Shoe",
        img: "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
        descrip:
          "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
        Rs: "9.99",
      },
      {
        id: 5,
        name: "Running Shoe",
        img:
          "https://i.pinimg.com/564x/b2/ea/3d/b2ea3d8872fa4c9e6cfae5d2b2fb5e62.jpg",
        descrip:
          "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
        Rs: "9.99",
      },

      {
        id: 6,
        name: "VALOUR BLUE",
        img:
          "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/853-6214-_2_360x.jpg?v=1591878784",
        descrip:
          "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
        Rs: "9.99",
      },
      {
        id: 7,
        name: "JORDAN MARS 270 LONDON",
        img:
          "https://i.pinimg.com/564x/d8/17/03/d817039e2f4ca479d8fe009850843ef9.jpg",
        descrip:
          "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
        Rs: "9.99",
      },
      {
        id: 8,
        name: "RACER BLUE",
        img:
          "https://i.pinimg.com/564x/ef/47/15/ef4715083cad0521c6e5994addf3be6c.jpg",
        descrip:
          "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
        Rs: "9.99",
      },
      {
        id: 9,
        name: "RACER BLUE",
        img:
          "https://i.pinimg.com/564x/e5/9b/56/e59b5683c712cbb82365dfdc35a3b1bc.jpg",
        descrip:
          "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
        Rs: "9.99",
      },
      {
        id: 10,
        name: "Running Shoe",
        img:
          "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/859-9201-_2_360x.jpg?v=1592562290",
        descrip:
          "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
        Rs: "9.99",
      },
      {
        id: 11,
        name: "Running Shoe",
        img:
          "https://i.pinimg.com/564x/8d/47/45/8d47453d4674f0ff681db1c3f7c4f2af.jpg",
        descrip:
          "2020 New Design Summer Breathable Nylon Mesh Men Shoes Sneaker Sport Shoes Casual Shoes",
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
