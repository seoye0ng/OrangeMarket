import { useState } from 'react';

export function usePreviewImage() {
  const [preview, setPreview] = useState<string | null>(null);

  const addImage = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const deleteImage = () => {
    setPreview(null);
  };

  return {
    preview,
    addImage,
    deleteImage,
  };
}
