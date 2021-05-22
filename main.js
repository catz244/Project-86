var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

blockImage_width = 30;
blockImage_height = 40;

player_objects = "";
blockImage_object = "";

function player_update() {
    fabric.Image.fromURL(
        "player.png",
        function (Img) {
            player_object = Img;
            player_object.scaleToWidth(150);
            player_object.scaleToHeight(130);
            player_object.set({
                top: player_y, left: player_x
            });
            canvas.add(player_object);
        }
    );
}

function new_image_update(get_image) {
    fabric.Image.fromURL(
        get_image,
        function (Img) {
            blockImage_object = Img;
            blockImage_object.scaleToWidth(blockImage_width);
            blockImage_object.scaleToHeight(blockImage_height);
            blockImage_object.set({
                top: player_y, left: player_x
            });
            canvas.add(blockImage_object);
        }
    );
}