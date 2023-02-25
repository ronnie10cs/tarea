function predload(){

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.position(150,200);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    conte = "";
}
function draw(){
    image(video,0,0,300,300);
    tint(conte);
}
function filter_tint(){
conte = document.getElementById("color_name").value;
}
function take_snapshot(){
    save("snap.png");
}