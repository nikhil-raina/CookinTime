/* eslint-disable prettier/prettier */
/**
 * @providesModule  MainScreen
 * @flow
 */

import React from 'react';
import RecipeCard from '../CIT-Modules/RecipeCardModule/RecipeCard';
import RecipeDeck from '../CIT-Modules/RecipeDeckModule/RecipeDeck';
import CITRecipe from '../CIT-Modules/Objects/CITRecipe';
import style from './MainScreenStyle';
import {
  View,
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

  render(): React.ReactElement {
    const recipe = new CITRecipe();
    return (
      <View>
        <RecipeCard recipe={recipe}/>
      </View>
    );
  }
}
