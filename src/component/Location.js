import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { requestLocation } from "../thunks/Items";

function Location() {
  const location = useSelector((state) => state.getLocation.location);
  console.log("selector",location)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestLocation())
  }, [])
  
  return (
    <>
      <h1 className="text-center">Location</h1><hr/>
      <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
          {location.map((item) =>(
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
export default Location;