import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Top from './Top';

vi.mock('react-router-dom', () => ({
  useNavigate: () => vi.fn(),
}));

describe('Top Component', () => {
  test('should display title', () => {
    render(<Top />);
    screen.debug();
    expect(screen.getByText('Your Training History')).toBeInTheDocument();
  });

  test('should display sign in button', () => {
    render(<Top />);
    screen.debug();
    expect(screen.getByText('初めての方はこちら')).toBeInTheDocument();
  });

  test('should display login button', () => {
    render(<Top />);
    screen.debug();
    expect(
      screen.getByText('アカウントをお持ちの方はこちら')
    ).toBeInTheDocument();
  });
});
