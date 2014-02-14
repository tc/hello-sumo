var five, board, left, right;
 
five = require("johnny-five");
 
board = new five.Board({port: "/dev/tty.usbmodem1411"});
 
board.on("ready", function() {
 
  left = new five.Servo(8);
  right = new five.Servo(13);
  left.center();
  right.center();

  this.repl.inject({
      left: left,
      right: right
  });

});
