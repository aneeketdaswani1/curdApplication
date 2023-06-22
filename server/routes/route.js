
import express from 'express';
import User from '../models/userSchema.js';
import Counter from '../models/counterSchema.js';
const router = express.Router();

router.post('/createuser', async (req, res) => {

    const counter = await Counter.findOneAndUpdate({_id:'userid'},{$inc:{seq:1}},{new:true,upsert:true});
    const user = req.body;
    const newUser = new User({...user,id:counter.seq});


    try{
        await newUser.save();
        res.status(201).json(newUser);
    }
    catch(error){
        res.status(409).json({message:error.message});
    }

})

router.get('/allusers', async (req, res) => {
    try{
        const allUsers = await User.find({});
        res.status(200).json(allUsers);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
})

router.get('/edituser/:id', async (req, res) => {

    try{
        const user = await User.find({id:req.params.id});
        res.status(200).json(user);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }

})

router.post('/edituser/:id', async (req, res) => {

    try{
        let user = req.body;
        console.log(user);
        const edituser = new User(user)
        await User.updateOne({id:req.params.id},edituser);
        res.status(200).json(edituser);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }


})

router.delete('/deleteuser/:id', async (req, res) => {

    try{
        await User.deleteOne({id:req.params.id});
        res.status(200).json({message:'User deleted successfully'});
    }
    catch(error){
        res.status(404).json({message:error.message});
    }

})


export default router;