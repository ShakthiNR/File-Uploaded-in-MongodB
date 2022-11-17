const UserDetailsModel = require("../Models/Usermodel")
var csv = require('csvtojson');


//UploadData
exports.uploadData = (req,res)=>{
   console.log("Re",req.file.path);
    csv()
    .fromFile(req.file.path)
    .then((jsonObj)=>{

        var results = [];
        for(var i=0;i<jsonObj.length;i++){
            var obj={}
            obj.agent =jsonObj[i]['agent']
            obj.userType=jsonObj[i]['userType']	
            obj.policy_mode=jsonObj[i]['policy_mode']	
            obj.producer=jsonObj[i]['producer']	
            obj.policy_number=jsonObj[i]['policy_number']	
            obj.premium_amount_written	=jsonObj[i]['premium_amount_written']
            obj.premium_amount	=jsonObj[i]['premium_amount']
            obj.policy_type	=jsonObj[i]['policy_type']
            obj.company_name=jsonObj[i]['company_name']	
            obj.category_name=jsonObj[i]['category_name']	
            obj.policy_start_date=jsonObj[i]['policy_start_date']	
            obj.policy_end_date	=jsonObj[i]['policy_end_date']
            obj.csr	=jsonObj[i]['csr']
            obj.account_name	=jsonObj[i]['account_name']
            obj.email	=jsonObj[i]['email']
            obj.gender	=jsonObj[i]['gender']
            obj.firstname	=jsonObj[i]['firstname']
            obj.city	=jsonObj[i]['city']
            obj.account_type	=jsonObj[i]['account_type']
            obj.phone	=jsonObj[i]['phone']
            obj.address	=jsonObj[i]['address']
            obj.state	=jsonObj[i]['state']
            obj.zip	=jsonObj[i]['zip']
            obj.dob	=jsonObj[i]['dob']
            obj.primary	=jsonObj[i]['primary']
            obj.Applicant_ID=jsonObj[i]['Application_ID']	
            obj.agency_id	=jsonObj[i]['agency_id']
            obj.hasActive =jsonObj[i]['hasActive']
            obj.ClientPolicy=jsonObj[i]['ClientPolicy']
            
            results.push(obj)
        }
        UserDetailsModel.insertMany(results).then(function(){
            res.status(200).json({message:"Successfully Uploaded!!!"})
        });
    }).catch(function(err){
        res.status(500).json({error:err})
    })
    
}

//Get Data
exports.getData = (req,res)=>{
    UserDetailsModel.find({},(err,items)=>{
        if(err){
            return res.status(500).json({error:err})
        }else{
            return res.status(200).json({message:items})
        }

    })
}

// Get Id(Param)
exports.getUserId =(req,res,next,id)=>{
    UserDetailsModel.findById(id).exec((err,user)=>{
        if(err || !user){
            return res.status(400).json({error:"UserId Not Found!!!"})
        }
        req.profile = user
        next();
    })
}

//Create Data
exports.createData =async(req,res)=>{

/*    const {agent,userType,policy_mode,producer,
    policy_number,premium_amount_written,premium_amount,policy_type,
    company_name,category_name,policy_start_date,policy_end_date,	
    csr,account_name,email,gender,firstname,city,account_type,	
    phone,address,state,zip,dob,primary,Applicant_ID,agency_id,	
    hasActive,ClientPolicy } = req.body */
    const data = req.body
    const newData = new UserDetailsModel(data)

    try{
        const dataInserted = await newData.save();
        return res.status(201).json({message:dataInserted})

    }catch(err){
        return res.status(400).json({error:err})
    }

}

//Update the data
exports.updateData = async(req,res)=>{

    const id = req.profile._id 
    const data=req.body;

    try{
        const updatedUserData = await UserDetailsModel.updateOne({_id:id},{$set:data})
        res.status(200).json({message:updatedUserData});
    }catch{
        res.status(400).json({message: error.message});
    }

}
//Delete the data
exports.deleteData =async(req,res)=>{
    try{
        const id = req.profile._id
        let deleteUser = await UserDetailsModel.findByIdAndRemove(id)
        return res.status(200).json({message:deleteUser})
    }catch(err){
        return res.status(400).json({error:"Not Able to find User"})
    }
   
}