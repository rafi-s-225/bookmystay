const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    image:{
        type:String,
        default:"https://www.travelandleisure.com/thmb/rbPz5_6COrWFh94qFRHYLJrRM-g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/iguazu-falls-argentina-brazil-MOSTBEAUTIFUL0921-e967cc4764ca4eb2b9941bd1b48d64b5.jpg"
    },
    price:{
        type:Number,
        required:true
    },
    location:String,
    country:String
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;