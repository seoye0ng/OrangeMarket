import { useRouter } from 'next/navigation';

export default function useNavigate() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const goTo = (path: string) => {
    router.push(path);
  };

  return { goBack, goTo };
}
