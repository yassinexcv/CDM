
import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment'


function Profile() {
  const id=localStorage.getItem("_id")
  const token=localStorage.getItem("token")
  const role=localStorage.getItem("role")

  const [data, setData] = useState([]);
  const [type, setType] = useState("");

  const [dataform, setDataForm] = useState({
    montant: "",
    type: "",
    receveur: "",
  });

  function handleChange(e) {
    const newdata={...dataform}
    newdata[e.target.name]=e.target.value
    setDataForm(newdata)
    console.log(newdata)
  }

  function handleSubmit(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");  
    const id=localStorage.getItem("_id")
    const role=localStorage.getItem("role")
    const data = {
      montant: dataform.montant,
      type: dataform.type,
      receveur: dataform.receveur,
    };
    console.log(data)
    fetch(`http://localhost:5000/client/createTransaction`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body:JSON.stringify(data)
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        window.location.reload();
    })



    
    // axios.post(`http://localhost:5000/client/createTransaction`, data, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Accept": "application/json",
    //       "Authorization": `Bearer ${token}`
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //     window.location.reload();
    //   }
    //   )
  
    }


  

  useEffect(() => {
    const getItem=async()=>{
        const res=await axios.get(`http://localhost:5000/client/getClientById/${id}`)
        setData(res.data)
        console.log(res.data)
    }
    getItem(id)
}, [])

  return (
    <div>
        
        <div class="container mx-auto px-6 py-16 text-center">
        <div class="mx-auto max-w-lg">
        <div className="text-center mt-12">
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
             {data.nom} {data.prenom}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              {data.email}
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
            <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                <span className="text-sm text-blueGray-400">Solde</span>
                  <span className="text-base font-bold block uppercase tracking-wide text-blueGray-600"> {data.solde} </span>
                </div>
                <div className="mr-4 p-3 text-center">
                <span className="text-sm text-blueGray-400">Status</span>
                  <span className="text-base block uppercase tracking-wide text-blueGray-600 px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">{data.status}</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                <span className="text-sm text-blueGray-400">Date Creation</span>
                  <span className="text-base font-bold block uppercase tracking-wide text-blueGray-600">{moment(data.dateCreation).format('YYYY-MM-DD hh:mm:ss ')}</span>
                </div>
              </div>            </div>
            <div className="mb-2 text-blueGray-600">
              <button className='bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150' 
              type="button">
                <a href='/releve'>Releve</a>
               </button>
            </div>
          </div>

       <div class="w-full bg-grey-500">
        <div class="container mx-auto py-8">
            <div class="w-96 mx-auto bg-white rounded shadow">

                <div class="mx-16 py-4 px-8 text-black text-xl font-bold border-b border-grey-500">Operation
                </div>

                <form 
                onSubmit={(e) => handleSubmit(e)}
                 >
                    <div class="py-4 px-8">

                        <div class="mb-4">
                            <label class="block text-grey-darker text-sm font-bold mb-2">Montant</label>
                            <input class=" border rounded w-full py-2 px-3 text-grey-darker" 
                            type="number"
                            onChange={(e) => handleChange(e)}
                                name="montant" id="montant"
                                
                                 placeholder="Enter Your Montant" />

                        </div>


                        <div class="mb-4">
                            <label class="block text-grey-darker text-sm font-bold mb-2">Type</label>
                           
                            <select class=" border rounded w-full py-2 px-3 text-grey-darker" name="type" id="type" 
                            onChange={(e) => {
                                handleChange(e);
                                setType(e.target.value);
                              }}

                            >
                              <option value="">Select Type</option>
                                <option value="depot">Depot</option>
                                <option value="retrait">Retrait</option>
                                <option value="envoi">Envoi</option>
                            </select>
                        </div>
                        
                        {type === "envoi" ? (

                            <div class="mb-4">
                            <label class="block text-grey-darker text-sm font-bold mb-2">receveur ID</label>
                            <input class=" border rounded w-full py-2 px-3 text-grey-darker" type="text"
                                name="receveur" id="receveur" 
                                value={dataform.receveur}
                                onChange={(e) => handleChange(e)}
                                 placeholder="Enter Your RIP ID" />

                        </div>
                        ) : null}

                        <div class="mb-4">
                            <button
                            type="submit"
                                class="mb-2 mx-16 rounded-full py-1 px-24 bg-gradient-to-r from-green-400 to-blue-500 ">
                                Save
                            </button>
                        </div>
                    </div>
                </form>

            </div>

        </div>
    </div>
 

        </div>

        
    </div>
    </div>
  )
}

export default Profile