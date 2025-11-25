# SiteEngine - Next.js & Sanity Template.

A fully-featured starter template made with Next.js, Sanity, TypeScript, Tailwind & more.

![Frame 2](https://github.com/user-attachments/assets/ef83c368-8954-4ed3-b370-7025c25e0d99)

## Tech Stack

* [Next.js](https://nextjs.org/) (App Router)
* [Sanity](https://sanity.io/)
* [TypeScript](https://www.typescriptlang.org/)
* [Bun](https://bun.sh/)
* [Tailwind](https://tailwindcss.com/)
* [Shadcn](https://ui.shadcn.com/)
* [Resend](https://resend.com/)
* [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
* [Vercel](https://vercel.com/)

## Key Features

* Page Builder with 12 pre-made blocks to get you started.
* Visual Editing, Live Preview and Live Content API integrations.
* Form Builder to create custom forms without leaving the Studio.
* Robust website settings implementation.
* Custom input components for an enchanced content editing experience.
* Fully-featured blog with table of contents generation, custom portable text blocks, search functionality and more.

### Prerequisites

* Install [Bun](https://bun.sh/)

## Getting Started

### 1. Create a Sanity Project
* Create a new Sanity Project.
* Add CORS origin for `http://localhost:3000`.
* Create an API token with `viewer` permissions.

### 2. Install the template
* Clone this repository and open it your code editor.
* Create a `.env.local` file and add the following environment variables:
  
| Environment Variable | Description                                           |
| :------------------------ | :----------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`| The public URL of your website (use `http://localhost:3000` during development) |
| `NEXT_PUBLIC_SITE_NAME`| The name of your website |
| `NEXT_PUBLIC_SANITY_DATASET`| The name of your Sanity dataset (usually "production") |
| `NEXT_PUBLIC_SANITY_PROJECT_ID`| Your Sanity project ID found in project settings |
| `NEXT_PUBLIC_SANITY_API_VERSION`| The Sanity API version to use (e.g., "2023-05-03") |
| `RESEND_SENDER_EMAIL`| The email address used to send emails via Resend |
| `RESEND_RECIEVER_EMAIL`| The email address that receives contact form submissions |
| `RESEND_API_KEY`| Your Resend API key for email functionality |
| `SANITY_API_READ_TOKEN`| API token for accessing Sanity content |

Next, run these commands in your terminal at the root of your project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`| Installs dependencies.|
| `bunx sanity dataset import demo-content.tar.gz production`| Imports demo content (optional).|

### 3. Start a local server

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun run dev`| Starts local dev server at http://localhost:3000
 

## Author

#### James Rea

- LinkedIn ([@jamesreaco](https://linkedin.com/in/jamesreaco))
- Website ([jamesrea.co](https://jamesrea.co))
- X (Twitter) ([@jamesreaco](https://x.com/jamesreaco))
