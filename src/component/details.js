import React, { Component } from "react";
import { DataContext } from "./context";
import { Link } from "react-router-dom";
import "../App.css";

console.log(this.props);
export class details extends Component {
  static contextType = DataContext;
  state = {
    product: [],
  };
  getProduct = () => {
    if (this.props.match.params.id) {
      const res = this.context.shoes;
      const data = res.filter((item) => {
        return item.id === this.props.match.params.id;
      });
      this.setState({ product: data });
    }
  };
  componentDidMount() {
    this.getProduct();
  }
  render() {
    const { shoes } = this.state;
    return (
      <div>
        {shoes.map((item) => {
          <div className="details" key={item.id}>
            <img src={item.img} alt="" />
            <div className="box">
              <div className="row">
                <h2>{item.name}</h2>
                <span>{item.Rs}</span>
              </div>
              <Link to="/cart" className="cart">
                ADD TO CART
              </Link>
            </div>
          </div>;
        })}
      </div>
    );
  }
}
import {} from "./context";
export default details;
