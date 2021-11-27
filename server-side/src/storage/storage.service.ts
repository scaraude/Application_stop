import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firebaseApp } from "../config/storage.config";

export const uploadFile = async (file: File, refFile: string) => {
    const storage = getStorage(firebaseApp);
    const storageRef = ref(storage, `spot-photos/${refFile}`);

    const uploadedfile = await uploadBytes(storageRef, file);
    return getDownloadURL(uploadedfile.ref)
}