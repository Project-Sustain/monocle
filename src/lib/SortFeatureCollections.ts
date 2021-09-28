import area from "@turf/area";

const featureToArea = (feature: GeoJSON.Feature): number => {
    if(['Polygon', 'MultiPolygon'].includes(feature.geometry.type)){
        return area(feature);
    }
    return -1;
}


export default function SortFeatureCollection(featureCollection: GeoJSON.Feature[]){
    return featureCollection.sort((featureA,featureB) => {
        return featureToArea(featureB) - featureToArea(featureA)
    })
}