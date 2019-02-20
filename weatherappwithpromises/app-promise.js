const axios = require('axios')
const yargs = require('yargs')
const argv = yargs
  .options({
   a :{
     demand : true,
     alias : "address",
     describe : 'getting address',
     string : true
   }
})
  .help()
  .alias('help','h')
  .argv
var encodedaddress = encodeURIComponent(argv.address)
var geocodeurl = `http://www.mapquestapi.com/geocoding/v1/address?key={key}&location=${encodedaddress}`
axios.get(geocodeurl).then((response)=>{
  const lat = response.data.results[0].locations[0].latLng.lat
  const lng = response.data.results[0].locations[0].latLng.lng
  var wetherurl = 'https://api.forecast.io/forecast/{key}/'+lat+','+lng
  // console.log(response.data)
  console.log('country ',response.data.results[0].locations[0].adminArea1)
  console.log('state  ',response.data.results[0].locations[0].adminArea3)
  console.log('latitude :',response.data.results[0].locations[0].latLng.lat)
  console.log('longitude: ',response.data.results[0].locations[0].latLng.lng)
axios.get(wetherurl).then((respons)=>{
    console.log('tempararture is :',respons.data.currently.temperature);
    console.log('apparent tempararture is :',respons.data.currently.apparentTemperature);
})

})
.catch ((e)=>{
  console.log(e);
})
.catch((e)=>{
  console.log(e);
})
