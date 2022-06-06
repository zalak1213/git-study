// Add your code here
var a = [];
var k = [];
var showarr = [];
function addbox() {
  var inp3 = document.getElementById('inp3').value;
  a.push(inp3);
  a.forEach(function (item) {
    showarr = '<br>' + item;
  });
  document.getElementById('1').innerHTML = document.getElementById('1').innerHTML+' '+ showarr;
}
var inp3 = document.getElementById('inp3');
function reverse() {
  var p = [];

  p = a.reverse();
  // var y = a.reverse(inp3.value);
  // var c = inp3.value.split('');

  // var z = c.reverse('inp3');

  p.forEach(function (item) {
    var c = item.split('');
    var y = c.reverse();
    var j = y.join('');
    k.push('<br>'+j);
  });
  // console.log(k);

  k.forEach(function(item){
    return item;
  });

  // document.getElementById('1').innerHTML = k;

  document.getElementById('1').innerHTML =  k;
}
function storefunction() {
  var inp1 = document.getElementById('inp1').value;
  var inp4 = Number(document.getElementById('getoption').value);
  //
  // window.localStorage.setItem("name",inp1);
  if (1 == inp4) {
    window.sessionStorage.setItem('name', inp1);
  } else {
    window.localStorage.setItem('name',inp1);
  }
}
function getvalue(){
  var inp2 = document.getElementById('inp2').value;
   var inp4 = Number(document.getElementById('getoption').value);
  if (1 == inp4) {
    alert(window.sessionStorage.getItem(inp2));
  } else {
    alert(window.localStorage.getItem(inp2));
    
  }

}