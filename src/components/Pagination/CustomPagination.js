import React from 'react'
import Pagination from '@mui/material/Pagination';

const CustomPagination = ({ setPage, noofpages = 10 }) => {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    }
    return (
        <div><Pagination count={noofpages} onChange={(e) => handlePageChange(e.target.textContent)} /></div>
    )
}

export default CustomPagination