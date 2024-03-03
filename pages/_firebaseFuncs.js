//import firebase_app from "./_firebaseConfig";
//import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

//const db = getFirestore(firebase_app);
//export default async function addData(colllection, id, data) {
/*  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(db, colllection, id), data, {
      merge: true,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function getDoument(collection, id) {
  let docRef = doc(db, collection, id);

  let result = null;
  let error = null;

  try {
    result = await getDoc(docRef);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
*/
// example usage
// 'use client'
// import addData from "@/firebase/firestore/addData";

// export default function Home() {

//   const handleForm = async () => {
//     const data = {
//       name: 'John snow',
//       house: 'Stark'
//     }
//     const { result, error } = await addData('users', 'user-id', data)

//     if (error) {
//       return console.log(error)
//     }
//   }

//   return (
//     ...
//   )
// }
