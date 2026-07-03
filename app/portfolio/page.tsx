import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ProjectCard from "@/components/Projectcard";
import Link from "next/link";

type PortfolioProject = {
  title: string;
  category: string;
  summary: string;
  tags: string[];
  videos?: string[];
  images?: string[];
  live?: {
    url: string;
  };
};

type PortfolioSectionData = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  projects: PortfolioProject[];
};

export const metadata = {
  title: "Website Portfolio | Arkansas Web Design & Local Business Websites",
  description:
    "A portfolio of websites, demos, and local business projects built by Hometown Web Services for Arkansas contractors, service businesses, tourism sites, restaurants, education, rentals, and small businesses.",
  alternates: {
    canonical: "https://www.hometownwebservicesar.com/portfolio",
  },
  openGraph: {
    title: "Website Portfolio | Hometown Web Services",
    description:
      "Selected website projects and demos built for local businesses, contractors, service companies, tourism sites, and Arkansas small businesses.",
    url: "https://www.hometownwebservicesar.com/portfolio",
    siteName: "Hometown Web Services",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hometown Web Services Portfolio",
      },
    ],
  },
};

const featuredProjects: PortfolioProject[] = [

  {
    title: "At Living Water Cabins",
    category: "Cabins and Direct Booking",
    videos: ["/videos/newatlivingwaterfinished.mp4"],
    summary:
      "A warm cabin rental website built to help guests understand the cabins, check availability, and book direct instead of only relying on Airbnb.",
    tags: ["Cabins", "Direct Booking", "OwnerRez"],
    live: { url: "https://atlivingwatercabins.com/" },
  },
  {
    title: "TrueClean Solutions",
    category: "Exterior Cleaning",
    videos: ["/videos/truecleanlive.mp4"],
    summary:
      "A bold service business site built for soft washing, exterior cleaning, storefront cleaning, and quote requests across South Georgia.",
    tags: ["Service Business", "Soft Washing", "Local SEO"],
    live: { url: "https://truecleansolutionsga.com/" },
  },
  {
    title: "Lakes Area R&R",
    category: "Local Business and Recreation",
    videos: ["/videos/lakesrnrlive.mp4"],
    summary:
      "A cleaner rebuild for a Minnesota recreation business, organizing rentals, local links, shopping, food, and visitor info into one easier site.",
    tags: ["Rebuild", "Local Business", "Tourism"],
    live: { url: "https://lakesarearandr.com/" },
  },
];

