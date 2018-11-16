function formatDate() {
  var d = new Date(),
  month = '' + (d.getMonth() + 1),
  day = '' + d.getDate(),
  year = d.getFullYear();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('-');
}

function sum(y, i) {
  for (i = 0; i < y.length; i++)
  {
   var y = y
   var z = y.slice(0,500)+ '...';
   return z
  }
}
