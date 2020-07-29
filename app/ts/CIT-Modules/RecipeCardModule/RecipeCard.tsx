/* eslint-disable prettier/prettier */
/**
 * @providesModule  RecipeCard
 * @flow
 */

import React from 'react';
import CITRecipe from '../Objects/CITRecipe';
import styles from './RecipeCardStyle';
import images from '../ImageTree';
import {
  View,
  Text,
  Image,
} from 'react-native';

interface Props {
  recipe: CITRecipe,
}

interface State {
  recipe: CITRecipe,
}

export default class RecipeCard extends React.Component<Props, State> {

  constructor(props: any){
    super(props);
  }

  render(): React.ReactElement {
    const image = this.props.recipe.title_image;
    const saveIcon = images.MAIN_SAVE_ICON;
    const cookingTimeText = this.props.recipe.cooking_time + ' - ' +
                            (this.props.recipe.cooking_time + 10) + ' min';
    return (
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.contentContainer}>
            <Image  source={image}
                    style={styles.imageContainer}/>
          </View>
          <View style={styles.contentDetailContainer}>
            <View style={styles.detailContainer}>
              <View>
                <Text style={styles.headerTextStyle}>
                  {this.props.recipe.recipe_title}
                  {/* TODO: Currently has a 40 character limit. Need to find a way to
                  make sure that the text shrinks if it exceeds the limit. */}
                </Text>
              </View>
              <Text style={styles.timeTextStyle}>
                {cookingTimeText}
              </Text>
            </View>
            <View style={styles.saveIconContainer}>
              {/* TODO: Make this clickable to bring in the Save feature for the account */}
              <Image  source={saveIcon}
                      style={styles.saveIconStyle}/>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
