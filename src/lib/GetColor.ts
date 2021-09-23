import { MetadataMetaType } from "../types/MetadataEntries";
import createColormap from "colormap";
import FixedLengthArray from "../types/FixedLengthArray";

const nshades = 100;
const colorGrad = createColormap({
    colormap: 'jet',
    nshades,
    format: 'hex',
    alpha: 1
})

export default function GetColor(meta: MetadataMetaType, value: string | number) {
    if(typeof value === 'string') {
        const colorGrad = createColormap({
            colormap: 'rainbow-soft',
            nshades: meta.length,
            format: 'hex',
            alpha: 1
        })
        const metaTyped = meta as string[]
        const indexOfValue = metaTyped.indexOf(value as string)
        if(indexOfValue !== -1) {
            return colorGrad[indexOfValue]
        }
    }
    else {
        const metaTyped = meta as FixedLengthArray<[number,number]>;
        return colorGrad[Math.max(Math.min(Math.floor(nshades * (value - metaTyped[0]) / (metaTyped[1] - metaTyped[0])), nshades - 1), 0)]
    }
}