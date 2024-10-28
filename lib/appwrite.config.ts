import * as sdk from "node-appwrite";

const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT;
const PROJECTID = process.env.NEXT_PUBLIC_PROJECT_ID;
const API = process.env.NEXT_PUBLIC_API_KEY;

const client = new sdk.Client();

client.setEndpoint(ENDPOINT!).setProject(PROJECTID!).setKey(API!);

export const storage = new sdk.Storage(client);
export const databases = new sdk.Databases(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
