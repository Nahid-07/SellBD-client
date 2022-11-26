// import { createContext, useEffect, useState } from "react";
// import React from 'react';

// const dataProvider = createContext();

// const LoadContextData = ({children}) => {
//     const [categoryData,setCategoryData] = useState([])
//     useEffect(()=>{
//         fetch('data.json')
//         .then(res => res.json())
//         .then(data =>{
//             setCategoryData(data)
//         } )
//     })
//     return (
//         <dataProvider.Provider value={categoryData}>
//             {children}
//         </dataProvider.Provider>
//     );
// };

// export default LoadContextData;