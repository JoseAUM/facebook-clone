import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '../../components/shared/NavBar';

describe('App Page', () => {
  const setup = () => render(<NavBar />);
  it('renders nav bar', () => {
    setup();
  });
});
