import FixedLengthArray from "./FixedLengthArray";
export type MetadataType = "quantitative" | "categorical"
export type MetadataMetaType = FixedLengthArray<[number,number]> | string[];

export default interface MetadataEntries {
    [propertyName: string]: {
        type: MetadataType,
        meta: MetadataMetaType
    }
}