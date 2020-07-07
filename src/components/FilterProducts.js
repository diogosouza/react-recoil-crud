import React from "react";
import { useRecoilState } from "recoil";

import { filterProductsValue } from "../store";
import { Form, Button } from "react-bootstrap";

const FilterProducts = () => {
	const [filterProductsState, filterProducts] = useRecoilState(
		filterProductsValue
	);

	const filter = (event) => {
		const { value } = event.target;
		filterProducts(value);
	};

	const clearFilter = () => filterProducts("");

	return (
		<Form>
			<Form.Group controlId="name">
				<Form.Label>Filter:</Form.Label>
				<Form.Control
					type="text"
					placeholder="Filter by Product Name"
					value={filterProductsState}
					onChange={(e) => filter(e)}
				/>
			</Form.Group>

			<Button variant="info" onClick={() => clearFilter()}>
				Clear Filter
			</Button>
		</Form>
	);
};

export default FilterProducts;
