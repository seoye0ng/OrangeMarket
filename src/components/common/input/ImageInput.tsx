import classNames from 'classnames';
import Image from 'next/image';
import { ForwardedRef, forwardRef } from 'react';

type InputSize = 's' | 'm';
type InputColor = 'primary-100' | 'gray-200';

interface ISizes {
  label: string;
  img: number;
}

interface ImageInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: InputSize;
  color?: InputColor;
  id?: string;
}

const inputStyles: {
  sizes: Record<InputSize, ISizes>;
  colors: Record<InputColor, string>;
} = {
  sizes: {
    s: { label: 'w-[36px] h-[36px]', img: 22 },
    m: { label: 'w-[50px] h-[50px]', img: 28 },
  },
  colors: {
    'primary-100': 'bg-primary-100',
    'gray-200': 'bg-gray-200',
  },
};

const ImageInput = forwardRef(
  (
    {
      inputSize = 'm',
      color = 'primary-100',
      id = 'imageFile',
      accept = 'image/jpg, image/jpeg, image/png, image/gif',
      className,
      onChange,
      ...inputProps
    }: ImageInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const size = inputStyles.sizes[inputSize];

    return (
      <>
        <label
          htmlFor={id}
          className={classNames(
            'relative cursor-pointer rounded-full',
            size.label,
            inputStyles.colors[color],
            className,
          )}
        >
          <Image
            src="/assets/icons/icon-image.svg"
            alt="사진 첨부 아이콘"
            priority
            width={size.img}
            height={size.img}
            className="position-center"
          />
        </label>
        <input
          type="file"
          ref={ref}
          accept={accept}
          className="hidden"
          id={id}
          onChange={onChange}
          {...inputProps}
        />
      </>
    );
  },
);

export default ImageInput;
