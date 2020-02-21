# Example Cloudflare Workers Monorepo Project

This repository shows how to use [Lerna](https://lerna.js.org/) to manage multiple Cloudflare Workers projects that have been generated and configured with Wrangler, the Workers CLI tool.

New Workers projects can be added inside of the `packages` folder - for example, running `wrangler generate new-project` - and managed via navigating into each individual folder and running `wrangler` subcommands, or by using Lerna's `run` subcommand, which will look for an associated NPM script in each project:

```json
{
  "name": "workers-monorepo-example-fns",
  "scripts": {
    "build": "wrangler build",
    "publish": "wrangler publish"
  }
}
```

```json
{
  "name": "workers-monorepo-example-landing",
  "scripts": {
    "build": "wrangler build",
    "publish": "wrangler publish"
  }
}
```

```bash
workers-monorepo$ lerna run build && lerna run publish
lerna info Executing command in 2 packages: "npm run build"
lerna info run Ran npm script 'build' in 'workers-monorepo-example-fns' in 2.0s:

> workers-monorepo-example-fns@1.0.0 build /workers-monorepo/packages/fns
> wrangler build

lerna info run Ran npm script 'build' in 'workers-monorepo-example-landing' in 2.0s:

> workers-monorepo-example-landing@1.0.0 build /workers-monorepo/packages/landing
> wrangler build

lerna success run Ran npm script 'build' in 2 packages in 2.0s:
lerna success - workers-monorepo-example-fns
lerna success - workers-monorepo-example-landing
lerna info Executing command in 2 packages: "npm run publish"
lerna info run Ran npm script 'publish' in 'workers-monorepo-example-fns' in 4.8s:

> workers-monorepo-example-fns@1.0.0 publish /workers-monorepo/packages/fns
> wrangler publish

lerna info run Ran npm script 'publish' in 'workers-monorepo-example-landing' in 6.5s:

> workers-monorepo-example-landing@1.0.0 publish /workers-monorepo/packages/landing
> wrangler publish

lerna success run Ran npm script 'publish' in 2 packages in 6.5s:
lerna success - workers-monorepo-example-fns
lerna success - workers-monorepo-example-landing
```
