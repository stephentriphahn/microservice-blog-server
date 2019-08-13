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
  // main routes
  app.use('/heartbeat', (req, res) => {
    res.json({ status: 'ok' });
  });

  app.listen(8080, () => logger.info('server-started', { port: 8080 }));
}

main();
