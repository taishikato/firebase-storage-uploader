const uploadToStorage = async (refPath: string, imageUrl: string, firebase: any): Promise<string> => {
  const storageRef = firebase.storage().ref()
  const uploadRef = storageRef.child(refPath)
  await uploadRef.putString(imageUrl, 'data_url')
  const url = await uploadRef.getDownloadURL()
  return url
}

export default uploadToStorage