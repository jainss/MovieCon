import React from 'react'
import Pagination from '@mui/material/Pagination';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';

const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
    },
});
const CustomPagination = ({ setPage, noofpages = 100 }) => {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    }
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: 30,
                marginBottom: 30
            }}>
            <ThemeProvider theme={darkTheme}>
                <Pagination count={noofpages}
                    onChange={(e) => handlePageChange(e.target.textContent)}
                    hideNextButton
                    hidePrevButton
                    color='primary'
                />

            </ThemeProvider>
        </div >
    )
}

export default CustomPagination