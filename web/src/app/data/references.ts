export type Reference = {
  id: string;
  name: string;
  tags: string[];
  tone: "light" | "dark";
  inspired: string[];
  accent: string;
  bg: string;
  status: "verified" | "draft";
  description: string;
  sampleFile?: string;
  views: number;
  downloads: number;
};

export const references: Reference[] = [
  { id: '001', name: 'Clean Minimal', tags: ['minimal', 'monochrome'], tone: 'light', inspired: ['linear.app', 'cal.com'], accent: '#000000', bg: '#ffffff', status: 'verified', description: 'Sharp monochrome, extreme typography contrast, pill buttons', sampleFile: '001-clean-minimal.html', views: 342, downloads: 89 },
  { id: '002', name: 'Professional Blue', tags: ['professional', 'blue'], tone: 'light', inspired: ['stripe.com', 'vercel.com'], accent: '#2563eb', bg: '#ffffff', status: 'verified', description: 'Polished split hero, browser mockup, card elevation', sampleFile: '002-professional-blue.html', views: 521, downloads: 156 },
  { id: '003', name: 'Developer Terminal', tags: ['developer', 'code'], tone: 'dark', inspired: ['supabase.com', 'hono.dev'], accent: '#10b981', bg: '#09090b', status: 'verified', description: 'Terminal mockup, code snippets, emerald green accent', sampleFile: '003-developer-terminal.html', views: 478, downloads: 134 },
  { id: '004', name: 'Editorial Serif', tags: ['editorial', 'serif', 'blog'], tone: 'light', inspired: ['ghost.org', 'beehiiv.com'], accent: '#dc2626', bg: '#faf8f5', status: 'draft', description: 'Serif typography, cream background, magazine layout', sampleFile: '004-editorial-serif.html', views: 215, downloads: 47 },
  { id: '005', name: 'Fintech Trust', tags: ['fintech', 'enterprise'], tone: 'light', inspired: ['mercury.com', 'ramp.com'], accent: '#1e40af', bg: '#ffffff', status: 'draft', description: 'Navy palette, trust badges, financial dashboard mockup', sampleFile: '005-fintech-trust.html', views: 189, downloads: 62 },
  { id: '006', name: 'AI Product', tags: ['ai', 'product', 'dark'], tone: 'dark', inspired: ['anthropic.com', 'openai.com'], accent: '#6366f1', bg: '#0a0a0a', status: 'draft', description: 'Sophisticated dark, API playground, research-oriented', sampleFile: '006-ai-product.html', views: 367, downloads: 98 },
  { id: '007', name: 'Korean Modern', tags: ['korean', 'mobile', 'app'], tone: 'light', inspired: ['toss.im', 'daangn.com'], accent: '#3182f6', bg: '#ffffff', status: 'draft', description: 'Pretendard, phone mockup hero, bold Korean startup', sampleFile: '007-korean-modern.html', views: 294, downloads: 73 },
  { id: '008', name: 'Creative Portfolio', tags: ['portfolio', 'creative'], tone: 'light', inspired: ['readymag.com', 'spline.design'], accent: '#f43f5e', bg: '#fafafa', status: 'draft', description: 'Asymmetric layouts, large imagery, hover reveals', views: 156, downloads: 31 },
  { id: '009', name: 'Documentation', tags: ['docs', 'framework'], tone: 'light', inspired: ['react.dev', 'nextjs.org'], accent: '#2563eb', bg: '#ffffff', status: 'draft', description: 'Sidebar TOC, code blocks, clean reading layout', views: 203, downloads: 58 },
  { id: '010', name: 'SaaS Dashboard', tags: ['dashboard', 'app'], tone: 'light', inspired: ['posthog.com', 'attio.com'], accent: '#6366f1', bg: '#ffffff', status: 'draft', description: 'Sidebar nav, data cards, charts, app interface', views: 178, downloads: 42 },
  { id: '011', name: 'Dark Luxury', tags: ['luxury', 'dark', 'premium'], tone: 'dark', inspired: ['superhuman.com'], accent: '#d4a574', bg: '#050505', status: 'draft', description: 'Extreme whitespace, serif headings, gold accent, minimal', sampleFile: '011-dark-luxury.html', views: 412, downloads: 115 },
  { id: '012', name: 'E-commerce Landing', tags: ['ecommerce', 'product'], tone: 'light', inspired: ['shopify.com', 'gumroad.com'], accent: '#16a34a', bg: '#ffffff', status: 'draft', description: 'Product cards, size selectors, cart CTA', views: 145, downloads: 28 },
  { id: '013', name: 'Community Social', tags: ['community', 'social'], tone: 'light', inspired: ['disquiet.io'], accent: '#ef4444', bg: '#fafafa', status: 'draft', description: 'Avatar-heavy, activity feed, engagement metrics', views: 98, downloads: 19 },
  { id: '014', name: 'Mobile App Landing', tags: ['mobile', 'app', 'download'], tone: 'light', inspired: ['revolut.com', 'wise.com'], accent: '#0ea5e9', bg: '#ffffff', status: 'draft', description: 'Phone mockup centerpiece, app store badges, download CTA', sampleFile: '014-mobile-app-landing.html', views: 267, downloads: 71 },
  { id: '015', name: 'Enterprise B2B', tags: ['enterprise', 'b2b'], tone: 'light', inspired: ['workos.com', 'auth0.com'], accent: '#4f46e5', bg: '#ffffff', status: 'draft', description: 'Logo-heavy, case studies, security badges, demo CTA', views: 134, downloads: 36 },
];
