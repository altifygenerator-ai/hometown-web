import LocationPageTemplate from "@/components/locations/LocationPageTemplate";
import { bentonLocation } from "@/data/locations/benton";

export const metadata = bentonLocation.metadata;

export default function BentonPage() {
  return <LocationPageTemplate data={bentonLocation} />;
}