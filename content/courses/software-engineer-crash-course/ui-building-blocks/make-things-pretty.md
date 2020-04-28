---
title: "Make things look pretty"
author: "Ryan Wilson"
published: "2020-26-04"
last_updated: "2020-26-04"

---

# Make things look pretty using CSS

We've got some content and structure on our site. Now let's make it look nice. To do that we're going to use CSS - the styling language of the browser.



## Step 1: Add a style tag

1. The first thing we'll do is add a style tag in the head of the html document

   ```html
   { "added": [3, 4], "removed": [] }
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
         </ul>
       </nav>
       <main>
         <div>
           <img src="" alt="" />
         </div>
         <div>
           <h1>
             Welcome to my site
           </h1>
           <p>
             This site is going to be my home on the internet. The place where you
             can find all of my work and profiles. I will collect things here that
             I like.
           </p>
         </div>
       </main>
       <footer>
       	&copy; 2020 (Your name here). All rights reserved.
       </footer>
     </body>
   </html>
   ```

   

## Step 2: Style the Nav