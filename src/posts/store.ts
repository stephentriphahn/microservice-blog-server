import logger from '../logger';

export type Post = {
    title: string,
    id: string,
    text: string,
};

export type PostStore = {
    store: (post: Post) => Promise<boolean>,
    get: (id: string) => Promise<Post | null>,
    getAll: () => Promise<Post[]>,
};

type MemDB = {
    [id: string]: Post,
};

function memoryStore(): PostStore {
    const db: MemDB = {
        abc: { id: 'abc', title: 'Hard coded', text: 'Lorum Ipsom some other stuff' },
    };
    return {
        async store(post) {
            db[post.id] = post;
            logger.debug('memorydb: put: db: \n', db);
            return true;
        },
        async get(id) {
            logger.debug('get: db: \n', { id, db });
            return db[id] || null;
        },
        async getAll() {
            logger.debug('get-all', { db });
            return Object.keys(db).map((k) => db[k]);
        },
    };
}

export function connect(connStr: string) {
    // TODO add logic for different dbs
    return memoryStore();
}
