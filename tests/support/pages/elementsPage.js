define({
    BETA_TAB_LOCATOR: '//*[@href="/beta_tab/"]',
    RESULTS_COUNT_LOCATOR: '//strong[@data-reactid=".0.1.1.0.0.0"]',
    FILTER_BTN_ID: 'btn-filters',
    USERNAME_INPUT_ID: 'id_username',
    PASSWORD_INPUT_ID: 'id_password',
    LOGIN_BTN_LOCATOR: '#fm-form-login > * > button',
    PROFILE_LINK_LOCATOR: '#top-bar > *.my_profile > a',
    CHANNEL_FILTER_LOCATOR: '//*[@data-reactid=".0.1.0.0.1.0.0.1:$channels.1"]',
    LANG_FILTER_LOCATOR: '//*[@data-reactid=".0.1.0.0.1.0.0.1:$languages.1"]',
    ATTACHMENTS_FILTER_LOCATOR: '//*[@data-reactid=".0.1.0.0.1.0.0.1:$hasMedia.1"]',
    CREATION_DATE_FILTER_LOCATOR: '//*[@data-reactid=".0.1.0.0.1.0.0.$dateRange.0.1.0:$placeholder"]',
    DISPLAY_FILTER_LOCATOR: '//*[@data-reactid=".0.1.0.0.1.0.0.$displayStatus.0.$checkboxRadioWrapper.$label.$input"]',
    MODERATION_FILTER_LOCATOR: '//*[@data-reactid=".0.1.0.0.1.0.0.1:$cmsModerationStatus"]',
    TAGGING_FILTER_LOCATOR: '//*[@data-reactid=".0.1.0.0.1.0.0.1:$cmsTaggingStatus"]',
    RM_FILTER_LOCATOR: '//*[@data-reactid=".0.1.0.0.1.0.0.1:$authorPermissionStatus"]',
    CLEAR_ALL_CHANNELS_LOCATOR:  '//*[@data-reactid=".0.1.0.0.1.0.0.1:$channels.1.3.0"]',
    FACEBOOK_CLEAR_LOCATOR: '//*[@data-reactid=".0.1.0.0.1.0.0.1:$channels.1.0:$FACEBOOK.0"]',
    GOOGLEPLUS_CLEAR_LOCATOR: '//*[@data-reactid=".0.1.0.0.1.0.0.1:$channels.1.0:$GOOGLEPLUS.0"]',
    GERMAN_CLEAR_LOCATOR: '//*[@data-reactid=".0.1.0.0.1.0.0.1:$languages.1.0:$de.0"]',
    FRENCH_CLEAR_LOCATOR: '//*[@data-reactid=".0.1.0.0.1.0.0.1:$languages.1.0:$fr.0"]',
    CLEAR_ALL_LANG_LOCATOR: '//*[@data-reactid=".0.1.0.0.1.0.0.1:$languages.1.3.0"]',
    MODAL_LOCATOR: '//div[@data-reactid=".1.1.0.0"]',
    MODAL_CLOSE_BTN_LOCATOR: '//button[@class="close"]',
    MODAL_NEXT_BTN1_LOCATOR: '//button[@data-reactid=".1.1.0.0.$=11.0.0.1.0"]',
    MODAL_NEXT_BTN2_LOCATOR: '//button[@data-reactid=".1.1.0.0.$=11.0.1.1.0"]',
    MODAL_NAV_RESET_BTN_LOCATOR: '//button[@data-reactid=".1.1.0.0.$=11.0.2.1.0"]',
    MODAL_TEXT1_LOCATOR: '//p[@data-reactid=".1.1.0.0.$=11.0.0.0.1"]',
    MODAL_TEXT2_LOCATOR: '//p[@data-reactid=".1.1.0.0.$=11.0.1.0.1"]',
    MODAL_TEXT3_LOCATOR: '//p[@data-reactid=".1.1.0.0.$=11.0.2.0.1"]',
    UPLOAD_PHOTO_BTN_ID: 'UploadPhoto',
    UPLOAD_PHOTO_BTN_LOCATOR: '//*[@data-reactid=".0.1.1.0.0.0.1.0"]',
    TAKE_A_PHOTO_BTN_LOCATOR: '//*[@data-reactid=".0.1.1.0.0.0.1.1"]',
    UPLOAD_PHOTO_COMMENT_LOCATOR: '//textarea[@data-reactid=".0.1.1.0.0.0.1.0.1"]',
    UPLOAD_VIDEO_COMMENT_LOCATOR: '//textarea[@data-reactid=".0.1.1.0.0.0.1.0.2"]',
    UPLOAD_NICKNAME_LOCATOR: '//input[@data-reactid=".0.1.1.0.0.0.1.0.2"]',
    UPLOAD_VIDEO_NICKNAME_LOCATOR: '//input[@data-reactid=".0.1.1.0.0.0.1.0.3"]',
    UPLOAD_TC_ID: 'check',
    UPLOAD_TC_TEXT: '//*[@data-reactid=".0.1.1.0.0.0.1.1.1"]',
    UPLOAD_SUBMIT_BTN_LOCATOR: '//button[@data-reactid=".0.1.1.0.0.0.1.2"]',
    UPLOAD_VIDEO_BTN_LOCATOR: '//*[@data-reactid=".0.1.1.0.0.0.1.2"]',
    UPLOAD_VIDEO_BTN_LOCATOR2: '//*[@id="app-wrapper"]/div/div[2]/div[2]/div/div/div/form/div/label/input',
    UPLOAD_VIDEO_BTN2_LOCATOR: '//*[@data-reactid=".0.1.1.0.0.0.1.0.0"]',
    UPLOAD_INSTA_BTN_LOCATOR: '//button[@data-reactid=".0.1.1.0.0.0.1.4"]',
    UPLOAD_FB_BTN_LOCATOR: '//button[@data-reactid=".0.1.1.0.0.0.1.3"]',
    INSTA_USERNAME_ID: 'id_username',
    INSTA_PW_ID: 'id_password',
    INSTA_LOGIN_BTN: '#login-form > p.form-actions > input',
  // UPLOAD_INSTA_CONTENT_PHOTO: '//li[@data-reactid=".0.1.1.0.0.0.1.0.$1182265539183991492_1651059053"]',
    UPLOAD_INSTA_CONTENT_PHOTO: '//li[@data-reactid=".0.1.1.0.0.0.1.0.$1241738950658186149_1651059053"]',
    INSTA_LOGIN_LINK_LOCATOR: '//*[@id="react-root"]/section/main/article/div[2]/div[2]/p/a',
    INSTA_USERNAME_LOCATOR: '//*[@id="react-root"]/section/main/article/div[2]/div[1]/div/form/div[1]/input',
    INSTA_PW_LOCATOR: '//*[@id="react-root"]/section/main/article/div[2]/div[1]/div/form/div[2]/input',
    INSTA_LOGIN_BTN_LOCATOR: '//*[@id="react-root"]/section/main/article/div[2]/div[1]/div/form/span/button',
    INSTA_PROFILE_LOCATOR: '//a[@data-reactid=".0.2.0.0.1.1.2.0"]',
    FB_EMAIL_LOCATOR: '//*[@id="email"]',
    FB_PASSWORD_LOCATOR: '//*[@id="pass"]',
    FB_LOGIN_BTN_LOCATOR: '//*[@id="loginbutton"]',
    UPLOAD_BACK_BTN: '//*[@data-reactid=".0.1.0.0.0.1"]'
});
