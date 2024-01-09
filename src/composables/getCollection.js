import { projectFirestore } from "@/firebase/config";

import { ref, watchEffect } from "vue";

const getCollection = (collection) => {
  const error = ref(null);
  const documents = ref(null);

  let documentRef = projectFirestore
    .collection(collection)
    .orderBy("createdAt");
  const unsub = documentRef.onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });

      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = "could not fetch the data";
    }
  );
  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { error, documents };
};
export default getCollection;
