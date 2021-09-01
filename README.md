NextJS boilerplate that implements Protected Routes. I'm using blocking data requirements at `_app.tsx` so authentication instruments such JWT, Cookie, etc. can be validated both at client and server.

## ✍️ Motivation

Create a simple and ready to go boilerplate to setup all authentication guards needed that can be modified easily. In this boilerplate, I'm using redux to control user authentication, but in the real world, You might using some server-based authentications. Each guards will accept props from `_app.tsx` getInitialProps to get some data from the server, including user validation. It will up to you how you manage the authentication instruments for each HOC Guards.

This boilerplate basically just a little part of my projects (without reverse proxy, some server state management libraries, etc) that we used for company projects.

## 🔐 Guards

I'm using 3 authentication guard components as HOC of the Next Page:

- Public: Those Pages that can be accessible without authentication
- Protected: Pages that requires authentication
- Redirect: Once the user logged in, this pages cannot be accessible anymore

## 🖥️ Setup

First of first, clone this repo:

```bash
git clone https://gitlab.com/rubichandrap/nextjs-auth-guards-boilerplate
```

Once you've done, run this command:

```bash
npm install
```

Run local development server:

```bash
npm run dev
```

Modify the template as free as you want
