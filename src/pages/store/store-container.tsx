import { Component } from "react";
import MaterialTable from "../../components/table/table";
import { Product } from "../../models/Product";
import { TABLE_COLUMNS } from "../../utils/constants";
import "./store-container.scss";
class StoreContainer extends Component {
  products: Product[] = [
    new Product(1, "name", "test1", "ts", 2),
    new Product(2, "name", "test1", "ts", 2),
    new Product(3, "name", "test1", "ts", 2),
  ];
  render() {
    return (
      <div className="store-container">
        <MaterialTable
          headers={TABLE_COLUMNS}
          data={this.products}
        ></MaterialTable>
      </div>
    );
  }
}

export default StoreContainer;
