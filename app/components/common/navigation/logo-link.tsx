import { Link } from '@/app/components/common/';
import Logo from '@icons/logo.svg';

export default function LogoLink() {
  return (
    <Link href="/" className="w-auto h-auto items-center">
      <Logo />
    </Link>
  );
}
