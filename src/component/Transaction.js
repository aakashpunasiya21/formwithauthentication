import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { requestTransaction } from "../thunks/Items";
function Transaction() {
  const transaction = useSelector((state) => state.getTransaction.transaction);
  console.log("selector", transaction)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestTransaction())
  }, [])

  return (
    <>
      <h1 className="text-center">Transaction</h1><hr/>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Cost</th>
            <th>Quantity</th>
            <th>ProductId</th>
          </tr>
        </thead>
        <tbody>
          {transaction.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.cost}</td>
              <td>{item.quantity}</td>
              <td>{item.productId}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
export default Transaction;