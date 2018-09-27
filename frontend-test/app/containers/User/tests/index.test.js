import React from 'react';
import { shallow } from 'enzyme';
import UserForm from 'components/UserForm';
import { User } from '../index';

describe('<User />', () => {
  it('Expect to have unit tests specified', () => {
    const renderedComponent = shallow(<User />);
    expect(renderedComponent.find(UserForm).length).not.toBe(0);
  });
});
