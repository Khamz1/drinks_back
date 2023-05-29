const Drinks = require('../models/drinks.models')
module.exports.drinksController = {
    getDrinks: async (req, res) =>{
       try{ const drinks = await Drinks.find({}) 
    res.json(drinks)}
       catch(err){res.json(err)}
    },
    getDrinksById:async (req, res)=> {
        try { const drinks = await Drinks.findById(req.params.id)
        res.json(drinks)}   
        catch(err){res.json(err)}
    },

    postDrinks: async (req, res)=>{
      try{const drinks = await Drinks.create({
        name: req.body.name,
        price: req.body.price,
        remaining: req.body.remaining,
        cofein:req.body.cofein,
        volume: req.body.volume,
        description:req.body.description
    });
    res.json(drinks)} 
   catch(err){res.json(err)}
    },

    getRemainigDrinks: async (req, res) =>{
        try{const drinks = await Drinks.find({remaining:true})
    res.json(drinks)}
    catch(err){res.json(err)}
    },

    deleteDrinks: async(req, res)=>{
      await  Drinks.findOneAndRemove(
        req.params.id)
        res.json("удален")
    },

    patchDrinks: async (req, res) =>{
        try {const drinks = await Drinks.findByIdAndUpdate(
            req.params.id,
            {name: req.body.name,
            price: req.body.price,
            remaining: req.body.remaining,
            cofein:req.body.cofein,
            volume: req.body.volume,
            description:req.body.description},
            {new: true})
            res.json(drinks) }
            catch(err){res.json(err)}
        
    }


}