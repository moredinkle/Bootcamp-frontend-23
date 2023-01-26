
export class Pokemon {
    id: number;
    name: string;
    base_experience: number;
    weight: number;
    
    constructor(id: number, name: string, base_experience: number, weight: number){
        this.id = id;
        this.name = name;
        this.base_experience =base_experience;
        this.weight = weight;
    }
}