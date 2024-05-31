# Separate Monorepo and Expo App

Use the Nx monorepo for the backend and web frontend, and a separate Expo app.

By doing this, we avoid issues between Nx and Expo, as highlighted in the following GitHub issues: [#22631](https://github.com/nrwl/nx/issues/22631), [#26257](https://github.com/nrwl/nx/issues/26257), and [#26285](https://github.com/nrwl/nx/issues/26285).

Another benefit is that we can use the Expo CLI without encountering version problems in `package.json` and `node_modules`.

To use backend packages from the monorepo in the Expo app, we can utilize Yarn imports like this:

```json
{
 "dependencies": {
  "@monorepo/<package_name>": "file:../monorepo/dist/packages/<package_name>"
 }
}
```

> Another Yarn import strategy involves using [`yarn link`](https://yarnpkg.com/cli/link).

We still need to work on publishing monorepo packages privately and setting up GitHub Actions for automatic updates in Expo.
