import clsx from 'clsx';

export function CreativeRezLogo({ className, color = 'var(--color-blue)', ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg height="26" viewBox="0 0 110 26" className={clsx('overflow-visible', className)} {...props}>

    </svg>
  );
}
