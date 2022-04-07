import { Container } from "@mui/material";
import { Component } from "react";
import { ResponsiveContainer } from "recharts";
import LinearChart from "../../components/area-chart/area-chart";
import Chart from "../../components/chart/chart";
import "./statistics-container.scss";

class StatisticContainer extends Component {
  render() {
    return (
      <div className="statistics-container">
        <h1 className="statistic-header">Statistics for stocks</h1>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <LinearChart />
          <Chart />
        </Container>
      </div>
    );
  }
}

export default StatisticContainer;
