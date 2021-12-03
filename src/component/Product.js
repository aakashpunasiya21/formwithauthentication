import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { requestProduct } from "../thunks/Items";
function Product() {
  const products = useSelector((state) => state.getProduct.products);
  console.log("selector",products)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestProduct())
  }, [])
  
  return (
    <>
    <hr/>
      <h1 className="text-center">Products List</h1><hr/>
      <Table>
      <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Cost</th>
              <th>Quantity</th>
              <th>LocationId</th>
              <th>FamilyId</th>
            </tr>
        </thead>
        <tbody>
        {products.map((item) =>(
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.cost}</td>
            <td>{item.quantity}</td>
            <td>{item.locationId}</td>
            <td>{item.familyId}</td>
           
          </tr>
        ))}
        </tbody>
      </Table>
    
    </>
  )
}
export default Product;