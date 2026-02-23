import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, describe, it, expect } from 'vitest';
import { Header } from './Header';
import type { PageType } from '../App';

describe('Header', () => {
  it('renders social CTAs', () => {
    render(<Header onNavigate={vi.fn()} currentPage={'home' as PageType} />);
    const fb = screen.getAllByLabelText('Facebook');
    const ig = screen.getAllByLabelText('Instagram');
    const tt = screen.getAllByLabelText('TikTok');
    expect(fb.length).toBeGreaterThan(0);
    expect(ig.length).toBeGreaterThan(0);
    expect(tt.length).toBeGreaterThan(0);
  });

  it('toggles search input when search button is clicked', async () => {
    const user = userEvent.setup();
    render(<Header onNavigate={vi.fn()} currentPage={'home' as PageType} />);
    const searchBtns = screen.getAllByLabelText('Ouvrir la recherche');
    await user.click(searchBtns[0]);
    const input = screen.getByPlaceholderText('Rechercher un article, une enquête...');
    expect(input).toBeDefined();
  });

  it('toggles mobile menu aria-expanded', async () => {
    const user = userEvent.setup();
    render(<Header onNavigate={vi.fn()} currentPage={'home' as PageType} />);
    const menuBtns = screen.getAllByLabelText('Ouvrir le menu mobile');
    const menuBtn = menuBtns[0];
    // initial state
    expect(menuBtn.getAttribute('aria-expanded')).toBe('false');
    await user.click(menuBtn);
    expect(menuBtn.getAttribute('aria-expanded')).toBe('true');
  });
});
