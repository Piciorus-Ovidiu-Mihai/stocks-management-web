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
    new Product(4, "name", "test1", "ts", 2),
    new Product(5, "name", "test1", "ts", 2),
    new Product(6, "name", "test1", "ts", 2),
    new Product(7, "name", "test1", "ts", 2),
    new Product(8, "name", "test1", "ts", 2),
    new Product(9, "name", "test1", "ts", 2),
    new Product(10, "name", "test1", "ts", 2),
    new Product(11, "name", "test1", "ts", 2),
    new Product(12, "name", "test1", "ts", 2),
    new Product(812, "name", "test1", "ts", 2),
    new Product(91, "name", "test1", "ts", 2),
    new Product(1021, "name", "test1", "ts", 2),
    new Product(1112, "name", "test1", "ts", 2),
    new Product(121, "name", "test1", "ts", 2),
    new Product(81, "name", "test1", "ts", 2),
    new Product(912, "name", "test1", "ts", 2),
    new Product(101, "name", "test1", "ts", 2),
    new Product(111, "name", "test1", "ts", 2),
    new Product(1211, "name", "test1", "ts", 2),
  ];
  render() {
    return (
      <div className="store-container">
        <MaterialTable
          headers={TABLE_COLUMNS}
          data={this.products}
          direction="asc"
          orderBy="Name"
        ></MaterialTable>
      </div>
    );
  }
}

export default StoreContainer;
