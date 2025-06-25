const mongoose = require('mongoose')

const TracksScheme = new mongoose.Schema(
    {
        name:{type:String},
        albun:{type:String},
        cover:{type:String}, 
        artist:{
            name:{type:String},
            nickname:{type: String},
            nationality:{type: String},
        },
        duration: {
            start:{type: Number},
            end:{type: Number},
        },

        mediaId: {type: mongoose.Types.ObjectId,},
    },
    {
        timestamps:true,
        versionKey:false
    }
)

module.exports = mongoose.model("tracks",TracksScheme)