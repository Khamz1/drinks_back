const express = require('express');
const app = express();
const mongoose = require('mongoose')
 app.use(express.json())
app.use(require('./routes/drinks.routes'))

mongoose.connect('mongodb+srv://khamzzaty:intocode@cluster0.hawdzkl.mongodb.net/drinks',{
    }).then(()=>console.log('Успешно соеденились с MongoDB'))
    .catch(()=>console.log('something going wrong'));

    app.listen(3000, ()=>{
        console.log("server go on ")
    })  

   




