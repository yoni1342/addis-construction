const router = require('express').Router();
const Testimony = require('../models/Testimony')
// Create New Testimony
router.post('/', async (req, res)=>{
    try{
        const newTestimony = await Testimony.create({
            profilePic: req.body.profilePic,
            name: req.body.name,
            desc: req.body.desc
        });
        res.status(200).json(newTestimony);

    }catch(err){
        res.status(500).json(err)
    }
})

// Get one Testimony
router.get('/:id', async (req, res)=>{
    try{
        const testimony = await Testimony.findById({_id: req.params.id})
        if(!testimony) return res.status(404).json("Testimony Not Found!")
        res.status(200).json(testimony);
    }catch(err){
        res.status(500).json(err)
    }
})

// Get All Testimony

router.get('/', async(req, res)=>{
    try{
        const testimony = await Testimony.find({});
        if(!testimony) return res.status(404).json("Not Found!");
        res.status(200).json(testimony);
    }catch(err){
        res.status(500).json("server error")
    }
})

// update Testmony
router.put('/:id', async(req, res)=>{
    try{    
        const testimony = await Testimony.findById(req.params.id);
        if(!testimony) return res.status(404).json("Not Found!");
        try{
            const updateTestimony = await Testimony.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true});
            res.status(200).json(updateTestimony)
        }catch(err){
            res.status(500).json(err);
        }
    }catch(err){
        res.status(500).json(err)
    }
})

// Delete
router.delete('/:id', async(req, res)=>{
    try{
        const testimony = await Testimony.findById(req.params.id);
        if(!testimony) return res.status(404).json("Not Found!");
        try{
            const deleteTestimony = await Testimony.findByIdAndDelete(req.params.id)
            res.status(200).json("Testimony has been deleted");
        }catch(err){
            res.status(500).json(err);
        }
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router
