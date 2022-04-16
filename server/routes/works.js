const router = require('express').Router();
const Works = require('../models/Works')
// Create New work 
router.post('/', async (req, res)=>{
    try{
        const newWork = await Works.create({
            image: req.body.image,
            title: req.body.title,
            desc: req.body.desc
        });
        res.status(200).json(newWork);

    }catch(err){
        res.status(500).json(err)
    }
})

// Get one Work
router.get('/:id', async (req, res)=>{
    try{
        const work = await Works.findById({_id: req.params.id})
        if(!work) return res.status(404).json("Work Not Found!")
        res.status(200).json(work);
    }catch(err){
        res.status(500).json(err)
    }
})

// Get All works

router.get('/', async(req, res)=>{
    try{
        const work = await Works.find({});
        if(!work) return res.status(404).json("Not Found!");
        res.status(200).json(work);
    }catch(err){
        res.status(500).json("server error")
    }
})

// update Work
router.put('/:id', async(req, res)=>{
    try{    
        const work = await Works.findById(req.params.id);
        if(!work) return res.status(404).json("Not Found!");
        try{
            const updateWork = await Works.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true});
            res.status(200).json(updateWork)
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
        const work = await Works.findById(req.params.id);
        if(!work) return res.status(404).json("Not Found!");
        try{
            const deleteWork = await Works.findByIdAndDelete(req.params.id)
            res.status(200).json("Work has been deleted");
        }catch(err){
            res.status(500).json(err);
        }
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router
