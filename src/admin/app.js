import logo from "./extensions/logo.png";
import favicon from "./extensions/favicon.png";

const config = {
  locales: ["en"],
  head: {
    favicon: favicon,
  },
  auth: {
    logo: logo,
  },
  menu: {
    logo: logo,
  },
  tutorials: false,
  notifications: {
    release: false,
  },
  theme: {
    colors: {
      primary100: "#f6ecfc",
      primary200: "#e0c1f4",
      primary500: "#ac73e6",
      primary600: "#9736e8",
      primary700: "#8312d1",
      danger700: "#b72b1a",
    },
  },
  translations: {
    en: {
      "Auth.form.button.login.strapi": "Log in via ContentQL",
      "app.components.LeftMenu.navbrand.title": "Dashboard",
      "Auth.form.register.subtitle":
        "Credentials are only used to authenticate in ContentQL. All saved data will be stored in your database.",
      "Auth.form.welcome.subtitle": "Log in to your ContentQL account",
      "Auth.form.welcome.title": "Welcome to ContentQL!",
      "HomePage.welcome.congrats.content":
        "You are logged in as the first administrator. To discover the powerful features provided by ContentQL,",
      "Settings.application.ee.admin-seats.add-seats":
        "{isHostedOnStrapiCloud, select, true {Add seats} other {Contact sales}}",
      "Settings.application.strapi-version": "ContentQL version",
      "Settings.application.strapiVersion": "ContentQL version",
      "Settings.permissions.users.listview.header.subtitle":
        "All the users who have access to the ContentQL admin panel",
      "admin.pages.MarketPlacePage.offline.subtitle":
        "You need to be connected to the Internet to access ContentQL Market.",
      "admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi":
        "Made by ContentQL",
      "admin.pages.MarketPlacePage.plugin.tooltip.verified":
        "Plugin verified by ContentQL",
      "admin.pages.MarketPlacePage.plugin.version":
        'Update your ContentQL version: "{strapiAppVersion}" to: "{versionRange}"',
      "admin.pages.MarketPlacePage.plugin.version.null":
        'Unable to verify compatibility with your ContentQL version: "{strapiAppVersion}"',
      "admin.pages.MarketPlacePage.subtitle": "Get more out of ContentQL",
      "admin.pages.MarketPlacePage.tab-group.label":
        "Plugins and Providers for ContentQL",
      "app.components.BlockLink.blog.content":
        "Read the latest news about ContentQL and the ecosystem.",
      "app.components.BlockLink.cloud": "ContentQL Cloud",
      "app.components.BlockLink.tutorial.content":
        "Follow step-by-step instructions to use and customize ContentQL.",
      "app.components.HomePage.welcomeBlock.content":
        "Congrats! You are logged as the first administrator. To discover the powerful features provided by ContentQL, we recommend you to create your first Content type!",
      "app.components.HomePage.welcomeBlock.content.again":
        "We hope you are making progress on your project! Feel free to read the latest news about ContentQL. We are giving our best to improve the product based on your feedback.",
      "app.components.MarketplaceBanner":
        "Discover plugins built by the community, and many more awesome things to kickstart your project, on ContentQL Marketplace.",
      "app.components.MarketplaceBanner.image.alt": "A ContentQL rocket logo",
      "app.components.NpsSurvey.banner-title":
        "How likely are you to recommend ContentQL to a friend or colleague?",
      "components.AutoReloadBlocker.description":
        "Run ContentQL with one of the following commands:",
      "global.plugins.sentry.description":
        "Send ContentQL error events to Sentry.",
      "notification.ee.warning.over-.message":
        "Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} AT_LIMIT {re-enable}} Users. If you already did it but it's not reflected in ContentQL yet, make sure to restart your app.",
      "notification.version.update.message":
        "A new version of ContentQL is available!",
    },
  },
};

const bootstrap = (app) => {
  // console.log(app);
};

export default {
  config,
  bootstrap,
};
