import express from 'express';

import { Narrative } from '../db/streamerModels';

export const getAllNarrativeNames = async (req: express.Request, res: express.Response) => {
  try {
    const narratives = await Narrative.find().select('name');


    const narrativeNames = narratives.map((narrative) => narrative.name);

    return res.status(200).json({ narrativeNames });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

