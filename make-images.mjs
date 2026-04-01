// Generates cover (1280x720) and logo (500x500) as SVG, saves as .svg files
import { writeFileSync } from 'fs';

// COVER SVG 1280x720
const cover = `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1280" y2="720" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#06060d"/>
      <stop offset="100%" stop-color="#0d0b1a"/>
    </linearGradient>
    <linearGradient id="titleGrad" x1="300" y1="0" x2="980" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="45%" stop-color="#c4b5fd"/>
      <stop offset="100%" stop-color="#67e8f9"/>
    </linearGradient>
    <linearGradient id="btnGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#8b5cf6"/>
    </linearGradient>
    <linearGradient id="topLine" x1="120" y1="0" x2="1160" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="transparent"/>
      <stop offset="50%" stop-color="#6366f1" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="transparent"/>
    </linearGradient>
    <radialGradient id="orb1" cx="200" cy="200" r="400" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="transparent"/>
    </radialGradient>
    <radialGradient id="orb2" cx="1100" cy="520" r="350" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="transparent"/>
    </radialGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <!-- BG -->
  <rect width="1280" height="720" fill="url(#bg)"/>
  <rect width="1280" height="720" fill="url(#orb1)"/>
  <rect width="1280" height="720" fill="url(#orb2)"/>

  <!-- Grid lines -->
  ${Array.from({length:27}, (_,i) => `<line x1="${i*48}" y1="0" x2="${i*48}" y2="720" stroke="rgba(99,102,241,0.05)" stroke-width="1"/>`).join('')}
  ${Array.from({length:16}, (_,i) => `<line x1="0" y1="${i*48}" x2="1280" y2="${i*48}" stroke="rgba(99,102,241,0.05)" stroke-width="1"/>`).join('')}

  <!-- Card -->
  <rect x="120" y="80" width="1040" height="560" rx="24" fill="rgba(255,255,255,0.025)" stroke="rgba(99,102,241,0.2)" stroke-width="1"/>
  <line x1="120" y1="80" x2="1160" y2="80" stroke="url(#topLine)" stroke-width="1.5"/>

  <!-- Corner marks -->
  <path d="M145 104 L145 124 M145 104 L165 104" stroke="rgba(99,102,241,0.5)" stroke-width="2" fill="none"/>
  <path d="M1135 104 L1135 124 M1135 104 L1115 104" stroke="rgba(99,102,241,0.5)" stroke-width="2" fill="none"/>
  <path d="M145 616 L145 596 M145 616 L165 616" stroke="rgba(99,102,241,0.5)" stroke-width="2" fill="none"/>
  <path d="M1135 616 L1135 596 M1135 616 L1115 616" stroke="rgba(99,102,241,0.5)" stroke-width="2" fill="none"/>

  <!-- Badge -->
  <rect x="490" y="128" width="300" height="36" rx="18" fill="rgba(6,182,212,0.1)" stroke="rgba(6,182,212,0.3)" stroke-width="1"/>
  <text x="640" y="151" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="11" font-weight="700" fill="#06b6d4" letter-spacing="2">✦  AI-POWERED · PERSONALIZED  ✦</text>

  <!-- Title -->
  <text x="640" y="285" text-anchor="middle" font-family="Arial, sans-serif" font-size="92" font-weight="800" fill="url(#titleGrad)">LaunchModel</text>

  <!-- Subtitle -->
  <text x="640" y="342" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="500" fill="#8b92a8">Full AI Prompt Chain</text>

  <!-- Divider -->
  <line x1="340" y1="378" x2="940" y2="378" stroke="rgba(99,102,241,0.3)" stroke-width="1"/>

  <!-- Feature pills -->
  <rect x="178" y="400" width="240" height="44" rx="12" fill="rgba(99,102,241,0.08)" stroke="rgba(99,102,241,0.2)" stroke-width="1"/>
  <text x="298" y="427" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="13" font-weight="600" fill="#a5b4fc">5 Personalized Prompts</text>

  <rect x="456" y="400" width="240" height="44" rx="12" fill="rgba(99,102,241,0.08)" stroke="rgba(99,102,241,0.2)" stroke-width="1"/>
  <text x="576" y="427" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="13" font-weight="600" fill="#a5b4fc">Strategy → Revenue Roadmap</text>

  <rect x="734" y="400" width="240" height="44" rx="12" fill="rgba(99,102,241,0.08)" stroke="rgba(99,102,241,0.2)" stroke-width="1"/>
  <text x="854" y="427" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="13" font-weight="600" fill="#a5b4fc">Works with ChatGPT &amp; Claude</text>

  <!-- Price button -->
  <rect x="540" y="476" width="200" height="56" rx="14" fill="url(#btnGrad)" filter="url(#glow)"/>
  <text x="640" y="511" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="800" fill="white">Unlock for $17</text>

  <!-- Guarantee -->
  <text x="640" y="590" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="13" fill="rgba(255,255,255,0.3)">One-time purchase · Instant access · 30-day refund guarantee</text>
</svg>`;

// LOGO SVG 500x500
const logo = `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500">
  <defs>
    <linearGradient id="bgLogo" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0d0b1a"/>
      <stop offset="100%" stop-color="#06060d"/>
    </linearGradient>
    <linearGradient id="iconGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#06b6d4"/>
    </linearGradient>
    <linearGradient id="textGrad" x1="0" y1="0" x2="500" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#c4b5fd"/>
      <stop offset="100%" stop-color="#67e8f9"/>
    </linearGradient>
    <radialGradient id="glow" cx="250" cy="220" r="200" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="transparent"/>
    </radialGradient>
  </defs>

  <!-- BG -->
  <rect width="500" height="500" rx="40" fill="url(#bgLogo)"/>
  <rect width="500" height="500" rx="40" fill="url(#glow)"/>

  <!-- Border -->
  <rect x="1" y="1" width="498" height="498" rx="40" fill="none" stroke="rgba(99,102,241,0.3)" stroke-width="1.5"/>

  <!-- Icon: rocket/launch shape made of geometric lines -->
  <g transform="translate(250, 210)">
    <!-- Outer hexagon -->
    <polygon points="0,-80 69,-40 69,40 0,80 -69,40 -69,-40" fill="none" stroke="url(#iconGrad)" stroke-width="2" opacity="0.4"/>
    <!-- Inner diamond -->
    <polygon points="0,-48 40,0 0,48 -40,0" fill="rgba(99,102,241,0.15)" stroke="url(#iconGrad)" stroke-width="2"/>
    <!-- Center dot -->
    <circle cx="0" cy="0" r="10" fill="url(#iconGrad)"/>
    <!-- Upward arrow / launch indicator -->
    <line x1="0" y1="-14" x2="0" y2="-38" stroke="#67e8f9" stroke-width="2.5" stroke-linecap="round"/>
    <polyline points="-8,-28 0,-42 8,-28" fill="none" stroke="#67e8f9" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
  </g>

  <!-- LM text mark -->
  <text x="250" y="335" text-anchor="middle" font-family="Arial, sans-serif" font-size="48" font-weight="800" fill="url(#textGrad)">LM</text>

  <!-- Tagline -->
  <text x="250" y="385" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="rgba(255,255,255,0.3)" letter-spacing="3">LAUNCHMODEL</text>
</svg>`;

writeFileSync('gumroad-cover.svg', cover);
writeFileSync('gumroad-logo.svg', logo);
console.log('Done! Saved gumroad-cover.svg and gumroad-logo.svg');
