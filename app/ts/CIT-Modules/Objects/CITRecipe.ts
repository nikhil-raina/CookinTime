/* eslint-disable prettier/prettier */
/**
 * @providesModule CITRecipe
 * @flow
 */

import {
  Image,
} from 'react-native';


export default class CITRecipe {
  id:                  number;
  recipe_title:        string;
  recipe_images:       Array<Image>;
  title_image:         Image;
  cooking_time:        number;   // Minutes
  prep_time:           number;   // Minutes
  is_saved:            boolean;
  created_at:          string;
  instructions:        Array<String>;
  ingredients:         Array<String>;

	constructor() {}
}
