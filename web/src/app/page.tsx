import dynamic from "next/dynamic";
import { references } from "@/app/data/references";
import GalleryStatic from "@/app/components/GalleryStatic";

const GalleryClient = dynamic(() => import("@/app/components/GalleryClient"), {
  ssr: false,
  loading: () => null,
});
const HeroSection = dynamic(() => import("@/app/components/HeroSection"), {
  ssr: false,
  loading: () => null,
});

function HeroStatic({ count }: { count: number }) {
  return (
    <div className="mb-8 py-8">
      <h1 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold tracking-tight text-zinc-50">
        Design References
      </h1>
      <p className="mt-2 font-[family-name:var(--font-jetbrains-mono)] text-sm text-zinc-500">
        <span className="text-emerald-500">&gt;</span> {count} curated references from 1000+ sites
      </p>
      <div className="mt-4 inline-flex flex-wrap gap-x-3 gap-y-1 rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-2 font-[family-name:var(--font-jetbrains-mono)] text-xs text-zinc-500">
        <span><span className="text-emerald-400">{count}</span> refs</span>
        <span className="text-zinc-700">|</span>
        <span><span className="text-emerald-400">1000+</span> sites</span>
        <span className="text-zinc-700">|</span>
        <span><span className="text-emerald-400">27</span> constraints</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Mobile: static server-rendered, no client JS loaded */}
      <div className="block md:hidden">
        <HeroStatic count={references.length} />
        <GalleryStatic references={references} />
      </div>
      {/* Desktop: dynamically loaded interactive experience */}
      <div className="hidden md:block">
        <HeroSection referenceCount={references.length} />
        <GalleryClient references={references} />
      </div>
    </div>
  );
}
