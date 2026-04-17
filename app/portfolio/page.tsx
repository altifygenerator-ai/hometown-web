import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ProjectCard from "@/components/Projectcard";
export const metadata = {
  title: "Website Portfolio | Arkansas Web Design",
  description:
    "Examples of websites built for small businesses in Arkansas. Clean, modern, and designed to bring in customers.",
};
const projects = [
  {
    title: "Lockhart Solutions",
    category: "Solar Panels",
    images: ["/lockhart1.png","/lockhart2.png"],
    summary:
      "Created a site thats stylish and high converting for their business",
    tags: ["Solar Repair","SEO","Optimization"],
    live: {url: "https://lockhart-site.vercel.app/"},
  },
  {
    title: "Farm Ranch and Feed",
    category: "Livestock and garden store",
    images: ["/farmnfeed1.png","/farmnfeed2.png"],
    summary:
    "Created a stylish storefront for their local business",
    tags: ["Storefront","Farm and Feed","Organized"],
    live: {url: "https://farm-ranch-feed.vercel.app/"},
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
      "Built to make ordering easier with clear menu access and quick call buttons so customers don’t hesitate.",
    tags: ["Calls", "Orders", "Mobile Friendly"],
    live: { url: "https://hometown-pizza-site.vercel.app/" },
  },
  {
    title: "Inside Out Cleaning",
    category: "Service",
    images: ["/insideout.png"],
    summary:
      "Focused on turning visitors into leads with a simple layout and fast quote request form.",
    tags: ["Leads", "Quote Form", "Simple Layout"],
  },
  {
    title: "Little Cove Daycare",
    category: "Daycare",
    images: ["/littlecove.png"],
    summary:
      "Designed to build trust with parents by clearly showing programs, info, and an easy way to reach out.",
    tags: ["Trust", "Parents", "Clarity"],
    live: { url: "https://littlecoveearlylearning.com/" },
  },
  {
    title: "Glenwood Arkansas",
    category: "Tourism",
    images: ["/glenwood.png"],
    summary:
      "Organized local info into one clean place so visitors can quickly find things to do, places to go, and directions.",
    tags: ["Info Hub", "Visitors", "Local"],
    live: { url: "https://glenwoodarkansas.org/" },
  },
  {
    title: "Amity Arkansas",
    category: "Tourism",
    images: ["/amity.png"],
    summary:
      "Cleaned up scattered information into a simple site that makes it easier for people to explore the area.",
    tags: ["Local Info", "Simple", "Clear"],
    live: { url: "https://amityarkansas.org/" },
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Header />

      <main className="py-32">
        <div className="max-w-6xl mx-auto px-6">

          {/* INTRO */}
          <div className="max-w-md">
            <h1 className="text-4xl md:text-6xl">
              Selected work
            </h1>

            <p className="text-[var(--text-soft)] mt-4">
              Real websites built to bring in calls, leads, and customers
            </p>
          </div>

          {/* GRID */}
          <div className="mt-16 grid md:grid-cols-2 gap-10">
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}