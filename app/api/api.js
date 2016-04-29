'use strict';
module.exports = function (app) {
	app.get("/:query",function (req, res) {
			res.send(JSON.stringify(timeFun(req.params.query)));
				});
};

function timeFun(str) {
  var unix;
  var natural;
  if(str.match("[a-zA-Z]")){
   if (isDate(str)) {
  unix = dateToUnix(str);
  natural = unixToDate(unix);
  return {unix: unix , natural: natural};
   }
   else {return {unix: null, natural: null}; 
   }
  }
  else if(/^\d+$/.test(str) && str.length < 13){
    unix = parseInt(str,10);
    natural = unixToDate(str);
    return {unix: unix , natural: natural};
  }
  else {return {unix: null, natural: null}; 
  }
}

function dateToUnix(str){
  var myDate = new Date(str); 
 return myDate.getTime()/1000.0;
}

function unixToDate(unixStr){
  var a = new Date(unixStr * 1000);
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = month + ' ' + date + ', ' + year ;
  return time;
}

//date validation
var isDate = function(input) {
        var status = false;
        if (!input || input.length <= 0) {
          status = false;
        } else {
          var result = new Date(input);
          if (result == 'Invalid Date') {
            status = false;
          } else {
            status = true;
          }
        }
        return status;
      };
