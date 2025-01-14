/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { IUploadProductRequest } from '@/api/types/product';
import ProductUploadForm from '@/components/common/form/upload-form/ProductUploadForm';
import { useHeaderContext } from '@/context/provider/HeaderContext';
import useUploadProduct from '@/queries/product/useUploadProduct';

interface ProductUploadPageProps {
  className: string;
}

export default function ProductUploadPage({
  className,
}: ProductUploadPageProps) {
  const { isHeaderClick, setIsHeaderClick } = useHeaderContext();
  const { mutate: uploadProduct } = useUploadProduct();
  const methods = useForm({
    mode: 'onBlur',
    defaultValues: {
      product: {
        itemName: '',
        price: 0,
        link: '',
        itemImage: '',
      },
    },
  });

  const onSubmit = (data: IUploadProductRequest) => {
    console.log('Data:', data);
    uploadProduct(data);
  };

  useEffect(() => {
    if (isHeaderClick) {
      methods.handleSubmit(onSubmit)();
      setIsHeaderClick(false);
    }
  }, [isHeaderClick, methods, setIsHeaderClick]);

  return (
    <main className={className}>
      <FormProvider {...methods}>
        <ProductUploadForm className="mt-30px" />
      </FormProvider>
    </main>
  );
}
