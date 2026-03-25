// Pre-committed SPA templates for Vercel deployment
// Desktop: uses upstream LobeChat CDN assets (CORS-enabled)
// Mobile: uses upstream LobeChat CDN assets
// These are overwritten during full SPA builds (Docker/local)

import { desktopHtmlTemplate } from './desktopHtmlTemplate.source';
import { mobileHtmlTemplate } from './mobileHtmlTemplate.source';

export { desktopHtmlTemplate, mobileHtmlTemplate };
