function takeANumber(string,name) {
  string.push(name);
  return 'Welcome, ' + string.slice(-1) + '. You are number ' + ( string.length) + ' in line.'
  
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length >0) {
    return 'Currently serving ' +  katzDeliLine.shift() + ".";
  } else {
    return 'There is nobody waiting to be served!'
  } 
  
}
function currentLine(line) {
  if (line.length >0) {
    var xy = []
   for(var i = 0; i < line.length; i++){
    xy.push(`${i+1}. ${line[i]}`)
   }
   return `The line is currently: ${xy.join(', ')}`;
   } else {return 'The line is currently empty.'}
  
}  

function 
