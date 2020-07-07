import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { products } from "../../store";

const EditModal = (props) => {
  const { show, id, handleClose } = props;

  const [productList, setProductList] = useRecoilState(products);
  const product = productList.length
    ? productList.find((item) => item.id === id)
    : null;
  const index = productList.findIndex((item) => item === product);

  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState(0.0);
  const [quantity, setQuantity] = useState(0);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeColor = (e) => {
    setColor(e.target.value);
  };

  const onChangeSize = (e) => {
    setSize(e.target.value);
  };

  const onChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const updateProduct = () => {
    const newList = replaceProduct(productList, index, {
      ...product,
      name: name,
      color: color,
      size: size,
      quantity: quantity,
    });

    setProductList(newList);
    handleClose();
  };

  return (
    <>
      {product ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit the Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the Product Name"
                  defaultValue={product.name}
                  onChange={(e) => onChangeName(e)}
                />
              </Form.Group>

              <Form.Group controlId="color">
                <Form.Label>Color</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the Product Color"
                  defaultValue={product.color}
                  onChange={(e) => onChangeColor(e)}
                />
              </Form.Group>

              <Form.Group controlId="size">
                <Form.Label>Size</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter the Product Size"
                  defaultValue={product.size}
                  onChange={(e) => onChangeSize(e)}
                />
              </Form.Group>

              <Form.Group controlId="quantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter the Product Quantity"
                  defaultValue={product.quantity}
                  onChange={(e) => onChangeQuantity(e)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleClose()}>
              Close
            </Button>
            <Button variant="primary" onClick={() => updateProduct()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

function replaceProduct(products, i, newVal) {
  return [...products.slice(0, i), newVal, ...products.slice(i + 1)];
}

export default EditModal;
