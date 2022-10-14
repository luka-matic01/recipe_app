import React from "react";
import { Pagination } from "@mui/material";


export default function Paginate() {
  const [page, setPage] = React.useState(1);
  const handleChange = ( value) => {
    setPage(value);
  };

  return (
    <div>
      <Pagination count={10} page={page} onChange={handleChange} />
    </div>
  );
}



// import React from 'react';
// import { Pagination } from '@mui/material';

// const Paginate = ({ postsPerPage, totalPosts, paginate }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pageNumbers.push(i);
//   }


//   return (
//     <nav>
//       <ul>
//         {pageNumbers.map(number => (
//           <li key={number}>
//             <Pagination onClick={() => paginate(number)} href='!#' >
//               {number}
              
              
//             </Pagination>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Paginate;