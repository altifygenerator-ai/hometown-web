import LocationPageTemplate from "@/components/locations/LocationPageTemplate";
import { glenwoodLocation } from "@/data/locations/glenwood";

export const metadata = glenwoodLocation.metadata;

export default function GlenwoodPage() {
  return <LocationPageTemplate data={glenwoodLocation} />;
}