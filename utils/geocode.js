const request=require("request")


const geocodes=(address,callback)=>{
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoiYXZpbmFzaHNhaGFuaTE0Nzg5IiwiYSI6ImNrOWp4NTlwdDAycnQzbW82d3ZjMmMwangifQ.Jt5hkcijZi999as2c5qjWw"

    
    
    request({url,json:true},(error,{body})=>{

    
        if(error){
            callback("Unable To Connect",undefined)
        }
        else if(body.features.length===0)
        {
callback("Unable to find address..Try any other",undefined)
        }
        else{
            callback(undefined,{
latitude:body.features[0].center[1],
longitude:body.features[0].center[0],
location:body.features[0].place_name

            })
        }
        
        
        })




}






module.exports=geocodes


