import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },  
        price:{
            type:Number,
            required:true
        },
        image: {
            type: String,
            required: true
        },

    }
);

export default mongoose.model("Event", EventSchema)
