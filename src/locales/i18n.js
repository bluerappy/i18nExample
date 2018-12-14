import I18n from 'i18n-js';

import en from './en.json';
import fr from './fr.json';

I18n.defaultLocale = 'fr';
I18n.translations = { fr, en };
I18n.fallbacks = true; // use to define list of defaults

export const t = (text, locale) => {
    return I18n.t(text, locale)
 }

export const setLocale = (code) => { I18n.locale = code}