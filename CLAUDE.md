# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Leonid Altman's portfolio website - a static, single-page site showcasing graphic design and CGI work. The site was recently migrated from Squarespace to a self-hosted solution.

Leonid is a software developer and digital creator based in Israel, originally from Russia. His main product is Light Wrangler, a Blender add-on for simplifying lighting tasks. He has experience in software development, graphic design, and automated trading (MQL4), with interests in personal knowledge management and data-driven self-analysis.

## Architecture

The project uses vanilla HTML, CSS, and JavaScript with no build tools or frameworks:

- **index.html**: Single-page portfolio with marquee header, image gallery, and contact footer
- **css/style.css**: Minimal styling with CSS Grid for gallery (2 columns desktop, 1 mobile), animated marquee, and image modal
- **js/script.js**: Handles image lightbox functionality, marquee animation enhancement, and email protection
- **images/**: Contains profile image and 12 portfolio pieces in the portfolio/ subdirectory

## Development

This is a static website - simply open `index.html` in a browser to view. No build process, dependencies, or server required.

The site is deployed via GitHub Pages/Netlify at https://leonidaltman.com

## Key Design Decisions

- **Minimalist approach**: White background, black text, focus on showcasing visual work
- **Responsive grid**: 2-column layout on desktop, single column on mobile with 11px gaps
- **Large marquee text**: 8rem font size with 0.5em letter spacing, continuous scroll animation
- **No external dependencies**: Intentionally framework-free for simplicity and performance

## JavaScript Components

The site includes three main JavaScript features:
- **Image lightbox**: Clicking gallery items opens images in a modal overlay with close functionality
- **Marquee animation**: Duplicates marquee content for seamless infinite scrolling
- **Email protection**: Base64-encoded email in `data-email` attribute, decoded on click to prevent spam harvesting

## Common Tasks

To modify the portfolio:
- Add/remove images: Update the gallery-grid section in index.html and add corresponding files to images/portfolio/
- Adjust marquee text: Edit the spans in marquee-content (keep both for seamless loop)
- Change contact info: Update links in the contact-section footer (email uses protected format with `data-email` attribute)
- Update bio: Modify the bio-text paragraph in the bio-section

## Deployment

The site auto-deploys via Netlify when changes are pushed to the main branch of https://github.com/leonidaltman/leonidaltman.com

## Development Workflow

- Always commit and push after successful changes