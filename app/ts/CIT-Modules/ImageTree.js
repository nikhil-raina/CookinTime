/* eslint-disable prettier/prettier */
/**
 * @providesModule ImageTree
 * @flow
 */

//  TODO: need to figure out how will I go about showing which image depending on the screen resolution later on.
//  TODO: need to create more images for different screens for each OS. tablet, iPad, different phone sizes
const images = {

  // Welcome Screen Images
  WELCOME_BACKGROUND: require('../../assets/images/WelcomeScreen/drawable-hdpi/WelcomeScreen-Background.png'),
  LOGO: require('../../assets/images/WelcomeScreen/WelcomeScreen-Logo.png'),
  LOGO_SHADOW: require('../../assets/images/WelcomeScreen/drawable-hdpi/WelcomeScreen-LogoShadow.png'),

  // Login Screen Images
  LOGIN_GOOGLE_LOGO: require('../../assets/images/LoginScreen/LoginScreen-Gmail_Logo.png'),
  LOGIN_GOOGLE_LOGO_SHADOW: require('../../assets/images/LoginScreen/drawable-hdpi/LoginScreen-Gmail_LogoShadow.png'),
  LOGIN_EMAIL_LOGO: require('../../assets/images/LoginScreen/LoginScreen-Email_Logo.png'),
  LOGIN_EMAIL_LOGO_SHADOW: require('../../assets/images/LoginScreen/drawable-hdpi/LoginScreen-Email_LogoShadow.png'),
  LOGIN_FACEBOOK_LOGO: require('../../assets/images/LoginScreen/LoginScreen-Facebook_Logo.png'),
  LOGIN_FACEBOOK_LOGO_SHADOW: require('../../assets/images/LoginScreen/drawable-hdpi/LoginScreen-Facebook_LogoShadow.png'),
  LOGIN_BACKGROUND: require('../../assets/images/LoginScreen/drawable-hdpi/LoginScreen_Background.png'),

  // Registration Screen Images
  REGISTRATION_DEFAULT_PROFILE_PICTURE: require('../../assets/images/RegistrationScreen/RegistrationScreen-ProfilePicture.png'),
  REGISTRATION_DEFAULT_PROFILE_PICTURE_SHADOW: require('../../assets/images/RegistrationScreen/drawable-hdpi/RegistrationScreen-ProfilePictureShadow.png'),
  REGISTRATION_BACKGROUND: require('../../assets/images/RegistrationScreen/drawable-hdpi/RegistrationScreen-Background.png'),

  // Main Screen Images
  MAIN_COOKBOOK_ICON: require('../../assets/images/MainScreen/MainScreen-CookBook_Icon.png'),
  MAIN_SAVE_ICON: require('../../assets/images/MainScreen/MainScreen-Save_Icon.png'),
  MAIN_SAVE_SHELL_ICON: require('../../assets/images/MainScreen/MainScreen-Save_Shell_Icon.png'),
  MAIN_SAVE_PLATE_ICON: require('../../assets/images/MainScreen/MainScreen-Save_Plate_Icon.png'),
  MAIN_SEARCH_GLASS_ICON: require('../../assets/images/MainScreen/MainScreen-Search_Glass_Icon.png'),
  MAIN_SETTINGS_ICON: require('../../assets/images/MainScreen/MainScreen-Settings_Icon.png'),
  fried: require('../../assets/images/MainScreen/fried-food.png'),
};

export default images;
