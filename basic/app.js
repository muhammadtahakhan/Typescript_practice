//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var col = Color.Green;
col = 25;
console.log(col);
var door;
(function (door) {
    door[door["close"] = 0] = "close";
    door[door["open"] = 1] = "open";
})(door || (door = {}));
console.log(door.open);
var door1;
(function (door1) {
    door1[door1["close"] = 1] = "close";
    door1[door1["open"] = 2] = "open";
})(door1 || (door1 = {}));
console.log(door1.open);
door1['open'] = 50;
console.log(door1.open);
//# sourceMappingURL=app.js.map