import LocationPageTemplate from "@/components/locations/LocationPageTemplate";
import { northLittleRockLocation } from "@/data/locations/north-little-rock";

export const metadata = northLittleRockLocation.metadata;

export default function NorthLittleRockPage() {
  return <LocationPageTemplate data={northLittleRockLocation} />;
}