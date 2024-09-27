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
        <p className="text-14px font-normal text-gray-300">{description}</p>
      )}
    </header>
  );
}
