var five, board, left, right;
 
five = require("johnny-five");
 
board = new five.Board({port: "/dev/tty.usbmodem1411"});
 
board.on("ready", function() {
 
  left = new five.Servo({pin: 8, type: "continuous"});
  right = new five.Servo({pin: 13, type: "continuous"});
  left.center();
  right.center();

  this.repl.inject({
      left: left,
      right: right
  });

});
