/**
 * Copyright (c) 2017
 * All Rights Reserved.
 * Author miguel.caballero
 */
'use strict';

import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';

import {matchStyle} from '../src/util/helpers';

describe('Test Helper Functions', () => {
  describe('Style Matching Helper', () => {

    it('height should be undefined', () => {
      const component = {props: {style: {}}};
      expect(matchStyle('height', component)).toBeUndefined();
    });

    it('height should be undefined', () => {
      const component = {props: {style: [{}, {}]}};
      expect(matchStyle('height', component)).toBeUndefined();
    });

    it('should find 0 for height', () => {
      const component = {props: {style: {height: 0}}};
      expect(matchStyle('height', component)).toBe(0);
    });

    it('should find 5 for height', () => {
      const component = {props: {style: {height: 5}}};
      expect(matchStyle('height', component)).toBe(5);
    });

    it('should find 10 for height', () => {
      const component = {props: {style: [{height: 5}, {height: 10}]}};
      expect(matchStyle('height', component)).toBe(10);
    });

    it('should find 0 for marginTop', () => {
      const component = {props: {style: [ { zIndex: 0, flex: 1 }, { backgroundColor: '#FFF', marginTop: 0, marginBottom: 0 } ]}};
      expect(matchStyle('marginTop', component)).toBe(0);
    })
  });
});