const userModel = require("../model/userModel");

const createUser = async (req, res) => {
  const userRequest = req.body;
  const singleUser = userModel.create(userRequest);
  res.status(201).send(singleUser);
};

const getAllUser = async (req, res) => {
  const getUserData = await userModel.find();
  res.status(200).send(getUserData);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const deleteUserData = await userModel.findByIdAndDelete(id);
  res.status(200).json(deleteUserData);
};

//for existing data
const updateUser =  async (req , res)=>{
  const {id } = req.params
  const updateUser = await userModel.findByIdAndUpdate(id,{email:"radhaKishori@gmail.com"});
  res.status(200).json(updateUser)
}

//for createAndUpdateuser 
const createAndUpdateUser = async(req, res)=>{
  const {id} = req.body;
  const data = req.body
  const user = await userModel.findByIdAndUpdate(id , data)
  res.status(200).json(user)
}


module.exports = { createUser, getAllUser, deleteUser , updateUser ,createAndUpdateUser };
