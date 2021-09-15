const express = require('express')
const PORT = '3001'
const app = express()
// const api = require('./api')
const axios = require('axios')
const cors = require('cors')

app.use(cors())

app.use(express.json())
app.listen(PORT, (req,res,next)=>{
    console.log(`server running on port ${PORT}`)
})
app.get("/", (req,res,next)=>{
    //  .then(data => {console.log(data)})
    return res.send({message:"working"})
})
app.get('/api', async (req,res,next)=>{
    try{
    //    const data = axios.get('https://testapi.io/api/Jonas-buriti/scholarships').then( data => {
    //         console.log(data.data)
    //         return res.status(200).send( data.data )
    //     })
    function dadosApi(){
        return axios.get('https://testapi.io/api/Jonas-buriti/scholarships')
    }
    dados = dadosApi();
    dados.then( result => {
        const value = result.data
        console.log(value)
        return res.status(200).send( value )
    })
    }catch(error){
       return res.status(401).send({message: error.message})
    }
})
