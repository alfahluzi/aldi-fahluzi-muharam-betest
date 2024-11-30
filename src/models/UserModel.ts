import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    userName: string;
    accountNumber: number;
    emailAddress: string;
    identityNumber: number;
}

const UserSchema: Schema = new Schema({
    userName: { type: String, required: true },
    accountNumber: { type: Number, required: true, unique: true },
    emailAddress: { type: String, required: true, unique: true },
    identityNumber: { type: Number, required: true, unique: true },
});

export default mongoose.model<IUser>("db_aldi_fahluzi_muharam", UserSchema);
