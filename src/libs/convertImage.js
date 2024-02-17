const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    if (file) {
      const fileReader = new FileReader();
      fileReader?.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    }
  })
}

export const convertImage = async (e) => {
  const files = e.target.files;
  const base64s = [];

  for (let i = 0; i < files?.length; i++) {
    const file = await convertToBase64(files[i]);
    base64s.push(file);
  }

  if (base64s instanceof Error) {
    return;
  }

  return { files, base64s };
}