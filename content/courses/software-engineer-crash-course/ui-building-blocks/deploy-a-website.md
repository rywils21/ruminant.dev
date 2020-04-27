---
title: "Deploy a Website"
author: "Ryan Wilson"
published: "2020-26-04"
last_updated: "2020-26-04"

---

# Deploy a Website

Now that you have created a web page, let's deploy it to the internet so anyone in the world can go view it.

We won't be doing any coding in this activity. However it will give an introduction to git, a version control system that is vitally important to becoming a developer. In exchange for your hard work, you'll have a website accessible from any web browser, that you own completely.

## Software Needed

1. Text Editor
2. Web Browser
3. The Github Desktop App
4. A Github Account
5. A Vercel Account

## Step 1: Create your accounts

1. Go to [https://github.com](https://github.com) and create an account if you don't have one

   1. If you do, great! Skip this step

2. Go to [https://vercel.com](vercel.com) and login using Github

   [img of the login using github button]

## Step 2: Create a code repository

Now that you have your accounts, let's create a place on Github to store your code.

1. Go to Github.com
2. In the upper right, click the plus > new repository
3. Name it `ui-building-blocks`

Voila, you've created a repository

## Step 3: Upload your code

The final screen from the last step has some pretty wild instructions that are meant to use with a Terminal application. It's helpful to learn the command line, but for simplicity's sake, we're going to use the Github Desktop App.

1. Open the Github Desktop App and login with your Github Credentials
2. Create a repository in the folder where you created the `index.html` file
3. Create a commit
4. Publish master branch

Your code has now been published to the repository on Github.

## Step 4: Prepare your code for deployment

1. Create a `public` folder inside of `ui-building-blocks`
2. Move `index.html` inside of the public folder
3. Create a commit and publish

## Step 4: Deploy your website

Now that your code is on Github, vercel can grab it and deploy it. We just need to configure it to do so.

1. Navigate to vercel.com
2. Log in with Github if you haven't already
3. Grant access to the `ui-building-blocks` repository
4. Configure the deployment to deploy your public folder
5. Wait for it to deploy
6. Go look at it!

Done!

## Wrap up

You've successfully created a repository, pushed some code, and deployed it to the internet. You can give your link to anyone and they can go view your site.

We lightly touched on git by using Github. Keep in mind that this is an important topic. For now, all of the instructions will be very explicit on how to use it.

Now that we have deployed the site by hooking up our Github repository to Vercel, every time we push an update, the update will automatically be deployed by Vercel.

In the next lessons, we'll work on flushing out the website more so that it becomes something you want to share!

