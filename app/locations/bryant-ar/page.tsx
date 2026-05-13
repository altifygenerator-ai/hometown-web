import LocationPageTemplate from "@/components/locations/LocationPageTemplate";
import { bryantLocation } from "@/data/locations/bryant";

export const metadata = bryantLocation.metadata;

export default function BryantPage() {
  return <LocationPageTemplate data={bryantLocation} />;
}