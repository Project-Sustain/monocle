import FixedLengthArray from "./FixedLengthArray";

export default interface MetadataEntry {
    propertyName: string,
    type: "quantitative" | "categorical",
    meta: FixedLengthArray<[number,number]> | string[]
}