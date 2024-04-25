# Publishing

## How we got here

We went with TurboRepo's recommendations
on [publishing packages](https://turbo.build/repo/docs/handbook/publishing-packages). Those recommendations came with
the following suggested tools:

- *Bundler* [TSUP](https://github.com/egoist/tsup)
- *Versioning and publishing* [Changesets CLI](https://github.com/changesets/changesets)

We also went ahead
and [automated our changesets](https://github.com/changesets/changesets/blob/main/docs/automating-changesets.md) by
installing the [Changeset bot](https://github.com/apps/changeset-bot) and adding
the [Changesets Release Action](https://github.com/changesets/action).

## Steps to publish

### Add a new changeset

run the following and choose the packages, version bumps and summary

```shell
bun changeset
```

### Create new versions of packages

the following command updates the change log file and applies the version bump for each package that had a previous
changeset

```shell
bun changeset version
```

# Publish all changed packages to npm

```shell
bun run build
bun changeset publish
```
