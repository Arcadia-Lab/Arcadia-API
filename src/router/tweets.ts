import express from 'express';

import { getAllTweets, getTweetsByNarrativeName} from '../controllers/tweets';

export default (router: express.Router) => {
  router.get('/tweets', getAllTweets);
  router.get('/tweets/:narrativeName', getTweetsByNarrativeName);

//   router.delete('/users/:id', isAuthenticated, isOwner, deleteUser);
//   router.patch('/users/:id', isAuthenticated, isOwner, updateUser);

};
