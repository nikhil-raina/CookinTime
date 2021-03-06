/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
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
          {/* TODO: Make this clickable that would then show the search screen */}
          <Image  source={searchIcon}
                  style={[styles.imageStyleSecondary, {height: 20}]}/>
        </View>
        <View style={styles.settingsIconContainer}>
          {/* TODO: Make this clickable that would then show the settings screen */}
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
          {/* TODO: Make this clickable that would navigate to the cook book screen */}
          <Image  source={cookBookIcon}
                  style={styles.imageStyleFooter}/>
        </View>
      </View>
    );
  }

  render(): React.ReactElement {
    const recipeData = {
      recipe_title: 'Wings and Fries with Onion Rings',
      id: 100001,
      cooking_time: 30,
      title_image: images.fried,
    };
    const recipe = new CITRecipe(recipeData);

    const recipeCards = [];
    recipeCards.push(<RecipeCard recipe={recipe}/>);
    recipeCards.push(<RecipeCard recipe={recipe}/>);
    recipeCards.push(<RecipeCard recipe={recipe}/>);
    return (
      <View style={styles.container}>
        {this._renderHeader()}
        {/* TODO: Make sure that at least 8 to 12 decks would be available to view for the user.
        Need to test with 50 decks and be able to load the other few as the user keeps reaching the end.*/}
          <ScrollView showsVerticalScrollIndicator={false}>
            <RecipeDeck cards={recipeCards}
                        title={'New Arrivals'}/>
            <RecipeDeck cards={recipeCards}
                        title={'New Arrivals'}/>
            <RecipeDeck cards={recipeCards}
                        title={'New Arrivals'}/>
          </ScrollView>
        {this._renderFooter()}
      </View>
    );
  }
}
