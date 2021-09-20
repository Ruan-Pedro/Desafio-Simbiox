const express = require('express')
const PORT = '3001'
const app = express()
// const api = require('./api')
const axios = require('axios')
const cors = require('cors')

app.use(cors())

app.use(express.json())

app.listen(PORT, (req, res, next) => {
    console.log(`server running on port ${PORT}`)
})
app.get("/", (req, res, next) => {
    //  .then(data => {console.log(data)})
    return res.send({ message: "working" })
})
app.get('/api', async (req, res, next) => {
    try {
        const { data } = await axios.get('https://testapi.io/api/Jonas-buriti/scholarships')
        const aux = data.replace(`"campus": { "name": "Tatuapé", "city": "São Paulo" },`,`"campus": { "name": "Tatuapé", "city": "São Paulo" }`)
        const r = JSON.parse(aux)
        return res.send({ data: r })

    } catch (error) {
        console.log(error);
        return res.status(401).send({ message: error.message })
    }
})

app.get('/api/:price', async (req,res,next)=>{
    try{
        const { data } = await axios.get('https://testapi.io/api/Jonas-buriti/scholarships')
        const aux = data.replace(`"campus": { "name": "Tatuapé", "city": "São Paulo" },`,`"campus": { "name": "Tatuapé", "city": "São Paulo" }`)
        const r = JSON.parse(aux)
        // const resultFiltered = r.filter( r => r.full_price = 500)
        //  console.log( r.filter( r => r.full_price = 500) )
        return res.send({ data: r })
    }catch(error){
        console.log(error);
        return res.status(401).send({ message: error.message })
    }
})