const liveClientProjects: PortfolioProject[] = [
  {
    title: "At Living Water Cabins",
    category: "Cabins and Direct Booking",
    videos: ["/videos/newatlivingwaterfinished.mp4"],
    summary:
      "A cabin rental site built around direct booking, clear cabin details, real photos, and an easier way for guests to check availability.",
    tags: ["Cabins", "Direct Booking", "Lodging"],
    live: { url: "https://atlivingwatercabins.com/" },
  },
  {
    title: "TrueClean Solutions",
    category: "Exterior Cleaning",
    videos: ["/videos/truecleanlive.mp4"],
    summary:
      "A polished service website built to make pressure washing, soft washing, concrete cleaning, and storefront cleaning easier to understand and request.",
    tags: ["Cleaning", "Service Business", "Quotes"],
    live: { url: "https://truecleansolutionsga.com/" },
  },
  {
    title: "Lakes Area R&R",
    category: "Recreation and Local Business",
    videos: ["/videos/lakesrnrlive.mp4"],
    summary:
      "A rebuild that organizes recreation rentals, local links, shopping, coffee, and visitor info into a cleaner, more useful site.",
    tags: ["Rebuild", "Recreation", "Local Guide"],
    live: { url: "https://lakesarearandr.com/" },
  },
  {
    title: "Arkansas Geek",
    category: "Computer Repair and Specialty Repair",
    videos: ["/videos/geek.mp4"],
    summary:
      "A two-lane website built to separate computer repair from air-cooled Volkswagen repair while keeping the brand simple and easy to follow.",
    tags: ["Computer Repair", "Specialty", "Simple Structure"],
    live: { url: "https://arkansasgeek.com/" },
  },
  {
    title: "Billhilly Lawncare",
    category: "Lawn Care",
    videos: ["/videos/billhillynew.mp4"],
    summary:
      "A clean lawn care website built around trust, service areas, recent work, reviews, and simple ways for customers to call or request a quote.",
    tags: ["Lawn Care", "Reviews", "Local SEO"],
  },
  {
    title: "Apex",
    category: "Commercial and Service Business",
    videos: ["/videos/apexlive.mp4"],
    summary:
      "A sharper business website layout built to make services easier to understand and give the company a stronger first impression online.",
    tags: ["Commercial", "Services", "Branding"],
  },
  
  {
    title: "Onward And Upward",
    category: "Landscaping",
    images: ["/onward1.png", "/onward2.png"],
    summary:
      "Turned their Facebook presence into a clean site where people can quickly see services and request a quote without all the back and forth.",
    tags: ["Services", "Quote Flow", "Local Business"],
    live: { url: "https://onwardsandupward.com/" },
  },
  {
    title: "Little Cove Daycare",
    category: "Daycare",
    images: ["/littlecove.png"],
    summary:
      "Designed to build trust with parents by clearly showing programs, enrollment details, important info, and an easy way to reach out.",
    tags: ["Trust", "Parents", "Clarity"],
    live: { url: "https://littlecoveearlylearning.com/" },
  },
  {
    title: "Lyn and Lilis Cleaning",
    category: "Cleaning Service",
    videos: ["/videos/lynnlilisdemo.mp4"],
    summary:
      "A clean, modern site designed to build trust and make it easy for customers to reach out for cleaning services.",
    tags: ["Cleaning", "Service", "Trust"],
    live: { url: "https://www.lynandlilistidyhouse.com/" },
  },
  {
    title: "Ozark Roofing",
    category: "Roofing and Construction",
    videos: ["/videos/seo-demo-2.mp4"],
    summary:
      "Contractor-style site focused on mobile experience, cleaner branding, and turning local traffic into actual calls for roofing and construction services.",
    tags: ["Roofing", "Construction", "Contractor"],
    live: { url: "https://ozarkroofing.online/" },
  },
  {
    title: "Richards Property Management",
    category: "Landscaping and Dirt Work",
    images: ["/rpm1.png", "/rpm2.png", "/rpm3.png"],
    summary:
      "A site built to support their online presence and bring in more calls for landscaping and dirt work services by showing work, explaining services, and making contact easy.",
    tags: ["Landscaping", "Dirt Work", "SEO"],
    live: { url: "https://richardslandmanagementllc.com/" },
  },
];

