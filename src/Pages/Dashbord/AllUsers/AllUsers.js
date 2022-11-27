import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const AllUsers = () => {
  const {data : users=[],refetch } =useQuery({
    queryKey:['users'],
    queryFn: async()=>{
        const res = await fetch('http://localhost:5000/users')
        const data = await res.json()
        return data
    }
  })
  const handleAdmin =(id)=>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method : "PUT",
            headers:{
                authorization : `bearer ${localStorage.getItem('Token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount> 0){
                toast.success('Admin created successfully')
                refetch()
            }
        })
  }
  return (
    <div className="overflow-x-auto mt-4">
      <table className="table w-full table-zebra">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Eamil</th>
            <th>Make Admin</th>
            <th>Delete User</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user?.role !== 'admin' && <button onClick={()=>handleAdmin(user._id)} className="btn btn-sm bg-[#293462]">Make Admin</button>}
              </td>
              <td>
                <button className="btn btn-sm bg-red-700">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
