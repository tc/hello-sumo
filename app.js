var five, board, servo;
 
five = require("johnny-five");
 
board = new five.Board({port: "/dev/tty.usbmodem1411"});
 
board.on("ready", function() {
 
  servo = new five.Servo(10);

  this.repl.inject({
    servo: servo
  });

});
