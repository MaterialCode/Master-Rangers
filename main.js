const { fabric } = require("./fabric");

var canvas = new fabric.Canvas('myCanvas')

block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function player_update() {
    fabric.Image.fromURL("get_image", function (Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(150);
        block_image_object.scaleToHeight(140);
        block_image_object.set({
            top:block_y,
            left:block_x
        });
        canvas.add(block_image_object);

    });
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		new_image('rr1.png')
		console.log("r")
	}
	if(keyPressed == '71') // add appropriate keycode
	{
		new_image('gr.png')
		console.log("g")
	}
	if(keyPressed == '89') // add appropriate keycode
	{
		new_image('yr.png')
		console.log("r")
	}
	if(keyPressed == '80') // add appropriate keycode
	{
		new_image('pr.png')
		console.log("p")
	}
	if(keyPressed == '66') // add appropriate keycode
	{
		new_image('br.png')
		console.log("b")
	}
}

