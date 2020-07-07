import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useRecoilState } from "recoil";

import { products } from "../../store";

const DeleteModal = (props) => {
  const { show, id, handleClose } = props;

  const [productList, setProductList] = useRecoilState(products);
  const product = productList.length
    ? productList.find((item) => item.id === id)
    : null;
  const index = productList.findIndex((item) => item === product);

  const deleteProduct = () => {
    setProductList(removeProduct(productList, index));
    handleClose();
  };

  return (
    <>
      {product ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete the Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleClose()}>
              Close
            </Button>
            <Button variant="primary" onClick={() => deleteProduct()}>
              Yes, Do it.
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

function removeProduct(products, i) {
  return [...products.slice(0, i), ...products.slice(i + 1)];
}

export default DeleteModal;
