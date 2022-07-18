import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  ResponsiveContainer,
  Line,
  LineChart,
  ZAxis,
  Legend,
} from "recharts";
// import Chart from "react-google-charts";

const Solution = (props) => {
  var { data } = props;
  //   console.log(data, "data");
  //   let scatterData = [["Age", "Weight"]];
  //   for (let i = 0; i < data.coords[0].length; i++) {
  //     let coord = [data.coords[0][i], data.coords[1][i]];
  //     scatterData.push(coord);
  //   }
  //   const scatterOptions = {
  //     title: "TSP",
  //     hAxis: { title: "X", minValue: 0, maxValue: 100 },
  //     vAxis: { title: "Y", minValue: 0, maxValue: 100 },
  //     legend: "none",
  //   };
  let data01 = [];
  data.coords[0].map((coord, idx) => {
    let obj = {
      name: data.route[idx],
      x: data.coords[1][idx],
      y: data.coords[0][idx],
      z: 200,
    };
    data01.push(obj);
  });
  data01.push({
    name: data01[0].name,
    x: data01[0].x,
    y: data01[0].y,
    z: 200,
  });
  const data02 = [
    { name: "Page A", uv: 300, pv: 2600, amt: 3400 },
    { name: "Page B", uv: 400, pv: 4367, amt: 6400 },
    { name: "Page C", uv: 300, pv: 1398, amt: 2400 },
    { name: "Page D", uv: 200, pv: 9800, amt: 2400 },
    { name: "Page E", uv: 278, pv: 3908, amt: 2400 },
    { name: "Page F", uv: 189, pv: 4800, amt: 2400 },
    { name: "Page G", uv: 189, pv: 4800, amt: 2400 },
  ];
  const data03 = [
    { x: 30, y: 20 },
    { x: 50, y: 180 },
    { x: 75, y: 240 },
    { x: 100, y: 100 },
    { x: 120, y: 190 },
  ];
  const renderSpecialDot = (props) => {
    const { cx, cy, stroke, key } = props;

    if (cx === +cx && cy === +cy) {
      return (
        <path d={`M${cx - 2},${cy - 2}h4v4h-4Z`} fill={stroke} key={key} />
      );
    }

    return null;
  };
  return (
    <div
      style={{
        display: "flex",
        "flex-direction": "column",
        "justify-content": "space-between",
        "align-items": "center",
        height: "100%",
      }}
    >
      <Form>
        <Row>
          <Col>
            <Form.Label>Rota</Form.Label>
            <Form.Control value={data.route} disabled />
          </Col>
          <Col>
            <Form.Label>Distância</Form.Label>
            <Form.Control value={data.value} disabled />
          </Col>
        </Row>
      </Form>
      {/* <Chart
        width={"100%"}
        height={"100%"}
        chartType="ScatterChart"
        loader={<div>Loading Chart</div>}
        data={scatterData}
        options={scatterOptions}
        rootProps={{ "data-testid": "1" }}
      /> */}
      <div className="line-chart-wrapper">
        {/* <LineChart width={450} height={250} data={data01} syncId="test"> */}
        {/* <CartesianGrid stroke="#f5f5f5" fill="#e6e6e6" /> */}
        {/* <Legend
            onMouseEnter={this.handleLegendMouseEnter}
            onMouseLeave={this.handleLegendMouseLeave}
          /> */}
        {/* <XAxis type="number" dataKey="pv" height={40} label={"Teste"}>
            <Label value="x轴" position="insideBottom" />
          </XAxis>
          <YAxis type="number" unit="%" width={80}>
            <Label value="y轴" position="insideLeft" angle={90} />
          </YAxis>
          <Tooltip trigger="click" />
          <Line
            key="uv"
            type="monotone"
            dataKey="uv"
            stroke="#ff7300"
            dot={renderSpecialDot}
            strokeOpacity={1}
            strokeDasharray="3 3"
          >
            <LabelList position="bottom" offset={10} dataKey="name" />
          </Line> */}
        {/* <Brush dataKey="name" height={30} /> */}
        {/* <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis /> */}
        {/* <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" /> */}
        <ScatterChart
          width={450}
          height={250}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" />
          <YAxis type="number" dataKey="y" />
          <ZAxis type="number" range={[100]} />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          {/* <Legend /> */}
          {/* <Scatter
            name="A school"
            data={data01}
            fill="#8884d8"
            line
            shape="cross"
          /> */}
          <Scatter
            // name="Representação"
            data={data01}
            fill="#82ca9d"
            line
            // shape="diamond"
          >
            <LabelList dataKey="name" />
          </Scatter>
        </ScatterChart>
        {/* </LineChart> */}
      </div>
    </div>
  );
};

export default Solution;
