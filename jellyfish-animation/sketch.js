let angle = 0;
let speed = 0.04;
let paused = false;

function setup() {

    createCanvas(600, 400);

    angleMode(RADIANS);
}

function draw() {

    background(5, 35, 65);

    noFill();
    stroke(150, 220, 255, 150);
    strokeWeight(2);

    circle(80, 100, 15);
    circle(500, 150, 20);
    circle(450, 320, 12);
    circle(120, 300, 18);

    let jellyX = width / 2;
    let jellyY = 180 + sin(angle) * 25;

    let bodyHeight = 60 + sin(angle) * 10;

    stroke(180, 210, 255);
    strokeWeight(4);
    noFill();

    for (let i = 0; i < 5; i++) {

        let sway = sin(angle + i * 0.6) * 18;

        let startX = jellyX - 35 + i * 17;
        let endX = startX + sway;

        bezier(
            startX, jellyY + 15,
            startX - sway, jellyY + 45,
            endX + sway, jellyY + 75,
            endX, jellyY + 100
        );
    }

    noStroke();
    fill(170, 120, 255, 220);

    arc(
        jellyX,
        jellyY,
        110,
        bodyHeight,
        PI,
        TWO_PI
    );

    fill(255);

    circle(jellyX - 18, jellyY - 10, 9);
    circle(jellyX + 18, jellyY - 10, 9);

    fill(20, 20, 50);

    circle(jellyX - 18, jellyY - 10, 4);
    circle(jellyX + 18, jellyY - 10, 4);

    if (!paused) {
        angle += speed;
    }

    fill(255);
    noStroke();
    textAlign(CENTER);

    textSize(20);
    text("DANCING JELLYFISH", width / 2, 30);

    textSize(13);
    text("Press SPACE to Pause / Resume", width / 2, 375);
}

function keyPressed() {

    if (key === ' ') {
        paused = !paused;

        return false;
    }
}
