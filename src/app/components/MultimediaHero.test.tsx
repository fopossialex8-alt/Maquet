import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, describe, it, expect } from 'vitest';
import MultimediaHero from './MultimediaHero';
import type { PageType } from '../App';

describe('MultimediaHero', () => {
  it('renders carousel and captions', () => {
    render(<MultimediaHero onNavigate={vi.fn()} />);
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThan(0);
    expect(screen.getByLabelText('Précédent')).toBeDefined();
    expect(screen.getByLabelText('Suivant')).toBeDefined();
  });

  it('opens modal video when play clicked', async () => {
    const user = userEvent.setup();
    render(<MultimediaHero onNavigate={vi.fn()} />);
    const playBtn = screen.getAllByLabelText(/Regarder/)[0];
    await user.click(playBtn);
    expect(screen.getByRole('dialog')).toBeDefined();
  });
});
