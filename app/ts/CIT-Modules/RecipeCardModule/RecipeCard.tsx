/* eslint-disable prettier/prettier */
/**
 * @providesModule  RecipeCard
 * @flow
 */

import React from 'react';
import CITRecipe from '../Objects/CITRecipe';
import style from './RecipeCardStyle';
import {
  View,
  Text,
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
    return(
      <View>
        <Text>
          {'Hello'}
        </Text>
      </View>
    );
  }
}
