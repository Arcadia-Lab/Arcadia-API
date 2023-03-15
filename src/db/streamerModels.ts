import mongoose, { Schema, Document, Model } from 'mongoose';


// Interfaces
export interface ITwitterAccount extends Document {
  fullName: string;
  username: string;
  twitterId: string;
  membershipNumber: string;
}

export interface ITweet extends Document {
    tickers: string[];
    twitterUrl: string;
    date: Date;
    twitterAccount: ITwitterAccount['_id'];
    narrative: INarrative['_id'];
  }

export interface INarrative extends Document {
  name: string;
  keywords: string[];
}


// Schemas
const twitterAccountSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  username: { type: String, required: true },
  twitterId: { type: String, required: true, unique: true },
  membershipNumber: { type: String, required: true}
});

const tweetSchema: Schema = new Schema({
  tickers: {
    type: [{ type: String }],
    required: false,
  },
  twitterUrl: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: false,
  },
  twitterAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TwitterAccount',
    required: false,
  },
  narrative: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Narrative',
      required: false
    },
  ],
});

const narrativeSchema: Schema = new Schema({
  name: {
    type: String,
    required: false
  },
  keywords: [{ type: String }],
});


// Models
const TwitterAccount: Model<ITwitterAccount> = mongoose.model<ITwitterAccount>(
  'TwitterAccount',
  twitterAccountSchema
);

const Tweet: Model<ITweet> = mongoose.model<ITweet>(
  'Tweet', 
  tweetSchema
);

const Narrative: Model<INarrative> = mongoose.model<INarrative>(
  'Narrative',
  narrativeSchema
);

export { TwitterAccount, Tweet,  Narrative };
