import express from 'express';

import { getAllNarrativeNames } from '../controllers/narratives';

export default (router: express.Router) => {
  router.get('/narratives', getAllNarrativeNames);

//   router.delete('/users/:id', isAuthenticated, isOwner, deleteUser);
//   router.patch('/users/:id', isAuthenticated, isOwner, updateUser);

};
