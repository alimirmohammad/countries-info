# Countries Information

This web app will give you information about all countries in the world.

## Technology Stack

The app is written with Vue 3 (composition API), Vue-Router, Pinia, TypeScript, and Vite.

## Deployed Version

You can checkout the deployed version of the app on [this link](https://countries-info-alimirmohammad.vercel.app/)

## Features

- The app uses a responsive design, to look good both on the desktop and on mobile.
- The app has two pages: Home Page and Details Page
- In the Home Page, you can see a list of all the countries, which comes from an API
- You can search for countries using the input field.
- You can filter the countries by their region using the dropdown.
- If you click on a country card in the Home Page, you will navigate to the Details Page, where you can see more info about that country (client-side routing using Vue-Router).
- The Details Page shows a list of the border countries of the current country. If you click on one of the border countries, you will navigate to the Details Page of that country.
- With clicking on the `Dark Mode`, you can toggle the theme between light and dark. The theme preference is stored in `localStorage`, so it will be preserved after page refreshes.
- The theme toggle feature is implemented using Vanilla JavaScript, and CSS variables, without any third-party libraries.
- The app uses fuzzy search, so the keyword does not have to exactly match the country name. For example, using keywords such as `Grmany` or `Grmny` you can find `Germany`.
- There is a sort functionality on the Home Page. You can sort the countries by their `Name` or `Population`, both in `Ascending` and `Descending` order. You can also sort them by `Relevance`. This is useful when you use it together with the search feature. It will show the more relevant countries based on the fuzzy search.
- Styles are scoped to the components, and the Details Page is loaded lazily when the route is visited, so when you are visiting the Home Page, the styles for the Details Page do not load.
- The flag images on the Home Page have an aspect-ratio of 9:5.
- A `Dockerfile` is provided, to run the project in a Docker container.
- The data for yor search keyword, filter by region, and sort by criteria are all stored as `query params` in the URL. So if you refresh the page, or navigate to the Details Page and the navigate back, you can see your filtered results.
- The app uses `vue-toastification` to show toast notifications in case of API errors.
- The app uses `vue-spinner` to show a loading spinner, when you are waiting for the API responses.
- If the information for a country has been request before, the app will not make a new API request, instead it will use the cached data. This mechanism is implemented using a getter in the `Pinia` store.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
