import React from 'react';
import { shallow } from 'enzyme';
import { Form, Input } from 'reactstrap';
import UserForm from '..';

describe('<UserForm />', () => {
  it('Expect to have unit tests specified', () => {
    const renderedComponent = shallow(<UserForm />);
    expect(renderedComponent.find(Form).length).not.toBe(0);
    expect(renderedComponent.find(Input).length).toBe(6);
  });
});
