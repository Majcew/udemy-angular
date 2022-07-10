import { Ingredient } from "../shared/ingredient.model";

export interface Recipe {
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[];
}

/*
export class Recipe{
    public name:string;
    public description:string;
    public imagePath:string;

    constructor(name:string, description:string, imagePath:string){
        this.name = name
        this.description = description
        this.imagePath = imagePath
    }
}
*/
