# Tailwind styling

Components import named Tailwind class groups from their matching `*.styles.ts`
file. The shared navbar and home hero use `app/site-styles.ts`. These are static
utility strings, not CSS Modules. Small marker classes let descendant, sibling,
and state variants target the same elements as before.

Exact dimensions, colors, fonts, gradients, and container-relative units use
Tailwind arbitrary properties to preserve the existing design. Keep classes as
complete literal strings so Tailwind can detect them. Use backtick literals for
classes containing quoted attributes or font names; escaped quotes in regular
JavaScript strings do not scan as the same class token.

`app/globals.css` contains only Tailwind's import, exact inclusive responsive
variants, and the existing animation theme. `view-01` through `view-16` follow
the descending max-width breakpoints declared in that file; `view-09` is the
700px mobile breakpoint. Other variants preserve glass support, hover, viewport
ranges, and reduced-motion behavior. Declaration order is intentional.

`postcss.config.mjs` enables the official Tailwind v4 PostCSS plugin. Runtime
values such as carousel positions, portrait crops, and per-item colors stay in
inline custom properties or dynamic styles; their presentation uses Tailwind.

Validate changes with `npm run build`.
