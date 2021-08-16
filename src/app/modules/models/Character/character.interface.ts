import { CharacterInfo } from "./character_info.interface";
import { CharacterResult } from "./character_result.interface";

export interface Character {
    info: CharacterInfo,
    results: CharacterResult[]
}

