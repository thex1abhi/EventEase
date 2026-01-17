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
        type: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        organizerId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Organizer"
        }

    }
);

export default mongoose.model("Event", EventSchema)
