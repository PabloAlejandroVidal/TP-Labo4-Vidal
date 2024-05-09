import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const firebaseConfig = {
  apiKey: "AIzaSyBCmj6KX9bdyfCxkZRS6hLtsUnXwBouqxA",
  authDomain: "laboratorio-4-13a5b.firebaseapp.com",
  projectId: "laboratorio-4-13a5b",
  storageBucket: "laboratorio-4-13a5b.appspot.com",
  messagingSenderId: "25443663992",
  appId: "1:25443663992:web:d13ae238c7a19d35342d8d",
  measurementId: "G-FWJ821Y878"
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    importProvidersFrom(
    provideFirebaseApp(() => initializeApp(
      firebaseConfig
    ))),
   importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
     importProvidersFrom(provideDatabase(() => getDatabase())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"laboratorio-4-13a5b","appId":"1:25443663992:web:d13ae238c7a19d35342d8d","storageBucket":"laboratorio-4-13a5b.appspot.com","apiKey":"AIzaSyBCmj6KX9bdyfCxkZRS6hLtsUnXwBouqxA","authDomain":"laboratorio-4-13a5b.firebaseapp.com","messagingSenderId":"25443663992","measurementId":"G-FWJ821Y878"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), provideAnimationsAsync()]
};
