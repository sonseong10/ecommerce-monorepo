class ImageUploader {
  async upload(file: string | Blob) {
    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', import.meta.env.VITE_APP_CLOUDINARY_KEY as string)
    const result = await fetch(`https://api.cloudinary.com/v1_1/di3h6r79t/image/upload`, {
      method: 'POST',
      body: data,
    })
    return await result.json()
  }
}

export default ImageUploader
