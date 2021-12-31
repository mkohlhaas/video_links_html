var x = document.querySelectorAll("a");
var myarray = []
for (var i=0; i<x.length; i++){
  var cleanlink = x[i].href;
  myarray.push([cleanlink]);
};
function make_table() {
  var table = '<table><thead><th>Links</th></thead><tbody>';
  for (var i=0; i<myarray.length; i++) {
    table += '<tr><td>'+myarray[i][0]+'</td></tr>';
  };
  var w = window.open("");
  w.document.write(table);
}
make_table()

in vim:
/[0-9]\{8\}
:v//d
:sort u
