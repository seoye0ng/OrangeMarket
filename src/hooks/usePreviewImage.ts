import { useState } from 'react';

export function usePreviewImage() {
  const [preview, setPreview] = useState<string | null>(null);

  const addImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string); // 미리보기 이미지 설정
      };
      reader.readAsDataURL(file); // 파일 객체를 읽어 base64 형태의 문자열로 변환
    }
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
