'use client';

import { FormProvider, useForm } from 'react-hook-form';

import ProductUploadForm from '@/components/common/form/upload-form/ProductUploadForm';

interface ProductUploadPageProps {
  className: string;
}

export default function ProductUploadPage({
  className,
}: ProductUploadPageProps) {
  const methods = useForm({
    mode: 'onBlur',
    defaultValues: {
      product: {
        itemName: '',
        price: '',
        link: '',
        itemImage: '',
      },
    },
  });

  // TODO: 상품 업로드 API 연동(header button click)

  return (
    <main className={className}>
      <FormProvider {...methods}>
        <ProductUploadForm className="mt-30px" />
      </FormProvider>
    </main>
  );
}
