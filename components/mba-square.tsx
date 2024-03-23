import clsx from 'clsx';
import MBAIcon from './icons/mba';

export default function MBASquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      className={clsx('flex flex-none items-center justify-center', {
        'h-[50px] w-[60px] rounded-xl': !size,
        'h-[30px] w-[30px] rounded-lg': size === 'sm'
      })}
    >
      <MBAIcon />
    </div>
  );
}
