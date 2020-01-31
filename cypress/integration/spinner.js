/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { checkEyes, setup } from '../util';

const test = 'Spinner';

export function SpinnerSpec() {
  describe(test, () => {
    beforeEach(() => {
      setup(test);
    });

    it('types', () => {
      cy.visit('/spinners/spinner-types');
      checkEyes('types');
    });

    it('sizes', () => {
      cy.visit('/spinners/spinner-sizes');
      checkEyes('sizes');
    });
  });
}