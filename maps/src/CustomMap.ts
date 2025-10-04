export interface Mappable {
  location: { lat: number; lng: number };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap!: google.maps.Map; // Use ! to assert definite assignment
  private mapReady: Promise<void>;

  constructor(divId: string, options: google.maps.MapOptions = {}) {
    this.mapReady = this.initializeMap(divId, options);
  }

  private async initializeMap(
    divId: string,
    options: google.maps.MapOptions
  ): Promise<void> {
    const mapElement = document.getElementById(divId);
    if (!mapElement) {
      throw new Error(`Element with ID "${divId}" not found`);
    }

    const defaultOptions: google.maps.MapOptions = {
      zoom: 1,
      center: { lat: 0, lng: 0 },
      mapId: "YOUR_MAP_ID", // Replace with your actual Map ID
    };
    const finalOptions = { ...defaultOptions, ...options };

    const { Map } = (await google.maps.importLibrary(
      "maps"
    )) as google.maps.MapsLibrary;
    this.googleMap = new Map(mapElement, finalOptions);
  }

  public async addMarker(mappable: Mappable): Promise<void> {
    await this.mapReady;
    const { AdvancedMarkerElement } = (await google.maps.importLibrary(
      "marker"
    )) as google.maps.MarkerLibrary;
    const marker = new AdvancedMarkerElement({
      map: this.googleMap,
      position: mappable.location,
      title: mappable.markerContent(),
    });
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }

  public async setCenter(position: google.maps.LatLngLiteral): Promise<void> {
    await this.mapReady;
    this.googleMap.setCenter(position);
  }

  public async setZoom(zoom: number): Promise<void> {
    await this.mapReady;
    this.googleMap.setZoom(zoom);
  }
}
