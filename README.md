# nuxt-auth-utils
Nuxt Auth Utils

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


## `NUXT_SESSION_PASSWORD`: 
This is the `"secret key"` that Nuxt/Nitro uses to sign/encrypt session data (cookies/session storage). If it is weak or public, cookies/sessions can be compromised.

```sh
openssl rand -hex 32
# or
openssl rand -base64 32
```

- `NUXT_SESSION_PASSWORD=GENERATED_BY_OPENSSL`
- `NUXT_OAUTH_GITHUB_CLIENT_ID=your_client_id`
- `NUXT_OAUTH_GITHUB_CLIENT_SECRET=your_client_secret`

### Optional:
- `NUXT_OAUTH_GITHUB_REDIRECT_URI=http://localhost:3000/api/auth/github/callback`
- `NUXT_OAUTH_GITHUB_SCOPES="read:user,user:email"`

(Quotation marks are allowed, but not required.)


## How to get `NUXT_OAUTH_GITHUB_CLIENT_ID` and `NUXT_OAUTH_GITHUB_CLIENT_SECRET`:

Go to GitHub → Settings → Developer settings → OAuth Apps → New OAuth App.
Enter the name and the "Authorization callback URL" (e.g. http://localhost:3000/api/auth/github/callback).
Create the app and copy the Client ID and Client Secret to your `.env.`

Additional note about the SQLite: make sure the `sqlite.db` file exists and is writable by the process that starts Nuxt (create the folder/file and permissions if necessary).

```sh
mkdir -p .data/ && touch .data/sqlite.db && chmod 600 .data/sqlite.db && ls -la .data/
```
