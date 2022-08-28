import { randomUUID } from "node: crypto";
import { CharacterEntity } from "./character";

export class UserEntity {
    constructor(user){
    this.id = user.id ?? randomUUID();
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.image = user.image;
    this.character = user.character ?? [];
    };

    validate(){
        if (!this.name || !this.email || !this.password || !this.image){
            throw new Error("Invalid user");   
        }
    }

    addCharacter(character){
        const newCharacter = new CharacterEntity(character, this.id);
        this.character.push(newCharacter.getCharacter());

    }
};