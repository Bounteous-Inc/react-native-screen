/**
 * Copyright (c) 2017
 * All Rights Reserved.
 * Author miguel.caballero
 */
'use strict';
jest.dontMock('../../src/Screen');


import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {matchStyle} from '../../src/util/helpers';

import Screen from '../../src/Screen';

describe('Screen Component', () => {
  const DEFAULT_STYLES = [{"flex": 1, "zIndex": 0}, {"backgroundColor": "#FFF", "marginBottom": 0, "marginTop": 0}];

  it('renders default', () => {
    const outerView = renderer.create(<Screen />).toJSON();

    expect(outerView).toMatchSnapshot();
    expect(outerView.children.length).toBe(1);
    expect(outerView.props.style).toEqual(DEFAULT_STYLES);
    expect(matchStyle('marginTop', outerView)).toBe(0);

    const childView = outerView.children[0];
    expect(matchStyle('marginTop', childView)).toBe(64);

  });

  it('Renders properly with hideNavBar', () => {
    const outerView = renderer.create(<Screen hideNavBar/>).toJSON();

    expect(outerView).toMatchSnapshot();
    expect(outerView.children.length).toBe(1);

    const childView = outerView.children[0];
    expect(matchStyle('marginTop', childView)).toBe(20);
  });


});