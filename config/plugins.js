module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: "firebase-storage",
    providerOptions: {
      serviceAccount: require(env("FIREBASE_SERVICE_ACCOUNT_PATH")),
      bucketUrl: env("FIREBASE_STORAGE_BUCKET_URL"),
    },
  },
});
