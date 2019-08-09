import { App } from './app';
import logger from './logger';
import { connect, PostStore } from './posts/store';

export type Context = {
  postStore: PostStore,
};

function main() {
  const context = {
    postStore: connect('memory'),
  };

  const { app } = new App(context);
  app.listen(3000, () => logger.info('server-started', { port: 3000 }));
}

main();
