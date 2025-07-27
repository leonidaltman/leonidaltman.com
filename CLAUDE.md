# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## CRITICAL WORKFLOW RULES
- **ALWAYS commit and push immediately after successful changes** - no exceptions
- Never leave uncommitted changes in the repository

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

## Lightbox Modal Features

The lightbox modal (js/script.js) includes:
- **Navigation arrows**: Navigate between images with < > arrows or keyboard (ArrowLeft/ArrowRight)
- **Zoom functionality**: Click image to toggle zoom in/out
- **Keyboard controls**: Escape to close, arrow keys to navigate
- **Click-to-close**: Click outside image to close modal

## SEO Configuration

The site includes essential SEO elements:
- **sitemap.xml**: Lists site pages for search engines
- **robots.txt**: References sitemap and guides crawlers
- **Structured data**: JSON-LD Person schema in index.html
- **Meta tags**: Description, keywords, canonical URL, Open Graph, and Twitter Cards
- **404.html**: Custom error page maintaining site design

## Site Structure Files

- **_headers**: Netlify security headers (X-Frame-Options, CSP, etc.)
- **favicon.ico**: Site icon

## Common Tasks

To modify the portfolio:
- Add/remove images: Update the gallery-grid section in index.html and add corresponding files to images/portfolio/
- Adjust marquee text: Edit the spans in marquee-content (keep both for seamless loop)
- Change contact info: Update links in the contact-section footer (email uses protected format with `data-email` attribute)
- Update bio: Modify the bio-text paragraph in the bio-section

## Image Requirements

Portfolio images should:
- Be optimized for web (compressed but high quality)
- Include descriptive alt text for accessibility and SEO
- Specify width/height attributes to prevent layout shift
- Use loading="lazy" attribute for performance

## Deployment

The site auto-deploys via Netlify when changes are pushed to the main branch of https://github.com/leonidaltman/leonidaltman.com

## Development Workflow

- **MANDATORY**: Commit and push after every successful change - this is enforced for auto-deployment