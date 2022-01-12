# Nextjs
  Learning Nextjs \
  Resource: https://www.youtube.com/watch?v=mTz0GXj8NN0&t=2s 

#### What is Nextjs?
React framework created by Vercel, allows ssr ans ssg 

##### Benefits: 
1. SEO
2. Performance
3. Easier to page routing
4. API Routes
5. TS & Sass
6. SSG(Next export)
7. Easy deployment

Tiny things I learned: \
Everything in PUBLIC file is going to be directly accessible from the browser.

##### Setup:
  npx create-next-app@latest [name project]

##### Pages and Routings:
  All files added to pages folder are going to route accessible.
  
##### Head:
  To define metatags, title, keywords 

##### CSS:
  You can't: \
  Import global.css directly in page, you have to do it in _app.js 

  Follow: \
  the name convention if you want to import directly in a page: "Home.module.css" 

#### Important things to remeber:
1. components folder shouldn't be inside pages because are not going to need routes
2. convention: lowercase for pages and uppercase for components.
