var curre=0;
var cloe=-1;

function getFinalOpenedDoors(numDoors) {
  var arre=[];
for(var i=1; i<=numDoors;i++){
twoe(i,numDoors,arre);

}
return arre;}
function twoe(nue,need,yarr){
  cloe=-1;
  for(var j=1; j<=need;j++){
    //console.log(nue%j);
if(nue%j==0){
cloe*=-1;
}
}
if (cloe==1){yarr.push(nue)}
}
console.log(getFinalOpenedDoors(100));
