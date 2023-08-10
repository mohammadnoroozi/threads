import mongoose from "mongoose";

const { Schema } = mongoose;

const { ObjectId } = Schema.Types;

const threadSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    author: {
        type: ObjectId,
        ref: "User",
        required: true
    },
    community: {
        type: ObjectId,
        ref: "Community"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    parentId: {
        type: String
    },
    children: [
        {
            type: ObjectId,
            ref: "Thread"
        }
    ]
})

const Thread = mongoose.models.Thread || mongoose.model("Thread", threadSchema);

export default Thread;