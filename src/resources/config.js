import { encode } from 'base-64';

const config = {
    siteUrl: 'https://bashful-whistle.localsite.io/wp-json/wc/v3/',
    wcCredentials: 'consumer_key=ck_45e2bf358a12c7f2ea03125ded3640ce0647d2f6&consumer_secret=cs_7f128f12169f7d44b239890e9157e451c3668147',
    liveLinkCredentials: `Basic ${encode('clouds:squeamish')}`
};

export default config;