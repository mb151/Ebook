export class Book {
    photo: string;
    synopsis: string;
    like: number;
    unlike: number;

    constructor(public title: string, public author: string){
        
    }
}