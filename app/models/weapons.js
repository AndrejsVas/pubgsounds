var mongoose = require('mongoose');
var Schema= mongoose.Schema;

var weaponSchema = new Schema({
    weaponName : {type : String, required: true, index: {unique:true}},
    firemode: {type:String},
    rangeBar: {type:Number},
    minRange:{type:Number},
    maxRangeUnsilenced : {type:String},
    maxRangeSilenced: {type:String},
    issilenced : {type:String},
    weaponCategory: {type:String,required: true},
    weaponSilencedType: {type:Number,required: true},
    weaponFireModes: {type:Number,required: true}
});

module.exports= mongoose.model('weapon' , weaponSchema);