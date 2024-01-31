import {render, screen} from '@/test-utils';
import MeaninglessButton from '../MeaninglessButton';

describe('Meaningless Button', () => {
  test('should render the button', () => {
    const buttonText = 'Primary';

    render(
      <MeaninglessButton variant="primary">{buttonText}</MeaninglessButton>,
    );

    expect(screen.getByText(buttonText)).toBeVisible();
  });
});
