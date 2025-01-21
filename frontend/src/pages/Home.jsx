import { useState } from "react";
import axios from "axios";
const Home=()=>{
 const [myfile, setMyFile]= useState("");
 const [input, setInput] = useState({});

 const onChangeHandler=(e)=>{
      setMyFile(e.target.files[0]);
 }

const handleInput=(e)=>{
  let name=e.target.name;
  let value=e.target.value;
  setInput(values=>({...values, [name]:value}))
  console.log(input);
}

const handleSubmit = async () => {
  const formData = new FormData();
  formData.append('photo', myfile); 
  formData.append("rollno", input.rollno);
  formData.append("name", input.name);
  formData.append("city", input.city);
  
const res = await axios.post('http://localhost:8000/multerexample/uploadfile', formData);
    alert("Succesfully uploaded in server!!!");
};
return(
    <>
      <h1> Upload file using multer</h1>
      Enter Rollno : <input type="text" name="rollno" onChange={handleInput} />
      <br />
      Enter Name : <input type="text" name="name" onChange={handleInput} />
      <br />
      Enter City : <input type="text" name="city" onChange={handleInput} />
      <br />
      Upload your file : 
      <input type="file" onChange={onChangeHandler} />
      <button onClick={handleSubmit}>Upload!</button>
    </>
  )
}
export default Home;