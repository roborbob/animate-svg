
function createAttributeArray(object){
    let attributesArray = []
    for (const a of object.attributes) {
        attributesArray.push(a.name)
    }
    return attributesArray
}


export default function getAttributes(svg) {
    let svgAttributes = createAttributeArray(svg)    
    let childNodeAttributes = []
    if (svg.hasChildNodes) {
        for(let i = 0; i < svg.childNodes.length; i++) {
            if(svg.childNodes[i]?.nodeName !== '#text') {
                svg?.childNodes[i]?.setAttribute("class", `child ${i}`)
                childNodeAttributes.push(createAttributeArray(svg.childNodes[i]))
            }
        }
    }

    return [svg,svgAttributes,childNodeAttributes];
}
