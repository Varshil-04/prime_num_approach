import mongoose from "mongoose";

//Making our Schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
    },
    range: {
        start: Number,
        end: Number,
    },
    output: Array,
    size: Number,
    approach_chosen: String,
    time_elapsed: Number
},
{
    timestamps: true
},
)

const User = mongoose.model("User", userSchema);

export default User