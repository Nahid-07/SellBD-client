import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";


const AllSeller = () => {
  const {data : sellers=[], refetch} = useQuery({
    queryKey:['seller'],
    queryFn:async()=>{
      const res = await fetch(`http://localhost:5000/users/seller`)
      const data = await res.json()
      return data
    }
  })


  // deletede a seller
  const handleDelete = id =>{
    fetch(`http://localhost:5000/allseller/${id}`,{
      method:"DELETE"
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.deletedCount > 0){
        const remainingUser = sellers.filter(seller => seller._id !== id)
        refetch(remainingUser)
      }
    })
  }

  // veryfy seller
  const handleVerify =(id)=>{
    const agree = window.confirm("are you sure you want to verify the user ?")
    if(agree){
      fetch(`http://localhost:5000/users/verify/${id}`,{
        method : "PUT",
        headers:{
            authorization : `bearer ${localStorage.getItem('Token')}`
        }
    })
    .then(res => res.json())
    .then(data => {
       
        if(data.modifiedCount> 0){
            toast.success('User Verified')
            refetch()
        }
    })
    }
}
  
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>NO.</th>
            <th>Name</th>
            <th>email</th>
            <th>Delete</th>
            <th>Verfy User</th>
          </tr>
        </thead>
        <tbody>
          {sellers.map((slr, i) => (
            <tr key={slr._id}>
              <th>{i + 1}</th>
              <td>{slr.name}</td>
              <td>{slr.email}</td>
              <td>
                <button onClick={()=>handleDelete(slr._id)} className="btn btn-sm bg-red-700">Delete</button>
              </td>
              <td>
                <button onClick={()=>handleVerify(slr._id)} className="btn btn-sm bg-green-600">Verify</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllSeller;
