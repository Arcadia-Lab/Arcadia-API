import express from 'express';

import { Tweet, Narrative } from '../db/streamerModels';

export const getAllTweets = async (req: express.Request, res: express.Response) => {
    try {
        const tweets = await Tweet.find();
        
        console.log(tweets)

        return res.status(200).json(tweets);

    } catch (error) {

      console.log(error);

      return res.sendStatus(400);
    }
  };

  
  export const getTweetsByNarrativeName = async (req: express.Request, res: express.Response) => {
    const { narrativeName } = req.params;
  
    console.log(` name of the narrative is ${narrativeName}`)

    try {
      const narrative = await Narrative.findOne({ name: narrativeName });
  
      if (!narrative) {
        console.log(`Narrative with name ${narrativeName} not found`);
        return res.status(404).json({ message: `Narrative with name ${narrativeName} not found` });
      }
      console.log(narrative)
  
      const tweets = await Tweet.find({ narrative: { $in: [narrative._id] } });
      console.log(tweets)
      return res.status(200).json({ tweets });
  
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  };
  
  