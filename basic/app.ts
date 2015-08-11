
//enum
   enum Color {
    Red,
    Green,
    Blue
}
var col = Color.Green;
col = 25;
console.log(col);

enum door{
     close,
     open,
 }
 
console.log(door.open);

enum door1{
     close=1,
     open,
 }
 console.log(door1.open);
 
 door1['open']=50;
 
console.log(door1.open);
