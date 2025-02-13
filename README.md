## Current Stack

This website is a live blog and personal project by Josh Walter made with [Next.js](https://nextjs.org/). The full stack is as follows:

- **[Next.js](https://nextjs.org/)**: Primary web framework picked for its ability to easily blend frontend and backend architecture with React.js. For a blog website the built-in image processing and static page generation with simple revalidation features was a no brainer.

- **[Ghost CMS](https://ghost.org/)**: Used as a headless backend to easily write and store blog posts. Selected for it's clean writing format, built in composition plugins, and simple SEO features. All of which is pulled into Next.js in lexical format which is much easier to parse and turn into custom JSX modules than HTML string. Only CMS I liked more for customization was Notion which lacked security.

- **[Neon DB](https://neon.tech/)**: Neon DB is a Postgres SQL database use for storing user information and authentication keys for Auth.js as well as blog comment functionality. Played with a few databases, but grew to love postgres and picked Neon for being the most reliable online postgres server at the time.

- **[Auth.js](https://authjs.dev/)**: Auth.js is used for user authentication and was picked because of how seemlessly it blends with Next.js. Using the experimental 'Auth.js' instead of 'Next.js' because it allows use of Drizzle ORM and has other updated features which were previously lost after updates to Next 13.

- **[Drizzle ORM](https://orm.drizzle.team/)**: Drizzle ORM creates a seemless connection between Next.js API routes and the backend database. Previously used other ORMs like Prisma which were clunky and caused significant lag on the website. Drizzle allowed me to write formulas that were nearer in appearance to their SQL queries which is flexible and fast.

- **[TailwindCSS](https://tailwindcss.com/)**: TailwindCSS won out as the easiest css framework to use. I played with direct CSS and SCSS, but once I figured out how to modify Tailwind it became much easier to maintain per component than CSS. Though Next.js allows for more modularized CSS and SCSS, I still grew to prefer working with tailwind to design the site.

## Previous Technologies

- **Custom GoLang Server**: After update to Next 13, Auth.js was no longer working right and Prisma ORM was beginning to slow the website down. Built a GoLang web server using SqlX as an ORM. Really enjoyed working with GoLang and server was quick and efficient, but paying for server space for both Ghost CMS and the GoLang Server wasn't really feasible for a passion project blog. After a Linux update broke features of my server temporarily, I found that Auth.js had updated and was fixed and opted to cut out the GoLang backend and move everything back into Next.JS with Auth.js and Drizzle ORM. I would consider using a golang server for more complex functions than what the blog uses, but it was a little overkill for my needs.

- **Prisma ORM**: Prisma was quick and easy to use, but after updating to Next 13 and integration of Vercel's serverless functions, Prisma was causing my builds to occasionally fail and some of my serverless functions to fail or be greatly delayed. There were some fixes supposedly implemented but when I returned to using an ORM I opted for Drizzle instead which was more intuitive for me.

- **Firebase Authentication**: Used Firebase Authentication temporarily while NextAuth was unusable. Opted to return to NextAuth to keep authentication in house.

- **Firebase Firestore**: I played around with Firestore as a non-relational DB for the blog, but quickly learned blog features like users and comments were in fact relational.

- **SvelteKit**: Originally built blog with SvelteKit due to preference of Svelte over React and interest in new Svelte features, but found that Next.js handling of image optimization and incremental static regeneration for static pages made for a faster overall site. For a more dynamic site, I may prefer SvelteKit, but for mostly static pages Next.js was a winner.

## Key Takeaways

When building what I thought would be a simple blog, I encountered several challenges and grew to appreciate the time and effort that really goes into building a website from scratch. Among the many challenges these were my biggest takeaways from this project:

1. **HTML Strings Are Not Easy to Customize**: Nearly every resource for using Ghost CMS and other blog CMS resources called for inserting the HTML into the blog post as is and customizing CSS to fit the CMS default CSS classes. I found this to be very limiting and difficult to customize, especially when it comes to special components like Youtube and Audio Players. Modifying the incoming HTML string to add my own CSS classes was more trouble than it was worth. That's when I found that the Ghost Admin API output MobileDoc format (and later switched to lexical) which was much faster and easier to parse and separate into customized JSX components. Were I to do something custom, I'd absolutely use something like Lexical to pass from composition to post.

2. **TailwindCSS Rocks with Custom Config**: Base TailwindCSS is already quite user friendly, but I preferred the flexibility of using SCSS to Tailwind base, that was until I discovered custom configs. Custom Tailwind configs lets you program in custom CSS components and commands that aren't already built into Tailwind's base CSS, things like dropcaps, slider customization, etc. It took a lot of time and playing around to figure out how to make it work, but once I did there was no going back.

3. **Updates and Breaking Changes Suck**: I have since learned not to just blindly update my apps. Everytime I ran an update whether in JS or in GoLang, everything would break and I'd have to spend hours reformatting code and reading docs on breaking changes. Whenever I see an update available for one of my components now I am quicker to read about the update and why it's necessary than to just dive into the updates blindly.

4. **Build Errors Are Almost as Bad**: This ties into number 3, but whenever changes are fixed in development, those fixes don't always translate to build/deployment. From Typescript Definition updates to pages you never realized were still broken, Build always adds another few hours of troubleshooting onto the plate when deploying after making project updates. I learned to run build on computer to catch all the errors rather than constantly pushing to github to watch deployment fail. Splitting my github repo into a master branch and development branch has also helped in making sure breaking changes don't effect my main website until I can test them.

5. **Static Generation and Image Optimization are Overpowered**: I mean that in a good way. I had a wordpress blog for 2 years before building this one. Even the best optimizations I put on the blog before were nowhere near as fast as my website operates with Next.js's Incremental Static Generation and image optimization. Even on a poor connection on my mobile phone, the pages load smoothly. I'm sure there's more optimization I could do to the speed, but it's fast enough for my needs currently.
