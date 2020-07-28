/* eslint-disable prettier/prettier */
/**
 * @providesModule  RecipeDeck
 * @flow
 */

import React from 'react';
import RecipeCard from '../RecipeCardModule/RecipeCard';
import styles from './RecipeDeckStyle';

interface Props {
  cards: Array<RecipeCard>,
  title: String,
}

interface State {
  cards: Array<RecipeCard>,
}

export default class RecipeDeck extends React.Component<Props, State> {

  constructor(props: any){
    super(props);
  }

}