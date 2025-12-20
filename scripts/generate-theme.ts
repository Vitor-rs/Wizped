import type { Colord } from 'colord'
import { colord, extend } from 'colord'
import mixPlugin from 'colord/plugins/mix'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

extend([mixPlugin])

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const THEMES = [
  { name: 'midnight-kimchi', color: '#ED4B00', label: 'Midnight Kimchi' },
  { name: 'black-gold', color: '#FCA311', label: 'Black & Gold' },
  { name: 'mirage-blaze', color: '#FF5B04', label: 'Mirage Blaze' },
  { name: 'contrast-orange', color: '#FF7124', label: 'Modern Contrast' },
  { name: 'monochromatic-blue', color: '#0A4174', label: 'Mono Blue' },
  { name: 'sunset-dusk', color: '#F43F5E', label: 'Sunset Dusk' },
  { name: 'tropical', color: '#10B981', label: 'Tropical Rainbow' },
]

const TARGET_FILE_INDEX = path.resolve(__dirname, '../src/index.css')
const TARGET_FILE_THEMES = path.resolve(__dirname, '../src/styles/themes.css')

// 1. Parse Arguments (npm run theme:update #HexCode)
// If argument provided, update default index.css.
const baseColorInput = process.argv[2]
const runDefaultUpdate = !!baseColorInput

if (runDefaultUpdate) {
  if (!colord(baseColorInput).isValid()) {
    console.error('Invalid color format. Please use HEX, RGB, or HSL.')
    process.exit(1)
  }
  console.log(`🎨 Updating Default Theme (index.css) base: ${baseColorInput}`)
} else {
  console.log(
    `🎨 Generating Multi-Theme System (themes.css) from ${String(THEMES.length)} presets...`
  )
}

// 2. Generator Functions
function getHslString(color: Colord): string {
  const { h, s, l } = color.toHsl()
  // Round human-friendly
  return `${h.toFixed(1)} ${s.toFixed(1)}% ${l.toFixed(1)}%`
}

function generatePalette(baseColor: Colord) {
  const primitives: Record<number, string> = {}

  // Lighter (50-400)
  primitives[50] = getHslString(baseColor.mix('#ffffff', 0.95))
  primitives[100] = getHslString(baseColor.mix('#ffffff', 0.9))
  primitives[200] = getHslString(baseColor.mix('#ffffff', 0.8))
  primitives[300] = getHslString(baseColor.mix('#ffffff', 0.6))
  primitives[400] = getHslString(baseColor.mix('#ffffff', 0.4))

  // Base
  primitives[500] = getHslString(baseColor)

  // Darker (600-950)
  primitives[600] = getHslString(baseColor.mix('#000000', 0.1))
  primitives[700] = getHslString(baseColor.mix('#000000', 0.2)) // Less aggressive darkening
  primitives[800] = getHslString(baseColor.mix('#000000', 0.4))
  primitives[900] = getHslString(baseColor.mix('#000000', 0.6))
  primitives[950] = getHslString(baseColor.mix('#000000', 0.8))

  return primitives
}

