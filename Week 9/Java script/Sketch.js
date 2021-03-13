function setup()
{
    createCanvas(600, 800)
}

function draw()
{
    background(120,45,78);
    fill(255,222,173);
    circle(300,400,500);
    ellipseMode(RADIUS);
    fill(102,51,0);
arc(300, 250, 200, 100, 172.75,0);

fill(255,255,255);
arc(400, 350, 30, 10, 0, PI); 
arc(400, 350, 30, 10, 172.75,0);   

fill(102,51,0);
ellipse(400, 350, 10, 10);
ellipseMode(CENTER);
fill(0, 0, 0);
ellipse(400, 350, 10, 10);

fill(255,255,255);
arc(200, 350, 60, 20, 0, PI);
arc(200, 350, 60, 20, 172.75,0);  

fill(102,51,0);
ellipse(200, 350, 20, 20);
ellipseMode(CENTER);
fill(0, 0, 0);
ellipse(200, 350, 10, 10);



fill(255,255,255);
arc(300, 500, 200, 30, 0, PI);
arc(300, 500, 200, 30, 172.75,0); 

line (200, 500, 400, 500);

noFill();
stroke(0, 0, 0);
bezier(300, 350, 325, 440, 300, 450, 280, 450);

fill(102,51,0);
triangle(250, 575, 350, 575, 300, 600);
}

