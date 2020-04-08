import firebase from 'firebase'

const uploadToStorage = async (refPath: string, imageUrl: string, initializedFirebase: typeof firebase): Promise<string> => {
  const storageRef = initializedFirebase.storage().ref()
  const uploadRef = storageRef.child(refPath)
  await uploadRef.putString(imageUrl, 'data_url')
  const url = await uploadRef.getDownloadURL()
  return url
}

export default uploadToStorage
