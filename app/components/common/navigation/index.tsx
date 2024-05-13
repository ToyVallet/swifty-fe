import { BackButton } from '@/app/components/common/';
import { Link } from '@/app/components/common/';
import LogoLink from '@/app/components/common/navigation/logo-link';
import { If } from '@/app/components/util';
import Magnifier from '@icons/magnifier.svg';
import { cn } from '@lib/utils';
import { IoArrowBackOutline } from 'react-icons/io5';

type Props = {
  hasBackButton?: boolean;
  scheme?: 'light' | 'dark';
};

export default function Navigation({ hasBackButton = false, scheme }: Props) {
  return (
    <nav
      className={cn(
        'z-50 flex w-full justify-between items-center px-5 py-[11px] bg-gradient-header fixed top-0 lg:px-10 lg:w-[800px]',
      )}
    >
      <If condition={hasBackButton}>
        <If.Then>
          <BackButton>
            <IoArrowBackOutline size={25} className={'text-white'} />
          </BackButton>
          <LogoLink />
        </If.Then>
        <If.Else>
          <div className="w-full flex justify-between items-center">
            <LogoLink />
            <Link href="#" className="w-auto h-auto items-center">
              <Magnifier fill={'white'} />
            </Link>
          </div>
        </If.Else>
      </If>
    </nav>
  );
}
