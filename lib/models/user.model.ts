import mongoose from "mongoose";

const { Schema } = mongoose;

const { ObjectId } = Schema.Types;

const userSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    image: String,
    bio: String,
    threads: [
        {
            type: ObjectId,
            ref: "Thread"
        }
    ],
    onboarded: {
        type: Boolean,
        default: false
    },
    communities: [
        {
            type: ObjectId,
            ref: "Community"
        }
    ]
})


const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
