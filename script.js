
var x = [];
var medical = [];
var eng = [];
var bsc = [];
function submitfunction() {
  var inp1 = document.getElementById('inp1').value.trim();
  var inp2 = document.getElementById('inp2').value.trim();
  var inp3 = document.getElementById('inp3').value.trim();
  var inp4 = Number(document.getElementById('inp4').value.trim());
  var inp5 = inp1 + ' ' + inp2 + ' ' + inp3;
  if (
    inp1.length == 0 ||
    inp2.length == 0 ||
    inp3.length == 0 ||
    inp4.length == 0
  ) {
    alert('fill the all input');
  } else {
    if (inp4 >= 90 && inp4 != 100) {
      if (medical.length < 10) {
        medical.push(inp5+'<br>');
        x.push(inp5);
        document.getElementById('1').innerHTML = medical;
      } else {
        alert('medical is full');
      }
    } else if (inp4 < 90 && inp4 >= 70) {
      if (eng.length < 10) {
        eng.push(inp5+'<br>');
        x.push(inp5);
        document.getElementById('2').innerHTML = eng;
      } else {
        alert('engineering seats full');
      }
    } else if (inp4 < 70 && inp4 >= 35) {
      if (bsc.length < 10) {
        bsc.push(inp5+'<br>');
        x.push(inp5);
        document.getElementById('3').innerHTML = bsc;
      } else {
        alert('bsc seats full');
      }
    } else {
      alert('better next time');
    }
  }
}
function findfunction() {
  
  var inp6 = document.getElementById('flt').value;
  if (x.indexOf(inp6) != -1) {
    alert('student is register');
  } else {
    alert('absent');
  }
}
function withdraw() {
  var inp7 = document.getElementById('wdw').value+'<br>';
  if (medical.indexOf(inp7) != -1) {
    medical.splice(medical.indexOf(inp7), 1);
    document.getElementById('1').innerHTML = medical;
  } else if (eng.indexOf(inp7) != -1) {
    eng.splice(eng.indexOf(inp7), 1);
    document.getElementById('2').innerHTML = eng;
  } else if (bsc.indexOf(inp7) != -1) {
    bsc.splice(bsc.indexOf(inp7), 1);
    document.getElementById('3').innerHTML = bsc;
  } else {
    alert('not found');
  }
}
