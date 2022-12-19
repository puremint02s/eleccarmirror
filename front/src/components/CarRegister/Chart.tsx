import styled from "styled-components/macro";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface data {
  label: string;
  value: number;
}
interface datas {
  chartData: data[];
}

const Chart = ({ chartData }: datas) => {
  const labels = chartData.map((v: { label: string }) => v.label);
  const values = chartData.map((v: { value: number }) => v.value);
  const data = {
    labels,
    datasets: [
      {
        label: "일치 확률(%)",
        data: values,
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          // "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          // "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <ChartWrapper>
      <Doughnut data={data} />
    </ChartWrapper>
  );
};

const ChartWrapper = styled.div`
  width: 350px;
  height: 350px;
  margin-bottom: 40px;
`;

export default Chart;
