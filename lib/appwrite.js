import { Client, Account, Avatars, Databases } from 'appwrite';
import 'react-native-url-polyfill/auto';
import storage from 'local-storage-fallback';

// Polyfill localStorage for Appwrite realtime
if (typeof global !== 'undefined' && !global.localStorage) {
    global.localStorage = storage;
}

export const client = new Client()
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);
