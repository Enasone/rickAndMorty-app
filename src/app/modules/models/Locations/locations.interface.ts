import { LocationInfo } from "./locations_info.interface";
import { LocationResult } from "./locations_result.interface";

export interface Locations {
    info: LocationInfo,
    results: LocationResult[]
}