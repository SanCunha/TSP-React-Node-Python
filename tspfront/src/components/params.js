import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const axios = require("axios").default;

const Params = (props) => {
  const [cities, setCities] = useState(0);
  const [iterations, setIterations] = useState(0);
  const [algorithm, setAlgorithm] = useState(0);

  const handleChangeCities = (event) => {
    setCities(event.target.value);
  };

  const handleChangeIterations = (event) => {
    setIterations(event.target.value);
  };

  const handleChangeAlgorithm = (event) => {
    setAlgorithm(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // let data = { cities, iterations, algorithm };
    let qs = require("qs");
    let data = qs.stringify({
      cities: cities,
      iterations: iterations,
      algorithm: algorithm,
    });
    console.log(data);
    let config = {
      method: "post",
      url: "http://159e-170-233-159-185.ngrok.io/api/tsp",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        // "Content-Type": "application/json",
      },
      data: data,
    };
    console.log(config);
    try {
      const resp = await axios(config);
      console.log(resp.data);
      props.setLogs(resp.data.logs);
      let data = {
        route: resp.data.route,
        value: resp.data.value,
        coords: resp.data.coords,
      };
      props.setSolution(data);
      // return resp.data;
      event.preventDefault();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalText">
        <Form.Label column sm={8}>
          Nº de cidades:
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="text" onChange={handleChangeCities} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalText">
        <Form.Label column sm={8}>
          Nº de iteraçãoes:
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="text" onChange={handleChangeIterations} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalText">
        <Form.Label column sm={8}>
          Algoritmo:
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="text" onChange={handleChangeAlgorithm} />
        </Col>
      </Form.Group>
      <Button variant="danger" type="submit">
        Run!
      </Button>
    </Form>
  );
};

export default Params;
