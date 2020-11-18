import Component from '@glimmer/component';

const TWEET_INTENT = 'https://twitter.com/intent/tweet';

export default class ShareButtonComponent extends Component {

    // Get the selected Detailed-Rental URL
    get currentURL() {
        return window.location.href;
    }

    // Build the appropiate URL
    get shareURL() {
        let url = new URL(TWEET_INTENT);

        url.searchParams.set('url', this.currentURL);

        if (this.args.text) {
            url.searchParams.set('text', this.args.text);
        }

        if (this.args.hashtags) {
            url.searchParams.set('hashtags', this.args.hashtags);
        }

        if (this.args.via) {
            url.searchParams.set('via', this.args.via);
        }

        return url;
    }

}