function generateCssBlock(baseColor: Colord, selector: string, isDefault = false): string {
  const palette = generatePalette(baseColor)
  const indent = isDefault ? '    ' : '  '

  /*
   * TINTED NEUTRALS STRATEGY
   * Instead of hardcoded Zinc (240), we mix the Brand Color with White/Black
   * to create harmonious grays.
   */

  // Light Mode Neutrals
  const lightBg = colord('#ffffff').toHsl()
  const lightFg = baseColor.mix('#000000', 0.9).toHsl() // Black with hint of brand

  const lightCard = colord('#ffffff').toHsl()
  const lightCardFg = lightFg

  const lightMuted = baseColor.mix('#ffffff', 0.9).toHsl() // Very light brand tint
  const lightMutedFg = baseColor.mix('#000000', 0.6).toHsl()

  const lightAccent = baseColor.mix('#ffffff', 0.93).toHsl() // Subtle hover
  const lightAccentFg = baseColor.mix('#000000', 0.8).toHsl()

  const lightBorder = baseColor.mix('#ffffff', 0.85).toHsl() // Visible border, tinted
  const lightInput = baseColor.mix('#ffffff', 0.85).toHsl()

  // Dark Mode Neutrals
  const darkBg = baseColor.mix('#000000', 0.95).toHsl() // Almost black, tinted
  const darkFg = colord('#ffffff').toHsl()

  const darkCard = baseColor.mix('#000000', 0.92).toHsl()
  const darkCardFg = colord('#ffffff').toHsl()

  const darkMuted = baseColor.mix('#000000', 0.7).toHsl() // Muted styling
  const darkMutedFg = baseColor.mix('#ffffff', 0.7).toHsl()

  const darkAccent = baseColor.mix('#000000', 0.75).toHsl() // Richer hover
  const darkAccentFg = colord('#ffffff').toHsl()

  const darkBorder = baseColor.mix('#000000', 0.8).toHsl()
  const darkInput = baseColor.mix('#000000', 0.8).toHsl()

  /* Sidebar (Light) - HIGH CONTRAST STRATEGY */
  // We want a Deep Brand background for the sidebar in light mode (e.g. Navy, typically brand-900/950)
  // This solves the 'everything is white' complaint.
  const lightSidebarBg = baseColor.mix('#000000', 0.85).toHsl() // Very dark version of brand
  const lightSidebarFg = colord('#ffffff').mix(baseColor.toHex(), 0.1).toHsl() // White with tiny tint

  // Sidebar Accent (Hover) - Slightly lighter than BG
  const lightSidebarAccent = baseColor.mix('#000000', 0.75).toHsl()
  const lightSidebarAccentFg = colord('#ffffff').toHsl()

  // Sidebar Primary (Active Item) - The main Brand Color or bright variant
  const lightSidebarPrimary = baseColor.toHsl()
  const lightSidebarPrimaryFg = colord('#ffffff').toHsl()

  // Sidebar Border - Low contrast against deep bg
  const lightSidebarBorder = baseColor.mix('#000000', 0.8).toHsl()

  /* Sidebar (Dark) - COORDINATED STRATEGY */
  // In dark mode, we keep it dark but maybe slightly different tone
  const darkSidebarBg = baseColor.mix('#000000', 0.95).toHsl() // Almost black
  const darkSidebarFg = colord('#ffffff').mix(baseColor.toHex(), 0.05).toHsl()

  // Sidebar Accent (Hover)
  const darkSidebarAccent = baseColor.mix('#000000', 0.8).toHsl()
  const darkSidebarAccentFg = colord('#ffffff').toHsl()

  const darkSidebarPrimary = baseColor.toHsl()
  const darkSidebarPrimaryFg = colord('#ffffff').toHsl()

  const darkSidebarBorder = baseColor.mix('#000000', 0.9).toHsl()

  // Helper
  const toHsl = (c: { h: number; s: number; l: number }) =>
    `${c.h.toFixed(1)} ${c.s.toFixed(1)}% ${c.l.toFixed(1)}%`

  let css = ''
  if (isDefault) css += `:root {\n`
  else css += `${selector} {\n`

  css += `
${indent}/* Generated Primitives */
${indent}--brand-50: ${palette[50]};
${indent}--brand-100: ${palette[100]};
${indent}--brand-200: ${palette[200]};
${indent}--brand-300: ${palette[300]};
${indent}--brand-400: ${palette[400]};
${indent}--brand-500: ${palette[500]};
${indent}--brand-600: ${palette[600]};
${indent}--brand-700: ${palette[700]};
${indent}--brand-800: ${palette[800]};
${indent}--brand-900: ${palette[900]};
${indent}--brand-950: ${palette[950]};

${indent}/* Light Mode Semantics */
${indent}--background: ${toHsl(lightBg)};
${indent}--foreground: ${toHsl(lightFg)};

${indent}--card: ${toHsl(lightCard)};
${indent}--card-foreground: ${toHsl(lightCardFg)};
${indent}--popover: ${toHsl(lightCard)};
${indent}--popover-foreground: ${toHsl(lightCardFg)};

${indent}--primary: var(--brand-600);
${indent}--primary-foreground: 0 0% 98%;

${indent}--secondary: ${toHsl(lightMuted)};
${indent}--secondary-foreground: ${toHsl(lightMutedFg)};
${indent}--muted: ${toHsl(lightMuted)};
${indent}--muted-foreground: ${toHsl(lightMutedFg)};
${indent}--accent: ${toHsl(lightAccent)};
${indent}--accent-foreground: ${toHsl(lightAccentFg)};

${indent}--destructive: 0 84.2% 60.2%;
${indent}--destructive-foreground: 0 0% 98%;

${indent}--border: ${toHsl(lightBorder)};
${indent}--input: ${toHsl(lightInput)};
${indent}--ring: var(--brand-600);
${indent}--radius: 0.5rem;

${indent}/* Sidebar (Light) - High Contrast */
${indent}--sidebar-background: ${toHsl(lightSidebarBg)};
${indent}--sidebar-foreground: ${toHsl(lightSidebarFg)};
${indent}--sidebar-primary: ${toHsl(lightSidebarPrimary)};
${indent}--sidebar-primary-foreground: ${toHsl(lightSidebarPrimaryFg)};
${indent}--sidebar-accent: ${toHsl(lightSidebarAccent)};
${indent}--sidebar-accent-foreground: ${toHsl(lightSidebarAccentFg)};
${indent}--sidebar-border: ${toHsl(lightSidebarBorder)};
${indent}--sidebar-ring: var(--brand-600);

${indent}--chart-1: var(--brand-600);
${indent}--chart-2: var(--brand-500);
${indent}--chart-3: var(--brand-700);
${indent}--chart-4: var(--brand-400);
${indent}--chart-5: var(--brand-800);
`
  if (isDefault) css += `  }\n`
  else css += `}\n`

  // Dark Mode
  if (isDefault) css += `  .dark {\n`
  else css += `.dark${selector}, ${selector}.dark {\n`

  css += `
${indent}/* Dark Mode Semantics */
${indent}--background: ${toHsl(darkBg)};
${indent}--foreground: ${toHsl(darkFg)};

${indent}--card: ${toHsl(darkCard)};
${indent}--card-foreground: ${toHsl(darkCardFg)};
${indent}--popover: ${toHsl(darkCard)};
${indent}--popover-foreground: ${toHsl(darkCardFg)};

${indent}--primary: var(--brand-500);
${indent}--primary-foreground: 0 0% 100%;

${indent}--secondary: ${toHsl(darkMuted)};
${indent}--secondary-foreground: ${toHsl(darkMutedFg)};
${indent}--muted: ${toHsl(darkMuted)};
${indent}--muted-foreground: ${toHsl(darkMutedFg)};
${indent}--accent: ${toHsl(darkAccent)};
${indent}--accent-foreground: ${toHsl(darkAccentFg)};

${indent}--destructive: 0 62.8% 30.6%;
${indent}--destructive-foreground: 0 0% 98%;

${indent}--border: ${toHsl(darkBorder)};
${indent}--input: ${toHsl(darkInput)};
${indent}--ring: var(--brand-500);

${indent}/* Sidebar (Dark) */
${indent}--sidebar-background: ${toHsl(darkSidebarBg)};
${indent}--sidebar-foreground: ${toHsl(darkSidebarFg)};
${indent}--sidebar-primary: ${toHsl(darkSidebarPrimary)};
${indent}--sidebar-primary-foreground: ${toHsl(darkSidebarPrimaryFg)};
${indent}--sidebar-accent: ${toHsl(darkSidebarAccent)};
${indent}--sidebar-accent-foreground: ${toHsl(darkSidebarAccentFg)};
${indent}--sidebar-border: ${toHsl(darkSidebarBorder)};
${indent}--sidebar-ring: var(--brand-500);

${indent}--chart-1: var(--brand-500);
${indent}--chart-2: var(--brand-400);
${indent}--chart-3: var(--brand-600);
${indent}--chart-4: var(--brand-300);
${indent}--chart-5: var(--brand-700);
`
  if (isDefault) css += `  }\n`
  else css += `}\n`

  return css
}

// 3. Execution Logic
if (runDefaultUpdate) {
  // Only update index.css
  const base = colord(baseColorInput)
  const cssBody = generateCssBlock(base, '', true)

  const cssContent = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {

${cssBody}

}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
`
  fs.writeFileSync(TARGET_FILE_INDEX, cssContent)
  console.log('✅ Default Theme updated successfully in src/index.css')
} else {
  // Generate themes.css with ALL presets
  let themeCssContent = '/* Auto-generated by scripts/generate-theme.ts */\n\n'

  THEMES.forEach((theme) => {
    console.log(`Processing theme: ${theme.label}`)
    const base = colord(theme.color)
    themeCssContent += `/** Theme: ${theme.label} */\n`
    themeCssContent += generateCssBlock(base, `[data-theme="${theme.name}"]`, false)
    themeCssContent += '\n'
  })

  fs.writeFileSync(TARGET_FILE_THEMES, themeCssContent)
  console.log(`✅ Generated ${String(THEMES.length)} themes in src/styles/themes.css`)
}
