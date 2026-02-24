# spotify.github.io

<p align="center">
  <img src="https://user-images.githubusercontent.com/8904624/127524940-37bd6001-647d-40ac-86ec-bb22d1a100c8.gif" alt="Spotify Open Source">
</p>

A showcase site for hand-picked open-source projects by Spotify.  
It is built using [Jekyll](https://jekyllrb.com/) and GitHub Actions, with a Node.js script that fetches data from the GitHub GraphQL API and stores it in a YAML file.

---

## Features

- Automatically updated list of Spotify OSS projects
- Categorized by programming language
- Fast static site built with Jekyll
- Easy to contribute via YAML config

---

## Local Development

### 1. Install Requirements


Install [Jekyll](https://jekyllrb.com/) and [Bundler](https://bundler.io/):
```sh
gem install jekyll bundler
```
Install Yarn:

```sh
npm install --global yarn
```

### 2. Install Dependencies

Run inside the project root:

```sh
yarn
bundle install
```

### 3. Run the Local Server

```sh
bundle exec jekyll serve
```

Open your browser at [localhost](http://localhost:4000)

## File Structure
```
text
.
├── [_data/]
│   ├── [_data/projects.yml]    # Hand-picked projects (you can add here!)
│   └── [_data/projects_generated.yaml]   # Auto-generated (DO NOT EDIT)
├── [scripts/]
│   └── [scripts/nightly.js]         # GitHub API fetcher
├── [_includes/]
├── [_layouts/]
├── [_site/]                      # Generated site output (ignored)
├── [assets/]
├── [index.html]
└── [README.md]
```


This project adheres to the [Open Code of Conduct][code-of-conduct]. By participating, you are expected to honor this code.

[code-of-conduct]: https://github.com/spotify/code-of-conduct/blob/master/code-of-conduct.md

