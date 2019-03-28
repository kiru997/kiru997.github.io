const uuidv4 = require("uuid/v4");
export class Framework {
  id: string;
  name: string;
  image: string;
  puslisher: string;
  constructor(name: string = "", image: string = "", puslisher: string = "") {
    this.id = uuidv4();
    this.name = name;
    this.image = image;
    this.puslisher = puslisher;
  }
}
