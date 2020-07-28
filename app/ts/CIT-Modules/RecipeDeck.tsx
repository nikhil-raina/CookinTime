/* eslint-disable prettier/prettier */
/**
 * @providesModule  RecipeDeck
 * @flow
 */

import React from 'react';
import RecipeCard from './RecipeCardModule/RecipeCard';

interface Props {
  cards: Array<RecipeCard>,
}

interface State {
  cards: Array<RecipeCard>,
}

export default class RecipeDeck extends React.Component<Props, State> {

  constructor(props: any){
    super(props);
  }

}
