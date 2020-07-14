import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { DataContext } from "./context";
import "../App.css";

export class Cards extends Component {
  static contextType = DataContext;

  render() {
    const { shoes } = this.context;
    return (
      <div id="product">
        {shoes.map((shoe) => (
          <div className="card" key={shoe.id}>
            <Link to={`/products/${shoe.id}`}>
              <img src={shoe.img} alt={shoe.name} />
            </Link>
            <div className="content">
              <h3>
                <Link to={`/products/${shoe.id}`}>{shoe.name}</Link>
              </h3>
              <span>{shoe.Rs}$</span>
              <br></br>
              <Button variant="contained" color="secondary">
                ADD TO CART
              </Button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
