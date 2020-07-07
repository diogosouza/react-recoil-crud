import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

import AddProduct from "./components/AddProduct";
import FilterProducts from "./components/FilterProducts";
import ListProducts from "./components/ListProducts";

function App() {
	return (
		<Container className="p-3">
			<div className="py-5 text-center">
				<h1>Product's CRUD</h1>
				<p className="lead">
					Go ahead and play with a CRUD made with React, Bootstrap and Recoil.js
				</p>
			</div>
			<Row>
				<Col>
					<AddProduct />
				</Col>
				<Col className="col-8">
					<FilterProducts />
					<hr />
					<ListProducts />
				</Col>
			</Row>
		</Container>
	);
}

export default App;
