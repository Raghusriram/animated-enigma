const request  = require('request')

const temp = (lat, lon, callback) => {
    request({
      url : 'https://api.forecast.io/forecast/95992e638e24d82301303414abdd4686/'+lat+','+lon,
      json :true
    },
      (error , response, body) =>{
        if (error)
        {
          callback("unable to reach server");
        }
        else
        callback(undefined, {

          temperature : body.currently.temperature,
          apparentTemperature : body.currently.apparentTemperature
        })
      }
    )
}
// temp()
module.exports.temp = temp
