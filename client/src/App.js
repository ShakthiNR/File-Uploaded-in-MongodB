import { useEffect, useState } from "react";
import Table from "./Table";

function App() {
  const [data, setData] = useState("");
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);

  //Initial Load
  const loadData = () => {
    setLoading(true);
    fetch(`http://localhost:3001/api/get/data`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((e) => console.log("Error", e));
  };

  useEffect(() => {
    loadData();
  }, []);

  //Save File in State
  const handleChange = (e) => {
    setFile(e.target.files[0]);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    var formData = new FormData();
    formData.append("file", file);
    console.log("File",file.type.includes('csv'));
    if(!file.type.includes('csv') && !file.type.includes('xlsx') ){
         alert('Only .csv and .xlsx files are allowed')
         setLoading(false)
         return
    }
    console.log("File",file)
    fetch("http://localhost:3001/api/upload", {
      method: "POST",
      body: formData,
    })
      .then(async (data) => {
        alert("CSV Uploaded SuccessFully....");
        await loadData();
      })
      .catch((e) => console.log("err", e));
  };

  return (
    <>
      <center>
        <div>
          <form id="upload_form" encType="multipart/form-data" name="file">
            <div>
              <label>Select file to upload</label>
              <input type="file" id="fileinput" accept=".csv, application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" onChange={handleChange} />
            </div>
            <br />
            <button type="submit" onClick={handleSubmit}>
              Upload
            </button>
          </form>
        </div>
      </center>
      <hr />

      <br />
      <br />
      <center style={{ marginBottom: "10px", fontWeight: "bold" }}>
        Table Details
      </center>

      {data && data.message.length === 0 && !loading && (
        <center style={{ margin: "25px" }}>Please Upload File</center>
      )}

      {loading && <center>Loading....</center>}

      {data && data.message.length !== 0 && <Table data={data} />}
    </>
  );
}

export default App;
