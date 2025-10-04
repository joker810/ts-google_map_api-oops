import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

type CompanyShape = {
  companyName: string;
  companyCatchPhrase: string;
};
type Location = { lat: number; lng: number };
export class Company implements Mappable {
  public company: CompanyShape;
  public location: Location;
  public color: string;
  constructor() {
    this.company = {
      companyName: faker.company.name(),
      companyCatchPhrase: faker.company.catchPhrase(),
    };
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
    this.color = "green";
  }
  markerContent(): string {
    return `
    Company Name: ${this.company.companyName}
    CatchPhrase : ${this.company.companyCatchPhrase}
    `;
  }
}