const contractorAndServiceDemos: PortfolioProject[] = [
   {
    title: "Mayo’s Remodeling",
    category: "Remodeling and Contractor",
    videos: ["/videos/mayosforcapcut.mp4"],
    summary:
      "A modern remodeling website demo built to show services, project photos, trust points, and easy quote requests for homeowners.",
    tags: ["Remodeling", "Contractor", "Quote Requests"],
  },
  {
    title: "Onyx Ridge Building Solutions",
    category: "Construction and Remodeling",
    videos: ["/videos/onyxridge.mp4"],
    summary:
      "A dark, rugged contractor site built around remodeling, new construction, plumbing, and strong trust-based service positioning.",
    tags: ["Construction", "Remodeling", "Contractor"],
    live: { url: "https://onyxridge.net/" },
  },
  {
    title: "Precision Turf Co.",
    category: "Lawn Care",
    videos: ["/videos/PrecisionTurfDemo.mp4"],
    summary:
      "A premium lawn care website demo built around a branded service program, strong visuals, clear offers, and local lead generation.",
    tags: ["Lawn Care", "Premium", "Lead Generation"],
  },
  {
    title: "Bennett Handyman Services",
    category: "Handyman and Home Services",
    videos: ["/videos/bennetdemo1.mp4"],
    summary:
      "A rugged handyman website demo built around real service work, clear contact options, licensed and insured trust points, and a stronger local contractor feel.",
    tags: ["Handyman", "Contractor", "Home Services"],
  },
  {
    title: "TG Services & Excavating",
    category: "Excavating and Dirt Work",
    videos: ["/videos/TGdemo.mp4"],
    summary:
      "A premium contractor website demo built around excavating, dirt work, land clearing, fencing, drainage, and real project photos.",
    tags: ["Excavating", "Dirt Work", "Contractor"],
  },
  {
    title: "Ozark Pond",
    category: "Outdoor and Property Services",
    videos: ["/videos/ozarkpond.mp4"],
    summary:
      "A clean local service website demo focused on outdoor property work, clear service presentation, and easy contact for quote requests.",
    tags: ["Outdoor Services", "Property", "Local Business"],
  },
  {
    title: "Jason’s Demo",
    category: "Local Business Demo",
    videos: ["/videos/jasons.mp4"],
    summary:
      "A local business website demo built to show services clearly, improve trust, and make the next step easier for visitors.",
    tags: ["Local Business", "Demo", "Services"],
  },
  {
    title: "Inside Out Cleaning",
    category: "Service",
    images: ["/insideout.png"],
    summary:
      "Focused on turning visitors into leads with a simple layout and fast quote request flow.",
    tags: ["Leads", "Quote Form", "Simple Layout"],
  },
];

const localBusinessAndRestaurantProjects: PortfolioProject[] = [
  {
    title: "Bright Path Learning Studio",
    category: "Education and Enrichment",
    videos: ["/videos/BrightPathDemo.mp4"],
    summary:
      "A calm, parent-friendly education site designed to explain class details, tuition, location, and enrollment options in a clean one-page layout.",
    tags: ["Education", "Parents", "Enrollment"],
  },
  {
    title: "Magnolias & Whiskey",
    category: "Boutique and Custom Orders",
    videos: ["/videos/magnoliasdemo.mp4"],
    summary:
      "A warm boutique-style website demo built around handmade products, gallery-style presentation, and a simple custom order flow.",
    tags: ["Boutique", "Custom Orders", "Gallery"],
  },
  {
    title: "Flavor-Licious",
    category: "Restaurant",
    images: ["/flavor1.png", "/flavor2.png"],
    summary:
      "Simple one-page setup so customers can check the menu, hours, and location fast instead of scrolling through posts.",
    tags: ["Menu", "Location", "Easy Access"],
  },
  {
    title: "Hometown Pizza",
    category: "Restaurant",
    images: ["/pizza.png"],
    summary:
      "Built to make ordering easier with clear menu access and quick call buttons so customers do not hesitate.",
    tags: ["Calls", "Orders", "Mobile Friendly"],
    live: { url: "https://hometown-pizza-site.vercel.app/" },
  },
  {
    title: "Farm Ranch and Feed",
    category: "Livestock and Garden Store",
    images: ["/farmnfeed1.png", "/farmnfeed2.png"],
    summary:
      "Created a stylish storefront-style website for a local farm, ranch, feed, and garden business.",
    tags: ["Storefront", "Farm and Feed", "Organized"],
    live: { url: "https://farm-ranch-feed.vercel.app/" },
  },
  {
    title: "Lockhart Solutions",
    category: "Solar Panels",
    images: ["/lockhart1.png", "/lockhart2.png"],
    summary:
      "Created a stylish, conversion-focused website for a solar repair and service business.",
    tags: ["Solar Repair", "SEO", "Optimization"],
    live: { url: "https://lockhart-site.vercel.app/" },
  },
];

