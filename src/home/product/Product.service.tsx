import * as firebase from 'firebase';
import 'firebase/firestore';

class ProductService {
  private db: firebase.firestore.Firestore;

  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_DATABASE_URL,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET
      });
    }

    // Initialize Cloud Firestore through Firebase
    this.db = firebase.firestore();

    // Disable deprecated features
    this.db.settings({
      timestampsInSnapshots: true
    });
  }

  public async getDoors(): Promise<firebase.firestore.DocumentData> {
    const querySnapshot = await this.db
      .collection('ebonyhouzz/products/doors')
      .get();
    return querySnapshot.docs.map(doc => doc.data());
  }
}

export default ProductService;
