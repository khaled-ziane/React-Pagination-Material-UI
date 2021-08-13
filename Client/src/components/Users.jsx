import React,{useState,useEffect} from 'react'
import { useParams,Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Pagination from "@material-ui/lab/Pagination"
import TablePagination from '@material-ui/core/TablePagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import axios from 'axios'

function Users() {
  var {pageId} = useParams()
  pageId = parseInt(pageId)
const [users, setUsers] = useState([])
const [page, setPage] = useState(pageId)
console.log(page)
useEffect(() => {
  axios.get(`http://localhost:3001/users?page=${page}`).then((response=>{
    // console.log(response.data.data)
    setUsers(response.data.data)
  })).catch(error=>{
    console.log(error)
  })
}, [page])
 
const changePageHandler = (event,value) =>{
  console.log(value)
  setPage(value)
}

const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };


    
    return (
        <>
<TableContainer  className="table-container" >
      <Table className="table" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                #{row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination  
        className="pagination"
        count={10}
        page={page}
        color="primary"
        onChange={changePageHandler}
        renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/users/${item.page}`}
              {...item}
            />
          )}
        />
         {console.log('Current Page',page)}
    </TableContainer>
        </>
    )
}

export default Users
