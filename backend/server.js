const express=require('express')
const axios=require('axios')
const cors=require('cors');
const app=express()
app.use(cors())

app.get('/',async (req,res)=>{

    const url='https://dad-jokes.p.rapidapi.com/random/joke/png';
    const headers={
    'X-RapidAPI-Key': '3dfba5a9a0msh3d9c55c1d010d88p11ac2ajsn8c980f1b1f4c',
    'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
    };

    try{

        const response = await axios.get(url,{headers});
        res.json(response.data);

    }catch(error){
        console.log(error)
        res.status(500);
    }

});

app.listen(5000,()=>{
    console.log("Server running on port 5000")

});