import FixedLengthArray from "./FixedLengthArray";
export type MetadataType = "quantitative" | "categorical"

export default interface MetadataEntries {
    [propertyName: string]: {
        type: MetadataType,
        meta: FixedLengthArray<[number,number]> | string[]
    }
}