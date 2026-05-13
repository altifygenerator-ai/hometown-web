import LocationPageTemplate from "@/components/locations/LocationPageTemplate";
import { hotSpringsLocation } from "@/data/locations/hot-springs";

export const metadata = hotSpringsLocation.metadata;

export default function HotSpringsPage() {
  return <LocationPageTemplate data={hotSpringsLocation} />;
}