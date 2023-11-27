module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: "firebase-storage",
    providerOptions: {
      serviceAccount: require("./SERVICE_ACCOUNT_KEY_PATH.json"),
      bucketUrl: env("STORAGE_BUCKET_URL"),
      uploadOptions: {},
      deleteOptions: {},
    },
  },
});
