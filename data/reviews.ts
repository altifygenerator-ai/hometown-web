export type ClientReview = {
  name: string;
  business?: string;
  source: string;
  rating: 5;
  text: string;
};

// These are the Google review texts that were verifiable from the existing
// indexed Hometown Web Services site during the 2026-09-03 SEO update.
// Keep this list factual; do not add or paraphrase reviews that have not been
// verified from a public source or supplied directly by the reviewer.
export const clientReviews: ClientReview[] = [
  {
    name: "Rebecca Turner",
    business: "Onward & Upward Services",
    source: "Google review",
    rating: 5,
    text: "Great service. Dependable. Very responsive and trustworthy. Any time we ask for change on the website he does it immediately. Does amazing work. Very thankful he is on our team at Onward & Upward Services.",
  },
  {
    name: "Isaiah ‘N Kat",
    source: "Google review",
    rating: 5,
    text: "Fast, reliable and affordable!",
  },
  {
    name: "Jake Shockley",
    source: "Google review",
    rating: 5,
    text: "Quick, and very helpful.",
  },
];
