// import * as functions from "firebase-functions";

const functions = require("firebase-functions");

const axios = require("axios");

exports.createChatEngineUser = functions.auth.user().onCreate((user) => {
  axios.post(
      "https://api.chatengine.io/users/",
      {
        username: user.email,
        secret: user.uid,
        email: user.email,
        first_name: user.displayName,
      },
      {headers: {"Private-Key": "d10abe4f-63c2-48ec-89bd-f5bb10e2abf5"}},
  );
});

exports.deleteChatEngineUser = functions.auth.user().onDelete((user) => {
  axios.delete("https://api.chatengine.io/users/me/", {
    headers: {
      "Project-ID": "34b065ef-24cb-4d65-9fac-af075da7fa64",
      "User-Name": user.email,
      "User-Secret": user.uid,
    },
  });
});

