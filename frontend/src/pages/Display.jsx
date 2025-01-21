import axios from "axios";
import { useState, useEffect } from "react";


const Display=()=>{
    const [mydata, setMydata]= useState([]);

    const loadData=async()=>{
      let api='http://localhost:8000/multerexample/displaydata';

        const response= await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }

    useEffect(()=>{
        loadData();
    }, [])


  

   const ans=mydata.map((key)=>{
      return(
        <>
          <tr>
            <td>
              <img src={'http://localhost:8000/uploads/'+key.imgname} />
               
                 </td>
            <td> {key.rollno}  </td>
            <td> {key.name}  </td>
            <td> {key.city}  </td>
          </tr> 
        </>
      )
   })

    return(
        <>
          <h1> Display Student Detail</h1>
          <table border="1" width="600">
            <tr>
                <th> </th>
                <th> Rollno</th>
                <th> Name </th>
                <th>  City </th>
            </tr>
            {ans}
          </table>
        </>
    )
}

export default Display;