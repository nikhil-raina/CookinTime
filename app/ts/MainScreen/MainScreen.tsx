/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * @providesModule  MainScreen
 * @flow
 */

import React from 'react';
import RecipeCard from '../CIT-Modules/RecipeCardModule/RecipeCard';
import RecipeDeck from '../CIT-Modules/RecipeDeckModule/RecipeDeck';
import CITRecipe from '../CIT-Modules/Objects/CITRecipe';
import images from '../CIT-Modules/ImageTree';
import styles from './MainScreenStyle';
import {
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';

interface Props {

}

interface State {
  card: RecipeCard,
  deck: RecipeDeck,
  allDecks: Array<RecipeDeck>,
}

export default class MainScreen extends React.Component<Props, State> {

  constructor(props: any){
    super(props);
  }

  _renderHeader(): React.ReactElement {
    const logo = images.MAIN_LOGO_ICON;
    const searchIcon = images.MAIN_SEARCH_GLASS_ICON;
    const settingsIcon = images.MAIN_SETTINGS_ICON;
    const title = 'Cookin Time';
    return (
      <View style={styles.headerContainer}>
        <View style={styles.imageContainer}>
          <Image  source={logo}
                  style={styles.imageStyle}/>
        </View>
        <View style={styles.headingTextContainer}>
          <Text style={styles.headingTextStyle}>
            {title}
          </Text>
        </View>
        <View style={styles.searchGlassIconContainer}>
          <Image  source={searchIcon}
                  style={[styles.imageStyleSecondary, {height: 20}]}/>
        </View>
        <View style={styles.settingsIconConatainer}>
          <Image  source={settingsIcon}
                  style={styles.imageStyleSecondary}/>
        </View>
      </View>
    );
  }

  _renderFooter(): React.ReactElement {
    const cookBookIcon = images.MAIN_COOKBOOK_ICON;
    return (
      <View style={styles.footerOuterContainer}>
        <View style={styles.footerInnerContainer}>
          <Image  source={cookBookIcon}
                  style={styles.imageStyleFooter}/>
        </View>
      </View>
    );
  }

  render(): React.ReactElement {
    const recipe = new CITRecipe();
    return (
      <View style={styles.container}>
        {this._renderHeader()}
        <ScrollView>
          <RecipeCard recipe={recipe}/>
        </ScrollView>
        {this._renderFooter()}
      </View>
    );
  }
}
