import "clsx";
const metadata = {
  "title": "Optimizing for OLED: The Case for True Black",
  "description": "Why #000000 matters for OLED screens and how to build a dark theme that takes full advantage of pixel-off black.",
  "date": "2026-02-23",
  "tags": ["design", "css", "performance"]
};
const { title, description, date, tags } = metadata;
function Oled_dark_mode_md($$renderer) {
  $$renderer.push(`<h1 id="the-oled-advantage"><a href="#the-oled-advantage">The OLED Advantage</a></h1> <p>On an OLED display, black pixels are literally <strong>turned off</strong>. This means a true <code>#000000</code> background:</p> <ul><li>Uses zero power for those pixels</li> <li>Creates infinite contrast ratios</li> <li>Makes colors appear more vibrant</li></ul> <h2 id="designing-with-tonal-surfaces"><a href="#designing-with-tonal-surfaces">Designing with Tonal Surfaces</a></h2> <p>Material Design 3 introduces the concept of <strong>tonal containers</strong> — instead of using drop shadows to show elevation, you use progressively lighter surface colors:</p> <ul><li><code>surface</code> — <code>#000000</code> (OLED black)</li> <li><code>surface-container</code> — <code>#1c1b1f</code></li> <li><code>surface-container-high</code> — <code>#252529</code></li> <li><code>surface-container-highest</code> — <code>#302f33</code></li></ul> <p>This creates a subtle sense of depth without relying on shadows that disappear on dark backgrounds.</p> <h2 id="typography-matters"><a href="#typography-matters">Typography Matters</a></h2> <p>Using <code>Roboto Flex</code> with its variable font axes gives us fine-grained control over:</p> <ul><li><strong>Weight</strong> — from 100 to 1000</li> <li><strong>Width</strong> — condensed to expanded</li> <li><strong>Optical sizing</strong> — automatic adjustments for readability at any scale</li></ul> <p>The result is typography that looks crisp on any screen density.</p>`);
}
export {
  Oled_dark_mode_md as default,
  metadata
};
