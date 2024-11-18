import XLinks from "@/demo/x-links";

export default function Cta() {
  return (
    <>
      <div className="my-16 text-center">
        <h2 className="mb-3 text-3xl font-bold text-foreground">Got a component idea?</h2>
        <p className="mb-6 text-muted-foreground">Let us know on GitHub, and we'll add it!👇</p>
        <a
          className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm shadow-black/5 transition-shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          href="https://github.com/origin-space/originui/discussions/categories/suggestions"
          target="_blank"
        >
          <span className="text-primary-foreground">Send Suggestion</span>
        </a>
      </div>

      <XLinks />
    </>
  );
}