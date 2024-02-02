import mongoose from "mongoose";
const uri = "mongodb+srv://DiegoFRM:OnisimO1234@task-manager.4jizvbx.mongodb.net/merndb";
const localUri = "mongodb://localhost:27017/merndb"

export const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log(">>> DB is connected<<<")
  } catch (error) {
    console.log(error);
  }
};
