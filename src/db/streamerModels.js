"use strict";
exports.__esModule = true;
exports.Narrative = exports.Tweet = exports.TwitterAccount = void 0;
var mongoose_1 = require("mongoose");
// Schemas
var twitterAccountSchema = new mongoose_1.Schema({
    fullName: { type: String, required: true },
    username: { type: String, required: true },
    twitterId: { type: String, required: true, unique: true },
    membershipNumber: { type: String, required: true }
});
var tweetSchema = new mongoose_1.Schema({
    tickers: {
        type: [{ type: String }],
        required: false
    },
    twitterUrl: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: false
    },
    twitterAccount: {
        type: mongoose_1["default"].Schema.Types.ObjectId,
        ref: 'TwitterAccount',
        required: false
    },
    narrative: [
        {
            type: mongoose_1["default"].Schema.Types.ObjectId,
            ref: 'Narrative',
            required: false
        },
    ]
});
var narrativeSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: false
    },
    keywords: [{ type: String }]
});
// Models
var TwitterAccount = mongoose_1["default"].model('TwitterAccount', twitterAccountSchema);
exports.TwitterAccount = TwitterAccount;
var Tweet = mongoose_1["default"].model('Tweet', tweetSchema);
exports.Tweet = Tweet;
var Narrative = mongoose_1["default"].model('Narrative', narrativeSchema);
exports.Narrative = Narrative;
