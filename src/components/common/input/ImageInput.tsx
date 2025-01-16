import classNames from 'classnames';
import Image from 'next/image';

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

export default function ImageInput({
  inputSize = 'm',
  color = 'primary-100',
  id = 'imageFile',
  accept = 'image/jpg, image/jpeg, image/png, image/gif',
  className,
  ...inputProps
}: ImageInputProps) {
  const size = inputStyles.sizes[inputSize];

  return (
    <>
      <label
        htmlFor={id}
        className={classNames(
          'cursor-pointer rounded-full',
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
        accept={accept}
        className="hidden"
        id={id}
        {...inputProps}
      />
    </>
  );
}
