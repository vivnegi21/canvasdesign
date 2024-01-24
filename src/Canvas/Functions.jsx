
/////////////////////////////////////////////////////////////BackGround Color Function/////////////////////////////////////////////////////
export function drawBackground(ctx, canvas, hex) {
    ctx.fillStyle = hex;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}


//////////////////////////////////////////////////////////////////ADD Call TO ACTION ///////////////////////////////////////////////////////

export function addCTA(ctx,cta,caption,CTA) {
    const width = ctx.measureText(CTA).width+40;
    const height= caption.font_size + 30;
    const x = cta.position.x;
    const y = cta.position.y;
    const radius = 30;
    ctx.fillStyle = cta.background_color;
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);ctx.closePath();
    ctx.fill();
    // ctx.fillRect(cta.position.x, cta.position.y, ctx.measureText(CTA).width + 40, caption.font_size + 30);

    ctx.font = `${caption.font_size}px Arial`;
    ctx.fillStyle = cta.text_color;
    ctx.fillText(CTA, cta.position.x +  20, cta.position.y + caption.font_size+10);

}

//////////////////////////////////////////////////////////////////ADD Text /////////////////////////////////////////////////////////////////

export function addText(ctx,caption,adText) {

    ctx.font = `${caption.font_size}px Arial`;
    ctx.fillStyle = caption.text_color;
    // Split text into lines based on max_characters_per_line
    const words = adText.split(' ');
    let line = '';
    let lines = [];

    words.forEach(word => {
        const testLine = line + word + ' ';
        if (line.length >= caption.max_characters_per_line) {
            lines.push(line);
            line = word + ' ';
        } else {
            line = testLine;
        }
    });

    lines.push(line);

    // Draw each line of text
    lines.forEach((line, index) => {
        const y = caption.position.y + (index + 1) * (caption.font_size + 20);
        ctx.fillText(line, caption.position.x, y);
    });

}
//////////////////////////////////////////////////////////////////ADD STROKES AFTER IMAGE //////////////////////////////////////////////////////

export function drawStroke(ctx, canvas,stroke) {
    const maskStrokeImg = new Image();
    maskStrokeImg.src = stroke;
    maskStrokeImg.onload = () => {
        ctx.drawImage(maskStrokeImg, 0, 0, canvas.width, canvas.height);
    }
}

export function addUserImage(ctx,image_mask,userImage,callback) {
    const userImg = new Image();
    userImg.src = userImage;
    // set image to cover
    userImg.style.objectFit = "cover";
    userImg.onload = () => {
        ctx.drawImage(userImg, image_mask.x, image_mask.y, image_mask.width, image_mask.height);
        callback();

    }
}


//////////////////////////////////////////////////////////////////MASK LAYERING //////////////////////////////////////////////////////

export function drawMask(ctx, canvas, template) {
    const maskImg = new Image();
    maskImg.src = template.urls.mask;
    maskImg.onload = () => {
        ctx.drawImage(maskImg, 0, 0, canvas.width, canvas.height);
    }
}

//////////////////////////////////////////////////////////////////PATTERN LAYERING //////////////////////////////////////////////////////

export function drawPattern(ctx, canvas, template) {
    const patternImg = new Image();

    patternImg.src = template.urls.design_pattern;
    patternImg.onload = () => {

        const pattern = ctx.createPattern(patternImg, "repeat");
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

    }
}