const tourismAndGuideProjects: PortfolioProject[] = [
  {
    title: "Hot Springs Arkansas",
    category: "Tourism",
    videos: ["/videos/hotsprings.mp4"],
    summary:
      "A local tourism guide built to organize Hot Springs events, things to do, restaurants, lodging, and visitor information into one searchable guide.",
    tags: ["Tourism", "Events", "Local Guide"],
    live: { url: "https://www.hotspringsarkansas.org/" },
  },
  {
    title: "Glenwood Arkansas",
    category: "Tourism",
    images: ["/glenwood.png"],
    summary:
      "Organized local info into one clean place so visitors can quickly find things to do, places to go, local businesses, and directions.",
    tags: ["Info Hub", "Visitors", "Local"],
    live: { url: "https://glenwoodarkansas.org/" },
  },
  {
    title: "Amity Arkansas",
    category: "Tourism",
    images: ["/amity.png"],
    summary:
      "Cleaned up scattered information into a simple local guide site that makes it easier for people to explore the area.",
    tags: ["Local Info", "Simple", "Clear"],
    live: { url: "https://amityarkansas.org/" },
  },
  {
    title: "Buckstaff Bathhouse Concept",
    category: "Tourism and Historic Business",
    videos: ["/videos/BuckstaffConcept.mp4"],
    summary:
      "A concept demo focused on giving a historic Hot Springs business a cleaner, more modern web presence while keeping the local tourism feel intact.",
    tags: ["Tourism", "Historic", "Concept"],
  },
];

const toolsAndSpecialtyProjects: PortfolioProject[] = [
  {
    title: "Worksheet Editor",
    category: "SaaS Tool",
    images: ["/we1.png", "/we2.png", "/we3.png", "/we4.png"],
    summary:
      "A simple tool to help teachers create and organize worksheets with a clean interface focused on speed, usability, and productivity.",
    tags: ["SaaS", "Education", "Productivity"],
    live: { url: "https://editworksheets.org/" },
  },
];

const portfolioSections: PortfolioSectionData[] = [
  {
    id: "live-client-sites",
    eyebrow: "Live client work",
    title: "Live websites built for real businesses",
    text: "These are active websites or client projects built to support calls, trust, service clarity, and a stronger online presence.",
    projects: liveClientProjects,
  },
  {
    id: "contractor-service-demos",
    eyebrow: "Contractor & service demos",
    title: "Contractor-style demos and service business concepts",
    text: "These demos show how trades, home services, property services, and local service businesses can look more trustworthy online.",
    projects: contractorAndServiceDemos,
  },
  {
    id: "local-business-restaurants",
    eyebrow: "Local business sites",
    title: "Restaurants, shops, education, and local business concepts",
    text: "These builds focus on making key info easy to find: menus, hours, products, enrollment, services, orders, and contact options.",
    projects: localBusinessAndRestaurantProjects,
  },
  {
    id: "tourism-guides",
    eyebrow: "Tourism & local guides",
    title: "Tourism, city guide, and destination-style websites",
    text: "These projects organize local information, events, businesses, guides, and visitor content into cleaner searchable websites.",
    projects: tourismAndGuideProjects,
  },
  {
    id: "tools-specialty",
    eyebrow: "Tools & specialty builds",
    title: "Specialty projects and web-based tools",
    text: "A smaller group of projects built around custom functionality, productivity, or more app-like website experiences.",
    projects: toolsAndSpecialtyProjects,
  },
];

const allProjects: PortfolioProject[] = [
  ...featuredProjects,
  ...liveClientProjects,
  ...contractorAndServiceDemos,
  ...localBusinessAndRestaurantProjects,
  ...tourismAndGuideProjects,
  ...toolsAndSpecialtyProjects,
];

