const express = require('express')
const dbconnect = require('./dbconnect')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/data',(req,res)=>{
    res.send('hello from node js')
})


//--------PAGINATION---------------
app.get('/users',(req,res)=>{
    page = req.query.page
    console.log(page)
    if(typeof page=='undefined') {
        x=0
    }else {
        x=(page-1)*5
    }
    sql = `SELECT * from tbl_employes limit ${x},5`
    con.query(sql,(err,data)=>{
        if(err) console.log(err)
        res.json({data})
    })
})


app.listen(3001,()=>console.log('Server run on http://localhost:'+3001))