import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    test: {
      background:'red',
      width:'100px',
      height:'100px'
    },
    box__1:{
        background:'red',
        height:'100px',
        display:'flex',
        justifyContent:'center',
        // marginRight:'10px'
        '&:hover':{
            background:'black'
        },
        '& h1':{
            color:'#fff'
        }
    },
    box__2:{
        background:'orange',
        height:'100px',
        // marginRight:'10px'
    },
    box__3:{
        background:'yellow',
        height:'100px',
        // marginRight:'10px'
    },
    box__4:{
        background:'blue',
        height:'100px',
        // marginRight:'10px'
    },
    iconBtn : {
        color:'green',
        fontSize:'50px'
    },
    input: {
        //  border: '1px solid #dddddd',
    },
    btn: {
        color:'#fff',
        padding:'5px 15px',
        border:'1px solid #dddddd',
        background:'blue',
        '&:hover': {
          background:'yellow',
        }
      },
      tablecel:{
          background:'red'
      },
      Button:{
          color:'red'
      }
  })

export default useStyles