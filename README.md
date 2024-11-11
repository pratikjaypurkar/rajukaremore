
## Tech Stack

The project utilizes the following technologies:

- **Next.js**: A React framework for building server-side rendered and static websites.
- **Sanity**: A headless CMS for managing content.
- **Tailwind CSS**: A utility-first CSS framework for building responsive and customizable user interfaces.

Feel free to ask if you have any further questions!



<!-- TREE STRUCTURE START -->
<!-- TREE STRUCTURE END -->

<!-- TREE STRUCTURE START -->
```bash
.
├── README.md
├── messages
│   ├── en
│   │   └── common.json
│   └── mr
│       └── common.json
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── Frame 4.png
│   ├── Frame 5.png
│   ├── Frame 7.png
│   ├── Rectangle 12.png
│   ├── Rectangle 13.png
│   ├── Rectangle 14.png
│   ├── Rectangle 19.png
│   ├── Rectangle 20.png
│   ├── Rectangle 22.png
│   ├── Rectangle 24.png
│   ├── Rectangle 25.png
│   ├── Rectangle 26.png
│   ├── Rectangle 6 (1).png
│   ├── Rectangle 6.png
│   ├── Rectangle 8.png
│   ├── Rectangle 87 (3).png
│   ├── Rectangle 87.png
│   ├── assets
│   │   ├── 20240822_220609.jpg
│   │   ├── 35814698.jpg
│   │   ├── S-33 (1).jpg
│   │   ├── backgrounds
│   │   │   ├── hero-bg-2.png
│   │   │   ├── hero-bg.png
│   │   │   └── hero.png
│   │   ├── gallery
│   │   │   ├── img1.png
│   │   │   ├── img10.png
│   │   │   ├── img2.png
│   │   │   ├── img3.png
│   │   │   ├── img4.png
│   │   │   ├── img5.png
│   │   │   ├── img6.png
│   │   │   ├── img7.png
│   │   │   ├── img8.png
│   │   │   └── img9.png
│   │   ├── icons
│   │   │   ├── bridge.svg
│   │   │   ├── chat.svg
│   │   │   └── hands.svg
│   │   ├── raju main bg 2.png
│   │   └── services
│   │       ├── Rectangle 87 (4).png
│   │       ├── Rectangle 87 (5).png
│   │       ├── Rectangle 87 (6).png
│   │       ├── Rectangle 87 (7).png
│   │       ├── Rectangle 87 (8).png
│   │       ├── Rectangle 87 (9).png
│   │       └── Rectangle 88.png
│   ├── b1.png
│   ├── background.png
│   ├── calendar.svg
│   ├── cg1.png
│   ├── cg2.png
│   ├── cg3.png
│   ├── cg4.png
│   ├── cg5.png
│   ├── cg6.png
│   ├── clock.svg
│   ├── cp1.png
│   ├── cp2.png
│   ├── cp3.png
│   ├── cp4.png
│   ├── image (1).png
│   ├── image (2).png
│   ├── image (3).png
│   ├── image 10.png
│   ├── image 4.png
│   ├── image10.png
│   ├── imgm.png
│   ├── location.svg
│   ├── logo.svg
│   ├── play-button .svg
│   ├── raju main bg 1 (1).png
│   ├── raju-homepage.png
│   └── right.svg
├── sanity
│   └── sanity.ts
├── src
│   ├── app
│   │   ├── [locale]
│   │   │   ├── about
│   │   │   │   └── page.tsx
│   │   │   ├── campaign
│   │   │   │   └── page.tsx
│   │   │   ├── gallery
│   │   │   │   └── page.tsx
│   │   │   ├── globals.css
│   │   │   ├── layout.tsx
│   │   │   ├── news
│   │   │   │   └── page.tsx
│   │   │   ├── page.tsx
│   │   │   └── services
│   │   │       ├── agriculture
│   │   │       │   └── page.tsx
│   │   │       ├── education
│   │   │       │   └── page.tsx
│   │   │       ├── healthcare
│   │   │       │   └── page.tsx
│   │   │       └── infrastructure-development
│   │   │           └── page.tsx
│   │   └── favicon.ico
│   ├── components
│   │   ├── CampaignandProgram
│   │   │   ├── CampaignandPrograms.css
│   │   │   └── CampaignandPrograms.tsx
│   │   ├── Footer
│   │   │   └── Footer.tsx
│   │   ├── LandingPage
│   │   │   ├── About
│   │   │   │   ├── About.css
│   │   │   │   └── About.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── News
│   │   │   │   ├── News.css
│   │   │   │   └── News.tsx
│   │   │   ├── Progess
│   │   │   │   ├── Progress.css
│   │   │   │   └── Progress.tsx
│   │   │   └── Services
│   │   │       └── Services.tsx
│   │   ├── Media
│   │   │   ├── Media.css
│   │   │   └── Media.tsx
│   │   ├── Member
│   │   │   ├── Member.css
│   │   │   └── Member.tsx
│   │   └── Navbar
│   │       ├── DropDown.tsx
│   │       ├── LangSwitcher.tsx
│   │       └── Navbar.tsx
│   ├── i18n.ts
│   ├── middleware.ts
│   └── navigation.ts
├── studio
│   └── raju-karemore
│       ├── README.md
│       ├── dist
│       │   ├── favicon.ico
│       │   ├── index.html
│       │   └── static
│       │       ├── SanityVision-286835e3.js
│       │       ├── apple-touch-icon.png
│       │       ├── browser-804594e6.js
│       │       ├── favicon-192.png
│       │       ├── favicon-512.png
│       │       ├── favicon.ico
│       │       ├── favicon.svg
│       │       ├── index-fc3dcf8b.js
│       │       ├── index2-731461f6.js
│       │       ├── index3-057c4b20.js
│       │       ├── manifest.webmanifest
│       │       ├── resources-0ff4a09d.js
│       │       ├── resources-325c3661.js
│       │       ├── resources2-539c7e82.js
│       │       ├── resources3-d08aa274.js
│       │       ├── sanity-eacf8cd0.js
│       │       └── stegaEncodeSourceMap-b1900aa2.js
│       ├── package-lock.json
│       ├── package.json
│       ├── sanity.cli.ts
│       ├── sanity.config.ts
│       ├── schemaTypes
│       │   ├── contactForm.ts
│       │   ├── gallery.ts
│       │   └── index.ts
│       ├── static
│       └── tsconfig.json
├── tailwind.config.ts
├── tree_output.txt
└── tsconfig.json

39 directories, 144 files
```
<!-- TREE STRUCTURE END -->
