# Spotify FOSS GitHub Page

This is a rework of the Spotify FOSS GitHub Page documenting the companies Open Source projects. It uses Jekyll to build the website & GitHub Actions with a short Node.js script to fetch data from the GitHub GraphQL API adding it to a staic YAML file in the repository.

It's strongly based on the code from the current [spotify.github.io Page](https://github.com/spotify/spotify.github.io) (You need to be a member of `spotify-dev` in the Spotify GitHub org to access this). The intention was to abandoded the ancient sofware used while keeping most of the code. The generated website should be the same & the way it is generated as well, but the technology used changed.

## Development

**Install Jekyll & bunlder gems**

```
gem install jekyll bundler
```

**Install yarn**

```
npm install --global yarn
```

**Install dependencies** inside of the project folder

```
yarn & bundle install
```

**Build & serve**

```
bundle exec jekyll serve
```

---

**(Optional) Test & update data**

[Create a personal GitHub Access Token](https://github.com/settings/tokens) to fetch & update the repository data locally. As the data is updated automatically using GitHub Actions `_data/projects_generated.yaml` should not be added to Git.

```
GH_TOKEN=YOUR_TOKEN node ./scripts/nightly.js
```

## Resources

- Backstage Open Source GitHub Actions: https://github.com/backstage/backstage/blob/master/.github/workflows/nightly.yml
- Twitter Open Source GitHub Page: https://github.com/twitter/twitter.github.io
