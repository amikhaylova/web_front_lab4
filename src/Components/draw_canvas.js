export function draw_canvas(ctx, width) {
    let center = width/2;
    let radius = 2/3*center;

    ctx.fillStyle = "#0099FF";
    ctx.strokeStyle = "black";

    //circle
    ctx.beginPath();
    ctx.arc(center, center, radius/2, 0, 1/2*Math.PI, false);
    ctx.lineTo(center, center);
    ctx.fill();

    //triangle
    ctx.closePath();
    ctx.beginPath();
    ctx.lineTo(1/3*center, center);
    ctx.lineTo(center, 1/3*center);
    ctx.lineTo(center, center);
    ctx.fill();
    ctx.closePath();

    //rectangle
    ctx.beginPath();
    ctx.lineTo(center, 1/3*center);
    ctx.lineTo(center+radius/2, 1/3*center);
    ctx.lineTo(center+radius/2, center);
    ctx.lineTo(center, center);
    ctx.fill();
    ctx.closePath();

    //draw axis
    ctx.strokeStyle = "black";
    ctx.lineWidth = 0.5;

    ctx.beginPath();
    ctx.moveTo(center, 0);
    ctx.lineTo(center, 2*center);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, center);
    ctx.lineTo(2*center, center);
    ctx.closePath();
    ctx.stroke();

}