function PortfolioSection({
  id,
  eyebrow,
  title,
  text,
  projects,
}: PortfolioSectionData) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-[var(--border-soft)] py-20"
    >
      <div className="mb-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
        <div>
          <p className="section-kicker mb-4">{eyebrow}</p>
          <h2 className="text-balance text-3xl leading-tight md:text-5xl">
            {title}
          </h2>
        </div>

        <p className="max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
          {text}
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default function PortfolioPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Hometown Web Services Portfolio",
      url: "https://www.hometownwebservicesar.com/portfolio",
      description:
        "Selected website projects, live websites, demos, local business websites, contractor websites, tourism sites, and web tools built by Hometown Web Services.",
      isPartOf: {
        "@type": "WebSite",
        name: "Hometown Web Services",
        url: "https://www.hometownwebservicesar.com",
      },
      about: {
        "@type": "ProfessionalService",
        name: "Hometown Web Services",
        url: "https://www.hometownwebservicesar.com",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Website Portfolio Projects",
      itemListElement: allProjects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.title,
        description: project.summary,
      })),
    },
  ];

  return (
    <>
      <Header />

      <main className="overflow-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />

        <section className="relative overflow-hidden bg-depth px-6 pb-20 pt-32 md:pb-24 md:pt-40">
          <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[460px] w-[460px] rounded-full bg-[var(--accent)] opacity-[0.08] blur-[120px]" />

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-end">
              <div>
                <p className="section-kicker mb-5">Portfolio</p>

                <h1 className="text-balance max-w-4xl text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl">
                  Websites, demos, and local business builds.
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
                  A mix of live client work, demo concepts, tourism guides,
                  contractor websites, local business sites, and specialty tools.
                  The goal is the same across all of them: make the business
                  easier to trust, understand, and contact.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <Link href="/free-preview" className="btn btn-primary">
                    Get a free preview
                  </Link>

                  <Link href="/services" className="btn btn-secondary">
                    View services
                  </Link>
                </div>
              </div>

              <div className="premium-shell rounded-[2rem] p-6">
                <p className="text-sm font-medium text-[var(--text-main)]">
                  Portfolio organized by type
                </p>

                <div className="mt-5 grid gap-3">
                  {portfolioSections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="rounded-2xl border border-[var(--border-soft)] bg-white/70 px-4 py-3 text-sm text-[var(--text-soft)] hover:text-[var(--text-main)]"
                    >
                      {section.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-20">
              <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div>
                  <p className="section-kicker mb-4">Featured work</p>
                  <h2 className="text-balance max-w-3xl text-3xl leading-tight md:text-5xl">
                    A few builds that show the direction best.
                  </h2>
                </div>

                <p className="max-w-md text-[var(--text-soft)]">
                  These are good examples of the cleaner, more conversion-focused
                  direction I build toward.
                </p>
              </div>

              <div className="grid gap-10 md:grid-cols-3">
                {featuredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-6">
          {portfolioSections.map((section) => (
            <PortfolioSection
              key={section.id}
              id={section.id}
              eyebrow={section.eyebrow}
              title={section.title}
              text={section.text}
              projects={section.projects}
            />
          ))}
        </div>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[var(--text-main)] px-6 py-12 text-white md:px-10 md:py-16 lg:px-14">
              <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full bg-white/10 blur-[100px]" />

              <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div>
                  <p className="mb-5 text-sm text-white/60">
                    Like this direction?
                  </p>

                  <h2 className="text-balance max-w-2xl text-4xl leading-tight md:text-6xl">
                    I can put together a preview for your business too.
                  </h2>

                  <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                    Send your business name, Facebook page, current website if
                    you have one, and a few photos. I can build a working preview
                    so you can see the direction before committing.
                  </p>
                </div>

                <div className="flex flex-col gap-4 lg:items-start">
                  <Link
                    href="/free-preview"
                    className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                  >
                    Get a free preview
                  </Link>

                  <a
                    href="sms:8702604880"
                    className="text-sm text-white/65 transition hover:text-white"
                  >
                    Text 870-260-4880 →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}