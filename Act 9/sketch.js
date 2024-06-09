var table;

function preload() {
    table = loadTable("UAE Weather1.csv", "csv", "header");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
}

function draw() {
    background(255); 
    push();
    textSize(18);
    textStyle(BOLD);
    text('UAE Weather for June 9 to 15', 50, 50);
    textSize(14);
    textStyle(NORMAL);
    var data = table.getRow(0).arr;
    translate(0, 275);
    for (var i = 0; i < table.getColumnCount(); i++) {
        var rectHeight = map(data[i], 38, 42, 50, 200); 
        translate(50, 0); 
        var lerpAm = map(data[i], 38, 42, 0, 1);
        var lerpCol = lerpColor(color(64, 126, 214), color(237, 40, 59), lerpAm);
        fill(lerpCol);
        textAlign(CENTER);
        rect(0, 0, 40, -rectHeight); // Draw the rectangle
        text(data[i], 20, -rectHeight - 10); // Display the 
        fill(0);
        text(table.columns[i], 20, 20); // Display the day of 
    }
    pop();
}
