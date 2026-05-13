import LocationPageTemplate from "@/components/locations/LocationPageTemplate";
import { maumelleLocation } from "@/data/locations/maumelle";

export const metadata = maumelleLocation.metadata;

export default function MaumellePage() {
  return <LocationPageTemplate data={maumelleLocation} />;
}