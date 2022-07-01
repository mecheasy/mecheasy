var peb=[];
function quickSort(array) {
  console.log(array);
  // Only change code below this line
  var top=[];
  var bot=[];

  if(array.length==1){
    
    peb.push(array[0]);
    console.log("bottom "+array[0]+" got pushed, peb is now "+peb);
    return array[0];
  }
  else if (array.length==0){
    return;
  }
var mid=Math.ceil(array.length/2-1);
//console.log(array.length+" length "+mid+" midpt");
for(var i=0;i<mid;i++){
  //console.log(i+"d" + (array.length-i-1));
  if(array[i]>=array[mid]){
top.push(array[i]);

  }
  else{
    bot.push(array[i])
  }
  if(array[array.length-i-1]>=array[mid]){
top.push(array[array.length-i-1]);
  }
  else{bot.push(array[array.length-i-1])}
}
if(array.length!=2){
 bot.push(array[mid]); 
}

if(array.length%2==0){
  if(array[mid+1]>=array[mid]){
top.push(array[mid+1])
if(array.length==2){bot.push(array[mid])};//top.push(array[mid+1])
  }
  else if(array.length!=2){bot.push(array[mid+1])}
  else{bot.push(array[mid+1]);top.push(array[mid])}
}
//console.log(bot+" is the bottom "+top+" is the top ");

quickSort(bot);

quickSort(top);

  return peb;
  // Only change code above this line
}
//console.log(quickSort([7,3,5,4,6,11,66,1]));
var arr=[1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]
//console.log(quickSort(arr).length+" is quicksort's length and "+arr.length)
//quickSort(arr);
//console.log(peb)
