---
title: "Optimizing for OLED: The Case for True Black"
description: "Why #000000 matters for OLED screens and how to build a dark theme that takes full advantage of pixel-off black."
date: "2026-02-23"
tags: ["design", "css", "performance"]
---

# The OLED Advantage

On an OLED display, black pixels are literally **turned off**. This means a true `#000000` background:

- Uses zero power for those pixels
- Creates infinite contrast ratios
- Makes colors appear more vibrant

## Designing with Tonal Surfaces

Material Design 3 introduces the concept of **tonal containers** — instead of using drop shadows to show elevation, you use progressively lighter surface colors:

- `surface` — `#000000` (OLED black)
- `surface-container` — `#1c1b1f`
- `surface-container-high` — `#252529`
- `surface-container-highest` — `#302f33`

This creates a subtle sense of depth without relying on shadows that disappear on dark backgrounds.

## Typography Matters

Using `Roboto Flex` with its variable font axes gives us fine-grained control over:

- **Weight** — from 100 to 1000
- **Width** — condensed to expanded
- **Optical sizing** — automatic adjustments for readability at any scale

The result is typography that looks crisp on any screen density.
