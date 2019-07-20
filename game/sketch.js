
function setup() {
    var canvas = createCanvas(800,600);
    canvas.parent('sketch-holder');
    background(0);

    noLoop();
}


function draw() {
    movement();
    clear();
    background(0);

    fill(255);
    circle(humanPosX, humanPosY, 20);

    fill(255, 204, 0);
    circle(ghostPosX, ghostPosY, 20);
}
