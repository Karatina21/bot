import { website_name } from '@/utils/site-config';
import { getStaticUrl } from '../url';
import { deriv_urls } from '../url/constants';

// ✅ Force a valid App ID (Replace this with the correct one)
const APP_ID = '68848'; 

export const redirectToLogin = (is_logged_in: boolean, language: string, redirect_delay = 0) => {
    if (!is_logged_in) {
        console.log("🔹 User is not logged in. Redirecting...");
        const redirect_url = window.location.href;
        sessionStorage.setItem('redirect_url', redirect_url);

        setTimeout(() => {
            const login_page = loginUrl(language);
            console.log("🔄 Redirecting to login:", login_page);
            window.location.href = login_page;
        }, redirect_delay);
    }
};

export const redirectToSignUp = () => {
    const signup_url = getStaticUrl('/signup/');
    console.log("🔄 Redirecting to sign up:", signup_url);
    window.open(signup_url);
};

export const loginUrl = (language: string): string => {
    console.log("🔹 Generating login URL...");

    const oauth_url = `https://oauth.${deriv_urls.DERIV_HOST_NAME}/oauth2/authorize` +
                      `?app_id=${APP_ID}&l=${language}&brand=${website_name.toLowerCase()}`;

    console.log("✅ Final Login URL:", oauth_url);
    return oauth_url;
};
