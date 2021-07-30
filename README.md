# spotify.github.io

<p align="center">
  <img src="https://user-images.githubusercontent.com/8904624/127524940-37bd6001-647d-40ac-86ec-bb22d1a100c8.gif">
</p>

Showcase site for hand-picked open-source projects by Spotify. It is build using Jekyll & GitHub Actions with a node.js script to fetch data from the GitHub GraphQL API adding it to a static YAML file in the repository.

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

**(Optional) Test & update data**

[Create a personal GitHub Access Token](https://github.com/settings/tokens) to fetch & update the repository data locally. As the data is updated automatically using GitHub Actions `_data/projects_generated.yaml` should not be added to Git.

```
GH_TOKEN=YOUR_TOKEN node ./scripts/nightly.js
```

---

This project adheres to the [Open Code of Conduct][code-of-conduct]. By participating, you are expected to honor this code.

[code-of-conduct]: https://github.com/spotify/code-of-conduct/blob/master/code-of-conduct.md
