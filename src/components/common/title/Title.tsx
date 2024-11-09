import Text from '@/components/common/text/Text';

interface TitleProps {
  title: string;
  description?: string;
  padding: string;
}

export default function Title({ title, description, padding }: TitleProps) {
  return (
    <header className={`flex-center ${padding} ${description ? 'gap-3' : ''}`}>
      <h1 className="font-medium">{title}</h1>
      {description && (
        <Text size="14px" color="gray-300">
          {description}
        </Text>
      )}
    </header>
  );
}
