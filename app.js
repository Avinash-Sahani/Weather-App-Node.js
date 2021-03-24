
const geocode=require("./utils/geocode")
const forecast=require("./utils/forecast")

const location_input=process.argv[2]

if(location_input!=null)
{

geocode(location_input,(error,{latitude,longitude,location})=>{

if(error)
return console.log(error)


forecast(latitude,longitude,(error,forecastdata)=>{
if(error)
return console.log(error)

console.log(location)
console.log(forecastdata)



})


}
)
}
else
console.log("Please Input a Valid Location...")