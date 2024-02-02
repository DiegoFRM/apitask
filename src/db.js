import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://DiegoFRM:OnisimO1234@task-manager.4jizvbx.mongodb.net/merndb");
    console.log(">>> DB is connected<<<")
  } catch (error) {
    console.log(error);
  }
};
