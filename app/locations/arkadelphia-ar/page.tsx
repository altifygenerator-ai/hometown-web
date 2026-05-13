import LocationPageTemplate from "@/components/locations/LocationPageTemplate";
import { arkadelphiaLocation } from "@/data/locations/arkadelphia";

export const metadata = arkadelphiaLocation.metadata;

export default function ArkadelphiaPage() {
  return <LocationPageTemplate data={arkadelphiaLocation} />;
}