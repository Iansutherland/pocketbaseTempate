import Get from './fetchHelper.js';
import fetch from 'cross-fetch';
if (!globalThis.fetch) {
    globalThis.fetch = fetch;
}
import PocketBase from 'pocketbase';
import cron from 'node-cron';


async function Run() {
    console.log('Welcome to pocketbase template');
}

Run();