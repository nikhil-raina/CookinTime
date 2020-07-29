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

	constructor(obj: object) {
    this.id = obj.id;
    this.recipe_title = obj.recipe_title;
    this.cooking_time = obj.cooking_time;
    this.title_image = obj.title_image;
  }
}
