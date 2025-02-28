import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
	user_id: String,
	first_name: String,
	last_name: String,
	phone_number: Number,
	email: String,
	status: String,
      role: String,
	password: String,
	created_at: Date,
	updated_at: Date,
});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
