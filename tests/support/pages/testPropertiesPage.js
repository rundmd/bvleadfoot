/**
 * Created by brendon.kelley on 7/13/16.
 */
define({
    SUBMISSION_URL:'https://submit-stg.curations.bazaarvoice.com/?client=curations-one&productId=product1&group=pie-test&locale=de_DE',
    /*UPLOAD_PHOTO_TEXT: "Ein Foto hochladen",
    UPLOAD_VIDEO_TEXT: "laden Sie ein Video",
    TAKE_PHOTO_TEXT:   "Ein Foto machen",
    UPLOAD_FACEBOOK_TEXT: "Von Facebook auswählen",
    UPLOAD_INSTA_TEXT: "Von Instagram auswählen",
    COMMENT_TEXT: "Kommentar",
    NICKNAME_TEXT: "Spitzname",
    RIGHTS_MANG_TEXT: "Ich stimme den Allgemeine Geschäftsbedingungen zu",
    POST_BTN_TEXT: "Post",
    BACK_BTN_TEXT: "Zurück",*/
    UPLOAD_PHOTO_LOCATOR: '//*[@id="index"]/div[2]/div[2]/div/div/div/div/label',
    TAKE_PHOTO_LOCATOR: '//*[@id="index"]/div[2]/div[2]/div/div/div/div/button[1]',
    UPLOAD_VIDEO_LOCATOR: '//*[@id="index"]/div[2]/div[2]/div/div/div/div/button[2]',
    UPLOAD_FB_LOCATOR: '//*[@id="index"]/div[2]/div[2]/div/div/div/div/button[3]',
    UPLOAD_INSTA_LOCATOR: '//*[@id="index"]/div[2]/div[2]/div/div/div/div/button[4]',
    UPLOAD_PHOTO_ID: '//*[@id="UploadPhoto"]',
    COMMENT_LOCATOR: '//*[@id="caption"]/div[2]/div[2]/div/div/div/form/div/textarea',
    NICKNAME_LOCATOR: '//*[@id="caption"]/div[2]/div[2]/div/div/div/form/div/input',
    RM_LOCATOR: '//*[@id="caption"]/div[2]/div[2]/div/div/div/form/label',
    BACK_BTN_LOCATOR: '//*[@id="caption"]/div[2]/div[1]/header/button',
    SUBMIT_BTN_LOCATOR: '//*[@id="caption"]/div[2]/div[2]/div/div/div/form/button',


    /*var VIEWS = {
        // german: {text: 'german', clearLocator: elements.GERMAN_CLEAR_LOCATOR},
        //french: {text: 'french', clearLocator: elements.FRENCH_CLEAR_LOCATOR},
        0: {post_mod: betaProperties.POST1_MODERATION_LOCATOR, post_icon: betaProperties.POST1_ICON_LOCATOR, post_tag: betaProperties.POST1_TAGGING_LOCATOR, post_close: betaProperties.CLOSE_BTN_LOCATOR},
        1: {post_mod: betaProperties.POST2_MODERATION_LOCATOR, post_icon: betaProperties.POST2_ICON_LOCATOR, post_tag: betaProperties.POST2_TAGGING_LOCATOR, post_close: betaProperties.CLOSE2_BTN_LOCATOR},
        2: {post_mod: betaProperties.POST3_MODERATION_LOCATOR, post_icon: betaProperties.POST3_ICON_LOCATOR, post_tag: betaProperties.POST3_TAGGING_LOCATOR, post_close: betaProperties.CLOSE_BTN_LOCATOR}
    }*/

    lang: {
        de_De: {SUBMISSION_URL: 'https://submit-stg.curations.bazaarvoice.com/?client=curations-one&productId=product1&group=pie-test&locale=de_DE',UPLOAD_PHOTO_TEXT: 'Ein Foto hochladen', UPLOAD_VIDEO_TEXT: 'laden Sie ein Video', TAKE_PHOTO_TEXT:'Ein Foto machen',UPLOAD_FACEBOOK_TEXT: 'Von Facebook auswählen', UPLOAD_INSTA_TEXT:'Von Instagram auswählen',COMMENT_TEXT:'Kommentar',NICKNAME_TEXT:'Spitzname',RIGHTS_MANG_TEXT:'Ich stimme den Allgemeine Geschäftsbedingungen zu',POST_BTN_TEXT:'Post',BACK_BTN_TEXT:'Zurück'}
    }
});