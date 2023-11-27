import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import FormMessage from './form-message';

const errorsData = [
  {
    field: '',
    message: 'Ошибка 1',
  },
  {
    field: '',
    message: 'Ошибка 2',
  },
];


describe('Component: FormMessage', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <FormMessage
          formErrors={errorsData}
        />
      </Router>,
    );

    expect(screen.getByText(`${errorsData[0].message}`)).toBeInTheDocument();
    expect(screen.getByText(`${errorsData[1].message}`)).toBeInTheDocument();
  });
});
