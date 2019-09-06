const { RemoteBrowserTarget } = require('happo.io');

module.exports = {
    apiKey: '0d883eaa86',
    apiSecret: '06013ad6d1e96f6309d280d48',
    pages: [
          { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-crc-headcount-static.default.html', title: 'CRC Headcount'},
          { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-call-to-action-default.default.html', title: 'Call To Action'},
          { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-catalog-course-default.default.html', title: 'Catalog Course'},
          { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-catalog-course-list-default.default.html', title: 'Catalog Course List'},
          { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-catalog-print-default.default.html', title: 'Catalog Print'},
          { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-catalog-print-default.default.html', title: 'Catalog Search'},
          { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-countdown-timer-default.default.html', title: 'Countdown Timer'},
          { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-donation-ticker-default.default.html', title: 'Donation Ticker'},
          //{ url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-eventbrite-form-default.default.html', title: 'Eventbrite Form'},
          { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-events-list.default.html', title: 'Events list'},
          { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-events-slider.default.html', title: 'Events slider'},
          { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-faq-default.default.html', title: 'FAQ'},
          { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-featured-profile-with-quote.default.html', title: 'Featured Profile', variant: 'quote'},
          { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-featured-profile-without-quote.default.html', title: 'Featured Profile', variant: 'no quote'},
          { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-global-alert-default.default.html', title: 'Global Alert'},
          { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/#/components/inline-search/programs', title: 'Inline Search', variant: 'Programs'},
          { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-inline-search-website.default.html', title: 'Inline Search', variant: 'Website'},
          { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-intro-default.default.html', title: 'Intro'},
          { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-link-list-featured.default.html', title: 'Link List', variant: 'Featured'},
          { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-link-list-featured---slider.default.html', title: 'Link List', variant: 'Featured - Slider'},
          { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-link-list-featured---test---blocks-with-reveal.default.html', title: 'Link List', variant: 'Featured - Test - Blocks with Reveal'},
          //{ url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-main-content-content.default.html', title: 'Main Content'},
          { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-media-list-list.default.html', title: 'Media', variant: 'List'},
          { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-news-list.default.html', title: 'News', variant: 'List'},
          { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-person-bio-default.default.html', title: 'Person Bio'},
          { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/#/components/person-list/show-photos', title: 'Person List', variant: 'Show Photos'},
          { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-person-list-hide-photos.default.html', title: 'Person List', variant: 'Hide Photos'},
          { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-photo-gallery-feed-default.default.html', title: 'Photo Gallery Feed'},
          // { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-resource-list-default.default.html', title: 'Resource List'},
          // { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-simple-search-default.default.html', title: 'Simple Search'},
          // { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-sortable-list-default.default.html', title: 'Sortable List'},
          // { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-statistics-default.default.html', title: 'Statistics'},
          // { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-sticky-cta-default.default.html', title: 'Sticky CTA'},  
          // { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-tabs-default.default.html', title: 'Tabs'},        
          // { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-workshop-list-default.default.html', title: 'Workshop List'},        
          // { url: 'https://997addd2.ngrok.io/Website.UI.Template.v6.happo-url/patterns/components-iframe-default.default.html', title: 'iFrame'},                

        ],
  };


  // targets: {
  //   "chrome-small": new RemoteBrowserTarget('chrome', {
  //     viewport: '800x600',
  //   }),
  //   "chrome-large": new RemoteBrowserTarget('chrome', {
  //       viewport: '1024x900',
  //   }),
  //   'ios-safari' : new RemoteBrowserTarget('ios-safari',{
  //       viewport: '375x667',
  //     })
    
  // },