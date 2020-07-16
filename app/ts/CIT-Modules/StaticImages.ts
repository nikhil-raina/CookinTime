/* eslint-disable prettier/prettier */
/**
 * @provideModules StaticImages
 * @flow
 */

import ImageTree from '../../images/ImageTree.json';

class StaticImages {

  getWelcome(element: string): string{
    switch (element.toLowerCase()) {
      case 'background':
        return ImageTree.Welcome.Background;

      case 'logo':
        return ImageTree.Welcome.Logo;

      default:
        return null;
    }
  }
}

export default new StaticImages();
