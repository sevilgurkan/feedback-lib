import * as S from './styles';

export type ButtonVariant = 'primary' | 'danger';

export interface MeaninglessButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export default function MeaninglessButton({
  children,
  variant = 'primary',
  ...props
}: MeaninglessButtonProps) {
  return (
    <S.MeaninglessButton $variant={variant} {...props}>
      {children}
    </S.MeaninglessButton>
  );
}
