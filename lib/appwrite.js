import { Client, Account, Avatars } from 'appwrite';
import 'react-native-url-polyfill/auto';

export const client = new Client()
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const avatars = new Avatars(client);

