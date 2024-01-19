import { click, render } from '@ember/test-helpers';
import { setupRenderingTest } from '../../helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';

module('Integration | Component | simple-button', function (hooks) {
  setupRenderingTest(hooks);

  test('should keep track of clicks', async function (assert) {
    await render(hbs`<SimpleButton />`);
    assert.dom('[data-test-label]').hasText('0 clicks');

    await click('[data-test-button]');
    assert.dom('[data-test-label]').hasText('1 click');

    await click('[data-test-button]');
    assert.dom('[data-test-label]').hasText('2 clicks');
  });
});
