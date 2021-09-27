import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";
import "./ChartLine.scss";
import { useState } from "react";

ChartLine.propTypes = {
  dataChart: PropTypes.array.isRequired,
  labelsX: PropTypes.array.isRequired,
  chartName: PropTypes.string,
  labelNote: PropTypes.string,
};
ChartLine.defaultProps = {
  chartName: "",
  labelNote: "",
};

function ChartLine(props) {
  const { dataChart, labelsX, chartName, labelNote } = props;
  const [infoChart, setInfoChart] = useState({
    labels: "",
    datasets: [
      {
        label: "",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        data: "",
      },
    ],
  });
  useEffect(() => {
    setInfoChart({
      labels: labelsX,
      datasets: [
        {
          label: labelNote,
          fill: false,
          lineTension: 0.5,
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 1,
          data: dataChart,
        },
      ],
    });
  }, [dataChart, labelsX]);
  console.log("Chat render");
  return (
    <div className="LineChart">
      <Line
        data={infoChart}
        options={{
          title: {
            display: true,
            text: chartName,
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
        className="Line"
      />
    </div>
  );
}

export default React.memo(ChartLine);
