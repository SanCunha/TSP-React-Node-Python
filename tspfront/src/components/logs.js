import Table from "react-bootstrap/Table";

const Logs = (props) => {
  const printLogs = (logs) => {
    return logs.map((log, idx) => {
      console.log("log.route", log.route);
      let route = "";
      log.route.map((idx) => {
        route += `${idx} => `;
      });
      return (
        <tr name={idx}>
          <td>{log.iteration}</td>
          <td>{route}</td>
          <td>{log.value}</td>
        </tr>
      );
    });
  };
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Rota</th>
          <th>Distância</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr> */}
        {printLogs(props.logs)}
      </tbody>
    </Table>
  );
};

export default Logs;
