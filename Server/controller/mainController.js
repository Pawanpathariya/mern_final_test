const CountryModel=require('../model/CountryModel');
const StateModel=require('../model/StateModel');
const CityModel=require('../model/CityModel');
const addCountry=async(req,res)=>{
const {country}=req.body;
await CountryModel.create({Country:country})
res.send("Country Added");
}

const getCountry=async(req,res)=>{
    const country=await CountryModel.find();
    res.send(country);
}

const addState=async(req,res)=>{
    const {country,state}=req.body;
    await StateModel.create({country:country,state:state})
    res.send("State Saved");
    }

const getState=async(req,res)=>{
    const {country}=req.body;
    const state=await StateModel.find({country:country});
    res.send(state);
}

const addCity=async(req,res)=>{
    const {country,state,city}=req.body;
    await CityModel.create({usercountry:country,userstate:state,usercity:city})
    res.send("City Added");
}

const display=async(req,res)=>{
    const {country,state}=req.body;
    const city=await CityModel.find({usercountry:country,userstate:state});
    res.send(city);
}

const deletebutton=async(req,res)=>{
    const {id}=req.body;
    await CityModel.findByIdAndDelete(id);  
    res.send("City Deleted");
}

const getdata=async(req,res)=>{
    const data=await CityModel.find();
    res.send(data);
}
module.exports={addCountry,getCountry,addState,getState,addCity,display,deletebutton,getdata}