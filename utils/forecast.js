const request=require('request')


const forecast=(latitude,longitude,callback)=>
{


const url="https://api.darksky.net/forecast/e6af5b5feb891b272e18f5e2fc0370a6/"+latitude+","+longitude
request({url,json:true},(error,{body})=>{

if(error)
{
callback("Unable To Connect...Please Try Again",undefined)

}
else if(body.error)
{
    callback("The data not found....Please Try Any Other ")

}
else{

const weather_info=body.daily.data[0].summary+"."+" It is "+body.currently.temperature+" out and "+" There is "+body.currently.precipProbability+" % of rain."

    callback(undefined,weather_info
    )
}

}

)



}


module.exports=forecast




