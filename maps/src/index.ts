/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

async function initMap(): Promise<void> {
  const customMap = new CustomMap("map", {
    zoom: 1,
    center: { lat: -25.344, lng: 131.031 },
    mapId: "YOUR_MAP_ID", // Replace with your actual Map ID
  });

  const user = new User();
  const company = new Company();

  await customMap.addMarker(user);
  await customMap.addMarker(company);
}

initMap();
