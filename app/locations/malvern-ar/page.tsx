import LocationPageTemplate from "@/components/locations/LocationPageTemplate";
import { malvernLocation } from "@/data/locations/malvern";

export const metadata = malvernLocation.metadata;

export default function MalvernPage() {
  return <LocationPageTemplate data={malvernLocation} />;
}