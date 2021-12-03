import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { requestFamilies } from "../thunks/Items";

function Families() {
  const families = useSelector((state) => state.getFamilies.families);
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestFamilies())
  }, [])
  
  return (
    <>
      <h1 className="text-center">Families</h1><hr/>
      <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
          {families.map((item) =>(
            <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            </tr>
          ))}
          </tbody>
        </Table>
     
    </>
  )
}
export default Families;