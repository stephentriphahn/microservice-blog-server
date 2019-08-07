import { App } from './app';
import { connect, PostStore } from './posts/store';

export type Context = {
  postStore: PostStore,
};

function main() {
  const context = {
    postStore: connect('memory'),
  };

  const { app } = new App(context);
  app.listen(3000, () => {
    console.log(`listening on port 3000`);
  });
}

main();
