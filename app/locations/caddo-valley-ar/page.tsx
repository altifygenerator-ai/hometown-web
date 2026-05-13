import LocationPageTemplate from "@/components/locations/LocationPageTemplate";
import { caddoValleyLocation } from "@/data/locations/caddo-valley";

export const metadata = caddoValleyLocation.metadata;

export default function CaddoValleyPage() {
  return <LocationPageTemplate data={caddoValleyLocation} />;
}