import React,
{ useState, useEffect }
 from 'react'
 import { ToastContainer, toast } from 'react-toastify';
//  import 'react-toastify/dist/ReactToastify.css';


const Dashboard = () => {
  const [data, setData] = useState([]);
    // fonction getclien
    function getClient(){
        const token = localStorage.getItem("token")
        console.log(token)
        fetch("http://localhost:5000/admin/getclient",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            },
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            setData(data)
        })
    }
    // foncion pour activer status si status==="desactive" et desactiver si status ==="active" 
    function activeStatus(id){
        const token = localStorage.getItem("token")
        fetch(`http://localhost:5000/admin/acceptecomptclient/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            },
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            getClient()
            toast.success("compte active")

        })
    }
// desactiver status

    function desactiveStatus(id){
        const token = localStorage.getItem("token")
        fetch(`http://localhost:5000/admin/desactivercomptclient/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            },
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            getClient()
            alert("compte desactive")
        })
    }



    useEffect(() => {
        getClient()
    }, [])

  return (
  
    <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead class="bg-gray-50">
          <tr>
          <th scope="col" class="px-6 py-4 font-medium text-gray-900">Nom Prenom</th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">Email</th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">Status</th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">Solde</th>
    
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 border-t border-gray-100">
        {data.map((el)=>
          <tr class="hover:bg-gray-50">
            <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
              <div class="text-sm">
                <div class="font-medium text-gray-700">{el.nom} {el.prenom}</div>
              </div>
            </th>
            <td class="px-6 py-4">{el.email}</td>
           
            <td class="px-6 py-4">{el.solde}$</td>
            <td class="px-6 py-4">
                      {el.status==="active"?
                      <button
                      
                      onClick={()=>desactiveStatus(el._id)}
                      class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                    >
                      <button class="h-1.5 w-1.5 rounded-full bg-green-600"></button>
                      Active
                    </button>
                    :
                    <button
                    onClick={()=>activeStatus(el._id)}
                    class="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600"
                  >
                    <button class="h-1.5 w-1.5 rounded-full bg-red-600"></button>
                    Desactive
                  </button>
                    }
              {/* <span
                class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
              >
                <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                Active
              </span> */}
            </td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;


