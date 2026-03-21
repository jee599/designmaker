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
  { id: '001', name: 'Clean Minimal', tags: ['minimal', 'monochrome', 'saas'], tone: 'light', inspired: ['linear.app', 'cal.com'], accent: '#000000', bg: '#ffffff', status: 'verified', description: 'Gradient shimmer text, animated dividers, number tickers, hover reveals', sampleFile: '001-clean-minimal.html', views: 342, downloads: 89 },
  { id: '002', name: 'Professional Blue', tags: ['professional', 'blue', 'saas'], tone: 'light', inspired: ['stripe.com', 'vercel.com'], accent: '#2563eb', bg: '#ffffff', status: 'verified', description: 'Glass nav, bento features, mockup animations, gradient CTA', sampleFile: '002-professional-blue.html', views: 521, downloads: 156 },
  { id: '003', name: 'Developer Terminal', tags: ['developer', 'code', 'dark'], tone: 'dark', inspired: ['supabase.com', 'hono.dev'], accent: '#10b981', bg: '#09090b', status: 'verified', description: 'Typing animation, matrix canvas, network viz, live metrics', sampleFile: '003-developer-terminal.html', views: 478, downloads: 134 },
  { id: '006', name: 'AI Product', tags: ['ai', 'product', 'dark', 'typing'], tone: 'dark', inspired: ['anthropic.com', 'openai.com'], accent: '#6366f1', bg: '#0a0a0a', status: 'verified', description: 'Character-by-character code typing, syntax highlighting, simultaneous animations', sampleFile: '006-ai-product.html', views: 567, downloads: 198 },
  { id: '007', name: 'Korean Modern', tags: ['korean', 'mobile', 'app', 'toss'], tone: 'light', inspired: ['toss.im', 'daangn.com'], accent: '#3182f6', bg: '#ffffff', status: 'verified', description: 'Pretendard, phone mockup with check-off animation, kanban board, doc editor', sampleFile: '007-korean-modern.html', views: 494, downloads: 173 },
  { id: '014', name: 'Mobile App Landing', tags: ['mobile', 'app', 'download'], tone: 'light', inspired: ['revolut.com', 'wise.com'], accent: '#0ea5e9', bg: '#ffffff', status: 'verified', description: 'Phone notification popups, screen transitions, bento app screens, star fill', sampleFile: '014-mobile-app-landing.html', views: 367, downloads: 121 },
  { id: '019', name: 'Space Data Viz', tags: ['space', 'dataviz', 'dark', 'hud'], tone: 'dark', inspired: ['eyes.nasa.gov'], accent: '#3b82f6', bg: '#030308', status: 'verified', description: 'Star field, radar sweep, HUD panels, cycling data readouts, timeline', sampleFile: '019-space-dataviz.html', views: 412, downloads: 145 },
  { id: '023', name: 'Glassmorphism Light', tags: ['glass', 'blur', 'gradient', 'light'], tone: 'light', inspired: ['reflect.app', 'cosmos.so'], accent: '#6366f1', bg: '#f0f4ff', status: 'verified', description: 'Rotating gradient borders, floating glass cards, animated chart, bento', sampleFile: '023-glassmorphism-light.html', views: 389, downloads: 132 },
  { id: '025', name: 'Neon Dark', tags: ['neon', 'glow', 'dark', 'cyberpunk'], tone: 'dark', inspired: ['gsap.com', 'roasted.design'], accent: '#06b6d4', bg: '#0a0a0a', status: 'verified', description: '3-layer glow, code typing, scanlines, pulse radar, cyan+pink neon', sampleFile: '025-neon-dark.html', views: 445, downloads: 167 },
  { id: '027', name: 'Gradient SaaS', tags: ['gradient', 'saas', 'pink', 'bento'], tone: 'light', inspired: ['superlist.com', 'wealthsimple.com'], accent: '#ec4899', bg: '#ffffff', status: 'verified', description: 'Pink-to-orange gradient, bento visual cards with UI mockups inside', sampleFile: '027-gradient-saas.html', views: 356, downloads: 118 },
  { id: '029', name: 'AI Chat Interface', tags: ['ai', 'chat', 'conversational'], tone: 'light', inspired: ['commandbar.com', 'jasper.ai'], accent: '#7c3aed', bg: '#fafafa', status: 'verified', description: 'Gradient AI text, glass chat UI, rotating border, typing dots, pulse dot badge', sampleFile: '029-ai-chat.html', views: 312, downloads: 95 },
  { id: '030', name: 'Racing Dynamic', tags: ['racing', 'sports', 'neon-green', 'fast'], tone: 'dark', inspired: ['landonorris.com'], accent: '#39FF14', bg: '#0a0a0a', status: 'verified', description: 'Speed counter 0→347, bento stats, CRT scanlines, card tilt hover', sampleFile: '030-racing-dynamic.html', views: 278, downloads: 82 },
  { id: '031', name: 'Minimal Product', tags: ['minimal', 'product', 'clean', 'indigo'], tone: 'light', inspired: ['tally.so', 'campsite.co'], accent: '#6366f1', bg: '#ffffff', status: 'verified', description: 'Gradient CTA, glass nav, bento features, mockup glow pulse', sampleFile: '031-minimal-product.html', views: 298, downloads: 94 },
  { id: '039', name: 'Retro Hacker Terminal', tags: ['retro', 'hacker', 'terminal', 'matrix'], tone: 'dark', inspired: ['grafbase.com'], accent: '#00ff41', bg: '#0a0a0a', status: 'verified', description: 'Matrix code rain, boot sequence, ASCII progress bars, network topology', sampleFile: '039-retro-pixel.html', views: 423, downloads: 156 },
  { id: '043', name: 'Horizontal Keynote', tags: ['horizontal', 'scroll', 'cinematic', 'presentation'], tone: 'dark', inspired: ['canals-amsterdam.com'], accent: '#a78bfa', bg: '#0a0a0a', status: 'verified', description: '6-slide keynote with scale/parallax/rotation/stagger/word-fade/converge', sampleFile: '043-horizontal-scroll.html', views: 387, downloads: 129 },
  { id: '048', name: 'Pastel Gradient Card', tags: ['pastel', 'gradient', 'soft', 'friendly'], tone: 'light', inspired: ['stripo.email'], accent: '#8b5cf6', bg: '#fafafa', status: 'draft', description: 'Rainbow pastel gradient cards, soft blobs, step flow, approachable', sampleFile: '048-pastel-gradient-card.html', views: 189, downloads: 54 },
  { id: '049', name: 'Monochrome Brutalist', tags: ['brutalist', 'monochrome', 'borders', 'typography'], tone: 'light', inspired: ['grafbase.com'], accent: '#000000', bg: '#ffffff', status: 'draft', description: 'Pure B/W, 3px borders, black card headers, hover inversion, zero color', sampleFile: '049-monochrome-brutalist.html', views: 201, downloads: 67 },
];
