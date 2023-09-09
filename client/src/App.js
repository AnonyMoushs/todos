import './App.css';
import Axios from 'axios'
import { useState, useEffect } from 'react'

function App() {

  const [foodName, setFoodName] = useState();
  const [day, setDay] = useState();

  const [container, setContainer] = useState([])
  const [keys, setKey] = useState()
  const [isDisabled, setDisabled] = useState(true);
  const [updateTask, setUpdateTask] = useState()

  

  const details = {

    foodName: foodName,
  

  }

  const submit = () => {

    Axios.post("https://test-1kxwdortm-francesdonz23-gmailcom.vercel.app/foods", details).then(() => {
      console.log("submit success")
    })


  }

  useEffect(() => {

    Axios.get("https://test-1kxwdortm-francesdonz23-gmailcom.vercel.app/getData").then((response) => {

      setContainer(response.data)
      

    }).catch((error) => {

      console.log(error)


    })



  })

  

  return (

    <>

    <div className='container-md'>

        <h1 className='text-center mt-5'>CRUD React App with MONGODB - To Do List</h1>

        <div className='d-flex justify-content-center mt-5'>

          <div className='d-flex flex-column col-lg-5'>

          <input type='text' value={foodName} onChange={(e) => {setFoodName(e.target.value)}} className='mb-3' placeholder='To Do list'/>
         
          <button onClick={submit}>Submit</button>

          </div>

          


        </div>

        <div className='d-flex justify-content-center mt-5'>

          <div className='d-flex flex-column col-lg-5'>

            {container.map((val) => (

              <div className='d-flex flex-column mt-2 mb-2' key={val._id}>

                <input
                  defaultValue={val.task}
                  onChange={(e) => setUpdateTask(e.target.value)}
                  disabled={val._id === keys ? !isDisabled : isDisabled}
                />

                <button onClick={() => {

                  setKey(val._id)

                }}>Edit</button>

                <button onClick={(id) => {

                  id = val._id
                  const update = {
                    task: updateTask
                  }

                  Axios.put(`https://test-1kxwdortm-francesdonz23-gmailcom.vercel.app/updateTask/${id}`, update).then(() => {

              

                  })
                  setKey('')

                }}>Save</button>

                <button onClick={(id) => {

                  id = val._id;

                  Axios.delete(`https://test-1kxwdortm-francesdonz23-gmailcom.vercel.app/deleteTask/${id}`).then(() => {

                  console.log("deleted successfuly")

                  })



                }}>Delete</button>

              </div>

            ))}

          </div>

        </div>



    

    

    </div>

  
   

     

  

    </>
  );
}

export default App;
