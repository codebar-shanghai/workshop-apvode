# Slides for the Workshop: A Programmer's View of the Digital Evolution

This is the repo of the source code, if you're looking for the slides, please visit https://codebar-shanghai.github.io/workshop-apvode/ instead.

If you want to run this repo locally or make contributions, please clone and follow the steps below.

## Install Dependencies

> Node.js is needed. `pnpm` is preferred, but `npm` or `yarn` should also work.

```bash
pnpm install
```

## Start the Dev Server

With [vite](https://vitejs.dev/) you can start running the slides or editing on-the-fly.

```bash
pnpm run dev
```

By default the dev server will listen to port `4001`, if another program is already using that port on your computer, you can modify it in [`vite.config.ts`](./vite.config.ts#L18).

## The Structure

This project heavily depends on [reveal.js](https://revealjs.com/). Slides are split into chunks using [vue.js](https://vuejs.org/), and placed under the directory [src/slides](./src/slides/). [main.ts](./src/main.ts) and [App.vue](./src/App.vue) make the entry point.

