const axios =require('axios');

const CITIES = ['Melbourne', 'Sydney', 'Brisbane', 'Perth', 'Adelaide', 'Hobart', 'Darwin'];

const main = async() =>{
    console.log('hello')
    console.log('ciries',CITIES )

    const fetchGeos = CITIES.map(()=>{
        axios.get('',{
        params:{
            q: 'Melbourne, Australia',
            limit: 1,
            appid:''
        },
    })
    })

    const result = await Promise.all(fetchGeos)
}