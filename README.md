<h1 align="center">
  <br>
 <img src="https://pngimg.com/uploads/rick_morty/rick_morty_PNG40.png" alt="rick" width="auto">
  <br>
  Rick And Morty
  <br>
</h1>

<h4 align="center">A minimal app base on Rick and Morty sitcom.</h4>

## Table Of Content

- [Installation](#installation)
- [Files Structure](#files-structure)
- [Built With](#built-with)

## Installation


1. Clone the repo
  ```sh
  git clone git@github.com:ppedd/sitcom.git
  ```
2. Install NPM packages
  ```sh
  npm install
  ```
3. Start the project
  ```sh
  npm start
  ```

## Files Structure

```
src
├── App.tsx
├── assets
│   └── notFoundPageLogo.jpeg
├── components
│   ├── CharacterCard.module.css
│   ├── CharacterCard.tsx
│   ├── CharactersList.module.css
│   ├── CharactersList.tsx
│   ├── declaration.d.ts
│   ├── FavouritesList.module.css
│   ├── FavouritesList.tsx
│   ├── Header.module.css
│   ├── Header.tsx
│   ├── Skeleton.module.css
│   └── Skeleton.tsx
├── index.css
├── index.tsx
├── pages
│   ├── Favourites.module.css
│   ├── Favourites.tsx
│   ├── Home.tsx
│   ├── NotFound.css
│   └── NotFound.tsx
├── store
│   ├── favourite.ts
│   └── index.ts
└── type.d.ts

4 directories, 23 files
```

### Built With

* [![React][React.js]][React-url]
* [![TypeScript][TypeScript]][TypeScript-url]
* [![Redux][Redux]][Redux-url]


<!-- MARKDOWN LINKS & IMAGES -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript]: https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square 
[TypeScript-url]: https://www.typescriptlang.org/
[Redux-url]: https://redux.js.org/
[Redux]: https://img.shields.io/badge/-Redux-000000?style=flat&logo=redux&logoColor=764ABC&labelColor=ffffff
