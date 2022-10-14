import React from "react";
import { Pagination,Stack } from "@mui/material";
import './AppPagination.css';



const AppPagination = ({setPage,pageNumber,page}) => {
    const handleChange = (page)=> {
        setPage(page)
        window.scroll(0,0)
        

    }
  return (
    <div >
        <Stack >
        <div className="pagination-meal">
            <Pagination
            color="secondary"
            page={page}
            onChange={(e,page)=> handleChange(page)}
            variant="outlined"
            count={pageNumber}
            
      
            
            />
          </div>
        
        </Stack>
    </div>
  )
}

export default AppPagination