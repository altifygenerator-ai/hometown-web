type LocationTrustStripProps = {
  items: string[];
};

export default function LocationTrustStrip({ items }: LocationTrustStripProps) {
  return (
    <section className="border-y border-[var(--border-soft)] bg-[var(--bg-main)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-0 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item}
              className="border-b border-[var(--border-soft)] py-5 text-sm text-[var(--text-soft)] md:border-b-0 md:border-r md:last:border-r-0"
            >
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}