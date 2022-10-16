# spotify.github.io

<p align="left">
  <img align="top" src="https://user-images.githubusercontent.com/8904624/127524940-37bd6001-647d-40ac-86ec-bb22d1a100c8.gif">
</p>



<br>

**Showcase site for hand-picked open-source projects by Spotify.**

- Built using Jekyll & GitHub Actions with a ```node.js script``` to fetch data from the ```GitHub GraphQL API``` and adding it to a static ```YAML file``` in the repository.



<details><summary> <h2> Development 
</h2></summary>

**Install Jekyll & bundler gems**

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
</details>

---

<br>

## About this Repo
![GitHub contributors](https://img.shields.io/github/contributors/spotify/spotify.github.io?style=for-the-badge&color=blue)
![GitHub language count](https://img.shields.io/github/languages/count/spotify/spotify.github.io?style=for-the-badge&color=brightgreen)
![GitHub top language](https://img.shields.io/github/languages/top/spotify/spotify.github.io?style=for-the-badge&color=aqua)
![GitHub last commit](https://img.shields.io/github/last-commit/spotify/spotify.github.io?style=for-the-badge&color=blue)
![Github Repo Size](https://img.shields.io/github/repo-size/spotify/spotify.github.io?style=for-the-badge&color=aqua)

<br>

## Contributors

<a href="https://github.com/spotify/spotify.github.io/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=spotify/spotify.github.io" />
</a>

<br><br>

<div align="center">

[Open Code of Conduct][code-of-conduct]
 </div>

[code-of-conduct]: https://github.com/spotify/code-of-conduct/blob/master/code-of-conduct.md
