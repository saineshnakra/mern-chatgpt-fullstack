import User from "../models/User.js"
import { NextFunction,Request,Response } from "express";
import {hash} from 'bcrypt';

export const getAllUsers = async (
    req:Request,
    res:Response,
    next:NextFunction
    )=>{
   try{
    const users = await User.find();
    return res.status(200).json({message:"OK",users});
}
   catch(err){
    return res.status(404).json({message:"ERROR",cause: err.message})
   }
    //get all users
};

export const userSignup = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      //user signup
      const { name, email, password } = req.body;
      const hashedPassword = await hash(password, 10);
      const user = new User({ name, email, password: hashedPassword });
      await user.save();
      return res
        .status(201)
        .json({ message: "OK", name: user.name, email: user.email });
    } catch (error) {
      console.log(error);
      return res.status(200).json({ message: "ERROR", cause: error.message });
    }
  };
  