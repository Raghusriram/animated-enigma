const request = require('request')

var geocodeaddress = (address, callback) =>{
  var encodedaddress = encodeURIComponent(address)


  request({
    url:`http://www.mapquestapi.com/geocoding/v1/address?key=dfApbuSb95GxYsXGcWO9PlKFV8rWCRsU&location=${encodedaddress}`,
    json:true
  },(error, response ,body) => {
    if (error){
      callback(undefined ,"unable to connect ")
    }
    else if (body.statuscode === 'ZERO RESULTS')
    {
      callback("unable to find address");
    }
    else
    {
      callback(undefined , {
        country:  body.results[0].locations[0].adminArea1,
    city :  body.results[0].locations[0].adminArea3,
    latitude : body.results[0].locations[0].latLng.lat,
    longitude : body.results[0].locations[0].latLng.lng
  });

}
})
}

module.exports.geocodeaddress = geocodeaddress
