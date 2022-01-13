//we need models for data in here recipe model we need data for title discription and ingredient img

export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;


    constructor(name:string, desc:string, imagePath:string){
        this.name=name;
        this.description=desc;
        this.imagePath=imagePath;
    }

}