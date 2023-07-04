import User from "../models/userModel.js";
import {basicApproach, betterApproach, modApproach, optimizedApproach, sieveOfEratosthenes} from "../prime_num_approach/approaches.js"

let obj;
export const createUser = async (req, res) => {
    try {
        const {start, end, idnum, email} = req.body;
        //condition if starting value is more than ending value
        if (start > end) {
            res.send("Invalid range: Please enter start less than end")
        }
        //if user enters negative value
        else if ( start <= 0 || end <= 0) {
            res.send("Invalid: Please enter positive values")
        }
        else {
            //if basic approach is chosen
            if(idnum == 1) {
                let ans =[];
                const startTime = new Date().getTime();
                ans = await basicApproach(start, end);
                const endTime = new Date().getTime();
                const output = ans;
                const size = ans.length;
                const time_elapsed = (endTime - startTime);
                const approach_chosen = "Basic Approach";
                obj = {
                    Message : "User created successfully",
                    Output : ans,
                    Approach : approach_chosen
                };
                await User.create({email,range: {start, end}, output, size, approach_chosen, time_elapsed});
            }

            //if better approach is chosen
            else if(idnum == 2) {
                let ans =[];
                const startTime = new Date().getTime();
                ans = await betterApproach(start, end);
                const endTime = new Date().getTime();
                const output = ans;
                const size = ans.length;
                const time_elapsed = (endTime - startTime);
                const approach_chosen = "Better Approach";
                obj = {
                    Message : "User created successfully",
                    Output : ans,
                    Approach : approach_chosen
                };
                await User.create({email,range: {start, end}, output, size, approach_chosen, time_elapsed});
            }
        
            //if optimized approach is chosen
            else if(idnum == 3) {
                let ans =[];
                const startTime = new Date().getTime();
                ans = await optimizedApproach(start, end);
                const endTime = new Date().getTime();
                const output = ans;
                const size = ans.length;
                const time_elapsed = (endTime - startTime);
                const approach_chosen = "Optimized Approach";
                obj = {
                    Message : "User created successfully",
                    Output : ans,
                    Approach : approach_chosen
                };
                await User.create({email,range: {start, end}, output, size, approach_chosen, time_elapsed});
            }

            //if MOD approach is chosen
            else if(idnum == 4) {
                let ans =[];
                const startTime = new Date().getTime();
                ans = await modApproach(start, end);
                const endTime = new Date().getTime();
                const output = ans;
                const size = ans.length;
                const time_elapsed = (endTime - startTime);
                const approach_chosen = "MOD Approach";
                obj = {
                    Message : "User created successfully",
                    Output : ans,
                    Approach : approach_chosen
                };
                await User.create({email,range: {start, end}, output, size, approach_chosen, time_elapsed });
            }

            //if sieve of eratosthenes approach is chosen
            else if(idnum == 5) {
                let ans =[];
                const startTime = new Date().getTime();
                ans= await sieveOfEratosthenes(start, end);
                const endTime = new Date().getTime();
                const output = ans;
                const size = ans.length;
                const time_elapsed = (endTime - startTime);
                const approach_chosen = "Sieve of Eratosthenes";
                obj = {
                    Message : "User created successfully",
                    Output : ans,
                    Approach : approach_chosen
                };
                await User.create({email,range: {start, end}, output, size, approach_chosen, time_elapsed});
            }
            
            //if user choses any other option 
            else {
                return res.send("Invalid: Please Enter correct Approach ID");
            }
            res.send(obj);
        }
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

export const getAllUsers = async(req, res) => {
    try {
        //finding all users there in database and storing them in users
        const users = await User.find({});
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({message: err.message})
    }
};

export const getOneUser = async(req, res) => {
    try {
        //taking email from user and finding in database
        const {email} = req.body;
        //searching for user by the email
        const user = await User.findOne({email});
        //if user with email provided is not found
        if (!user) {
            return res.status(404).json({message: `cannot find any user with email ${email}`});
        }
        //if user with provided email is found
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({message: err.message})
    }
};

export const deleteUser = async(req, res) => {
    try {
        //taking email from user and finding in database
        const {email} = req.body;
        //searching for user by the email and deleting that object
        const user = await User.findOneAndDelete({email});
        //if user with email provided is not found
        if (!user) {
            return res.status(404).json({message: `cannot find any user with email ${email}`});
        }
        //if that user is deleted, than we'll display that deleted object 
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({message: err.message})
    }
};