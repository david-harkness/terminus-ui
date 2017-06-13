import { Component, Input } from '@angular/core';

import { ButtonActionTypes } from './../../types/button-action.types';
import { ButtonFunctionTypes } from './../../types/button-function.types';
import { StyleThemeTypes } from './../../types/style-theme.types';


/**
 * A presentational component to render a button
 *
 * @example
 * <t-button
 *   actionName="Submit"
 *   buttonStyle="accent"
 *   buttonType="search"
 *   iconName="search"
 *   isDisabled="false"
 *   showProgress="true"
 * ></t-button>
 */
@Component({
  selector: 't-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  /**
   * Define the action for the aria-label
   */
  @Input() actionName: ButtonActionTypes = 'Button';

  /**
   * Define the button style
   */
  @Input() buttonStyle: StyleThemeTypes = 'primary';

  /**
   * Define the button type
   */
  @Input() buttonType: ButtonFunctionTypes = 'button';

  /**
   * Define a Material icon to include
   */
  @Input() iconName: string;

  /**
   * Define if the button is disabled
   */
  @Input() isDisabled: boolean = false;

  /**
   * Define if the progress indicator should show
   */
  @Input() showProgress: boolean = false;


}
