import { useEffect, useRef } from 'react'
import { addCTA, addText, addUserImage, drawBackground, drawMask, drawPattern, drawStroke } from './Functions';

const UseCanvas = (adText, CTA, hex, img, template) => {
    const ref = useRef();
    if (adText === '') adText = template.caption.text;
    if (CTA === '') CTA = template.cta.text;

    useEffect(() => {
        const userImg = img
        const canvas = ref.current;
        const ctx = canvas.getContext('2d');
        // Draw Background With HEX
        drawBackground(ctx, canvas, hex);
        // Draw Design pattern
        drawPattern(ctx, canvas, template);
        // Add Mask
        drawMask(ctx, canvas, template);
        
        addUserImage(ctx, template.image_mask, userImg, () => {
            drawStroke(ctx, canvas, template.urls.stroke);
            addText(ctx, template.caption, adText);
            addCTA(ctx, template.cta, template.caption, CTA)
        })
    }, [adText, hex, CTA, img,template])
    return ref
}

export default UseCanvas
// ctx.globalCompositeOperation = "source-over";