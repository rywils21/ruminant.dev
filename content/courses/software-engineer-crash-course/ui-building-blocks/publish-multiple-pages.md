---
title: "Publish Multiple Pages"
author: "Ryan Wilson"
published: "2020-26-04"
last_updated: "2020-26-04"


---

# Publish Multiple Pages and Add Links

The website is deployed and starting to look good. But it's still only one page! Let's change that.

## Step 1: Add another page

1. In the `ui-building-blocks/public` folder, add another file named `about.html`

2. Inside `about.html`, add the scaffolding for an html page:

   ```html
   { "added": [2, 3, 4, 5, 6], "removed": []}
   // about.html
   <html>
     <head></head>
     <body>
     </body>
   </html>
   ```

3. Let's copy the nav and footer from `index.html`:

   ```html
   { "added": [5,6,7,8,9,10,11,12,13], "removed": []}
   // about.html
   <html>
     <head></head>
     <body>
       <nav>
         <ul>
           <li>Home</li>
           <li>About</li>
         </ul>
       </nav>
       <footer>
       	&copy; 2020 (Your name here). All rights reserved.
       </footer>
     </body>
   </html>
   ```

4. Add some main content:

   ```html
   { "added": [11,12,13,14,15], "removed": []}
   // about.html
   <html>
     <head></head>
     <body>
       <nav>
         <ul>
           <li>Home</li>
           <li>About</li>
         </ul>
       </nav>
       <main>
         <div>
           This is the about page
         </div>
       </main>
       <footer>
       	&copy; 2020 (Your name here). All rights reserved.
       </footer>
     </body>
   </html>
   ```

5. Navigate directly to this page in the browser to view it



## Step 2: Link to the new About Page

1. In `index.html`, modify the `<li>` in the nav to become a link:

   ```html
   { "added": [12], "removed": [11] }
   // index.html
   <html>
     <head>
     	<style>
       </style>
     </head>
     <body>
       <nav>
         <ul>
           <li>Home</li>
           <li>About</li>
           <li><a href="/about">About</a></li>
         </ul>
       </nav>
       ...
     </body>
   </html>
   ```

2. Open this in the browser and click the link



## Step 3: Link back to the home page from about

1. In `about.html`, modify the home <li> to become a link:

   ```html
   { "added": [8], "removed": [7]}
   // about.html
   <html>
     <head></head>
     <body>
       <nav>
         <ul>
           <li>Home</li>
           <li><a href="/">Home</a></li>
           <li>About</li>
         </ul>
       </nav>
   		...
     </body>
   </html>
   ```

2. Refresh `/about` and click back and forth between the two pages



## Wrap Up

1. Commit and Push
2. View Deployed Version and linking