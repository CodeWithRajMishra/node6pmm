import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

const Display=()=>{
  const [mydata, setMydata]= useState([]);

  const loadData=()=>{
 let  api="http://localhost:8000/books/datadisplay";
 axios.get(api).then((res)=>{
  console.log(res.data);
  setMydata(res.data);
 })
  }

  useEffect(()=>{
    loadData();
  }, []);


  const ans=mydata.map((key)=>{
     return(
      <>
        <tr>
          <td> {key.author_name} </td>
          <td> {key.book_title} </td>
          <td> {key.publish_year} </td>
          <td> {key.price} </td>
        </tr>
      </>
     )
  })
    return(
        <>
          <h1> Display page</h1>

          <Table striped bordered hover>
      <thead>
        <tr>
          <th>Author Name</th>
          <th>Book Title</th>
          <th>Publish Year</th>
          <th>Price</th>
        </tr>
       
      </thead>
      <tbody>
      {ans}
      </tbody>
      </Table>
        </>
    )
}

export default Display;