export const locations = {
  "hot-springs-ar": {
    city: "Hot Springs",
    state: "AR",
    title: "Web Design in Hot Springs, AR",
    description:
      "Simple websites for Hot Springs contractors and small businesses that need more calls, better Google visibility, and an easier way for customers to reach out.",
  },

  "arkadelphia-ar": {
    city: "Arkadelphia",
    state: "AR",
    title: "Web Design in Arkadelphia, AR",
    description:
      "Clean websites for Arkadelphia contractors and small businesses that want to look more professional and turn visitors into calls.",
  },

  "glenwood-ar": {
    city: "Glenwood",
    state: "AR",
    title: "Web Design in Glenwood, AR",
    description:
      "Simple websites for Glenwood businesses that need a better online presence, clearer services, and easier quote requests.",
  },

  "malvern-ar": {
    city: "Malvern",
    state: "AR",
    title: "Web Design in Malvern, AR",
    description:
      "Websites for Malvern contractors and small businesses built to help customers find you, trust you, and contact you faster.",
  },
} as const;

export type LocationSlug = keyof typeof locations;