import { getDatabase, ref, onValue, set, remove, off } from "firebase/database";

class DataRepository {
  constructor(app) {
    this.db = getDatabase(app);
  }

  saveIdData(idData) {
    set(ref(this.db, `id`), idData);
  }

  syncIdData(onUpdate) {
    const query = ref(this.db, `id`);
    onValue(query, (snapshot) => {
      const value = snapshot.val();
      onUpdate(value);
    });
    return () => off(query);
  }
}

export default DataRepository;
