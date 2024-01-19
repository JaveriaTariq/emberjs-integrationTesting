import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SimpleButtonComponent extends Component {
  @tracked clickCount = 0;

  @action
  incrementClicks() {
    this.clickCount += 1;
    console.log('Click count:', this.clickCount);
  }
}
