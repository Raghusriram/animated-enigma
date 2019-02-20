const geocode = require('./geocode')
const temp = require('./temperature')
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
  console.log(typeof(argv));
  geocode.geocodeaddress(undefined ,()=>{
    // console.log("printed location");
  })
geocode.geocodeaddress((argv.address), (err, results)=>{
  if (err){
    console.log("errormessage");
  }else{
    console.log(JSON.stringify(results,undefined,2));
    // console.log(results.latitude,results.longitude);
  }
temp.temp(results.latitude,results.longitude,(errormessage,results) =>{
    if (errormessage)
    console.log("weather report is not available");
    else {
      console.log(JSON.stringify(results,undefined,2));

    }
  }
)
})
