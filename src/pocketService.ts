// import PocketBase from 'pocketbase';
// import LocalStorageRepo from './LocalStorage';

// export default class PocketService {
//   /**
//    * A service to communicate with backend
//    **/
//   constructor() {
//     if (PocketService.instance) {
//       throw new Error("Error: Instantiation failed: Use SingletonClass.getInstance() instead of new.");
//     }
//     this.client = new PocketBase('http://127.0.0.1:8080');
//     this.cache = new LocalStorageRepo();
//   }

//   private client: PocketBase;
//   private cache: LocalStorageRepo;
//   private static instance: PocketService = new PocketService();

//   static getInstance(): PocketService {
//     return PocketService.instance;
//   }

//   async init() {
//     //log into pocketbase
//     if (!this.client.authStore.isValid) {
//       const adminAuthData = await this.client.admins.authViaEmail('iansutherland.az@gmail.com', 'wjGnJZ8cpqC4iBN');
//     }
//   }
// }