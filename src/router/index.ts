import express from 'express';

import authentication from './authentication';
import users from './users';
import tweets from './tweets';
import narratives from './narratives';

const router = express.Router();

export default (): express.Router => {
  
  authentication(router);
  users(router);
  tweets(router)
  narratives(router)

  return router;
};
