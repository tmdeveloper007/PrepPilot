const mongoose = require("mongoose");
const questionSchema = new mongoose.Schema({
    session:{type:mongoose.Schema.Types.ObjectId,ref:"Session", index: true},
    question:{
        type:String,
        required: [true, "Question text is required"],
        trim: true,
        maxlength: [5000, "Question must be at most 5000 characters"],
    },
    answer:{
        type:String,
        required: [true, "Answer text is required"],
        trim: true,
        maxlength: [10000, "Answer must be at most 10000 characters"],
    },
    note:{type:String, default: ""},
    isPinned:{type:Boolean , default:false},

},{timestamps:true});

module.exports = mongoose.model("Question", questionSchema);