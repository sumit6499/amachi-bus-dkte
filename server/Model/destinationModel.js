const mongoose = require("mongoose");

const destinationSchema=new mongoose.Schema({
    dest:{
        type: String,
        required: true
    },
    subDest:{
        type: String,
        required: true
    },
    price:[
        {
            month:String,
            price:String
        }
    ]
})

const PostDestination=mongoose.model('postDestination',destinationSchema)


module.exports=PostDestination
