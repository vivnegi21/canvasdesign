import UseCanvas from './UseCanvas'

const Canvas = props => {

    const { adText, CTA, template,img, hex, ...rest } = props
    
    const ref = UseCanvas(adText,CTA,hex,img,template);
    return (
        <canvas ref={ref} {...rest} />
    )
}
export default Canvas