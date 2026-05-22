const express= require('express');
const app= express();
const mongoose = require('mongoose');
const Listing=require("./models/listing.js");
const path= require("path")
const methodOverride=require("method-override")
const ejsMate=require("ejs-mate");
const wrapAsync=require("./utils/wrapAsync.js");
const ExpressError=require("./utils/expressError.js");
const listingSchema=require("./schema.js")

const MONGO_URL = "mongodb://127.0.0.1:27017/bookmystay";

main()
.then(()=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err)
});
async function main(){
    await mongoose.connect(MONGO_URL); 
}



app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate)
app.use(express.static(path.join(__dirname,"/public")))
app.use(express.json())


app.get("/",wrapAsync((req,res)=>{
    res.send("Iam root of website")
}))

const validatListing =(req,res,next)=>{
    let {error} =listingSchema.validate(req.body.listing);
    if(error) {
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    } 
    else{
        next()
    }
}

 app.get("/listings",wrapAsync(async (req,res,next)=>{
    let allListings= await Listing.find({})
    res.render("listings/index.ejs",{allListings});
 }))
 
 app.get("/listings/new",(req,res,next)=>{
    res.render("listings/new.ejs");
 })

 app.get("/listings/:id/edit",wrapAsync(async (req,res,next)=>{
    let {id}=req.params
    const listing = await Listing.findById(id)
    res.render("listings/edit.ejs",{listing})
 }))


 app.get("/listings/:id",wrapAsync(async(req,res,next)=>{
    let {id} = req.params
    let listing  = await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
 }))  



 app.post("/listings",validatListing,wrapAsync(async (req,res,next)=>{
        if(req.body.listing.image==""){
            delete req.body.listing.image
        }
        const newListing = new Listing(req.body.listing)
        console.log(newListing);
        await newListing.save();
        res.redirect("/listings");
 }));
app.put("/listings/:id",validatListing,wrapAsync(async (req,res,next)=>{
    let {id} = req.params
    listingSchema.validate(req.body);
    await Listing.findByIdAndUpdate(id,{...req.body.listing})
    res.redirect("/listings")
}))

app.delete("/listings/:id",wrapAsync( async (req,res,next)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id)
    res.redirect("/listings")
}))

app.use((req,res,next)=>{
    next(new ExpressError(404,"Page not found"));
})

app.use((err,req,res,next)=>{
    let {statusCode=500,message="Something went wrong!Try again"}=err
    // res.status(statusCode).send(message);
    res.render("error.ejs",{message});
})

app.listen(8080,()=>{
    console.log("server is listening to 8080");
});