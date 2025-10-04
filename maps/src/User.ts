import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

type locationShape = { lat: number; lng: number };
export class User implements Mappable {
  public name: string;
  public location: locationShape;
  public color: string;
  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
    this.color = "red";
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
