# Publishing

## How we got here

We went with TurboRepo's recommendations on [publishing packages](https://turbo.build/repo/docs/handbook/publishing-packages). Those recommendations came with the following suggested tools:

- *Bundler* [TSUP](https://github.com/egoist/tsup)
- *Versioning and publishing* [Changesets CLI](https://github.com/changesets/changesets)

since we already were using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) and enforcing them via [CommitLint](https://github.com/conventional-changelog/commitlint) we decided to add the following tool as well:

- *Changelog Generator* [Changelog Github](https://github.com/changesets/changesets/tree/main/packages/changelog-github)

## Steps to publish

### Add a new changeset
run the following and choose the packages, version bumps and summary
```shell
bun changeset
```

### Create new versions of packages
the following command update the change log file and apply the version bump for each package that had a previous changeset
```shell
bun changeset version
```

# Publish all changed packages to npm

```shell
bun run build
bun changeset publish
```
