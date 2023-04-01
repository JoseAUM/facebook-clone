# Front-End Development
The front-end for this app uses [React](https://reactjs.org/docs/getting-started.html) with [Next.js](https://nextjs.org/) and [TypeScript](https://www.typescriptlang.org/docs/).

## Environment
Recommended IDE: [Visual Studio Code](https://code.visualstudio.com/download)

### Plugins
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)

## Patterns
It is imperative that we maintain consistent patterns throughout the app. To help achieve this, we will follow the following style guides (note some differences on account of our stack):
- [Airbnb React Style Guide](https://airbnb.io/javascript/react/)
- [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
- [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)

### Styling
- Utilize `rem` over `px` for sizing/spacing such that it's dynamic based on the user's preferred font size. The current root font size is 10px, meaning 1 rem == 10px, so divide a px value by 10 to get its rem equivalent (e.g., 16px == 1.6rem);
- Leverage the following libraries:
  - [Sass](https://sass-lang.com/guide)
  - [styled-components](https://styled-components.com/docs/basics)

## Resources
- [React docs](https://reactjs.org/docs/getting-started.html)
- [Next.js docs](https://nextjs.org/)
- [TypeScript docs](https://www.typescriptlang.org/docs/)
- [Airbnb Style Guide](https://airbnb.io/javascript/react/)
- [Sass](https://sass-lang.com/guide)
- [styled-components](https://styled-components.com/docs/basics)