const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    image:{
        type:Object,
        default:{
            filename:"defaultImage",
            url:"https://www.google.com/imgres?q=default%20backgrounds&imgurl=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhd%2Fwindows-default-background-ihuecjk2mhalw3nq.jpg&imgrefurl=https%3A%2F%2Fwallpapers.com%2Fbackground%2Fwindows-default-background-ihuecjk2mhalw3nq.html&docid=RrJM8HGLJ21dpM&tbnid=_dDvyMdp7v46jM&vet=12ahUKEwjTn7XLgMaUAxX2wTgGHc1ZLy0QnPAOegQIFRAB..i&w=1920&h=1080&hcb=2&ved=2ahUKEwjTn7XLgMaUAxX2wTgGHc1ZLy0QnPAOegQIFRAB"
    }},
    price:Number,
    location:String,
    country:String
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;