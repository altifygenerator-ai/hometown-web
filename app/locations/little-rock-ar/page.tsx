import LocationPageTemplate from "@/components/locations/LocationPageTemplate";
import { littleRockLocation } from "@/data/locations/little-rock";

export const metadata = littleRockLocation.metadata;

export default function LittleRockPage() {
  return <LocationPageTemplate data={littleRockLocation} />;
}