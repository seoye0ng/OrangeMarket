import { useState } from 'react';

export function usePreviewImage() {
  const [preview, setPreview] = useState<string[]>([]);

  const addImage = (file: File) => {
    const reader = new FileReader();
    reader.onload = () =>
      setPreview((prev) => [...prev, reader.result as string]);
    reader.readAsDataURL(file);
  };

  const deleteImage = (index: number) => {
    setPreview((prev) => prev.filter((_, i) => i !== index));
  };

  return {
    preview,
    addImage,
    deleteImage,
  };
}
