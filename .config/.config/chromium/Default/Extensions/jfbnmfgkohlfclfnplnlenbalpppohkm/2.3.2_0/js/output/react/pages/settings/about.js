class About extends React.Component {
  constructor(props) {
    super(props);
    let about = this;
    this.state = {
      authenticatedUser: null,
      isPremium: false,
      premiumExpiration: null,
      premium: React.createElement("span", {
        class: "spinner spinner-default"
      }),
      updateLog: React.createElement("span", {
        class: "spinner spinner-default"
      }),
      updateLogDraft: "",
      updateLogPost: "",
      updateLogSaveStatus: "",
      featureList: [this.getFeatureRow("Game server pager", "On the game details page the load more servers button is turned into a pager with options to skip to the first or last page of servers."), this.getFeatureRow("Game server tracking", "On the game details page on servers it will show you which servers you have already played in. This feature will show up for Roblox+ Premium users only."), this.getFeatureRow("New server button", "On the game details page the servers tab will have a button to join a server you haven't played in yet. This feature will show up for Roblox+ Premium users only."), this.getFeatureRow("Sales + Revenue charts", "On item details pages and the group configure page charts will be added under the sales tab (or group summary tab) with sales per hour/day. This feature will show up for Roblox+ Premium users only."), this.getFeatureRow("Texture download", "A download option is added to Roblox created images."), this.getFeatureRow("Asset contents", "On item details pages a tab is added to view content the asset depends on."), this.getFeatureRow("Asset owners list", "A list of owners is added as a tab on item details pages depending on the asset type and creator."), this.getFeatureRow("Delete from inventory page", "Delete buttons are added to the inventory page for some asset types."), this.getFeatureRow("Avatar filter bar", "A text box is added to the avatar page to filter visible items down to items that match the text."), this.getFeatureRow("Roblox+ notification stream", "Clicking the extension browser icon while on a Roblox page will take over the notification stream with notifications from Roblox+."), this.getFeatureRow("Comment timer", "A timer is added to the asset comment button for how long until you can post another comment.", true), this.getFeatureRow("Unfollow all users button on Friends page", "A button is added to your friends page to unfollow all users you are not friends with.", true), this.getFeatureRow("Follow all friends button on Friends page", "A button is added to your friends page to follow all users you are friends with.", true), this.getFeatureRow("Profile sale statistics", "Buttons are added to the profile page to calculate sales of clothing with user stats.", true), this.getFeatureRow("Badge counter", "On the profile page you can calculate how many game badges a user has earned overall.", true), this.getFeatureRow("Trade.", "On the Trade. group wall if you click into the context menu, each poster has a Trade button that opens to the trade window for the poster when clicked.", true)]
    };
    RPlus.settings.get().then(settings => about.globalSettingsLoaded(settings)).catch(e => about.globalSettingsLoadFailure(e));
    Roblox.users.getAuthenticatedUser().then(user => about.authenticatedUserLoaded(user)).catch(e => about.authenticatedUserLoadFailure(e));
  }

  getFeatureRow(name, description, deprecated) {
    return React.createElement("tr", null, React.createElement("td", null, React.createElement("span", {
      class: "icon-warning" + (deprecated ? "" : " hidden")
    })), React.createElement("td", {
      class: "text-lead"
    }, name), React.createElement("td", {
      class: "text-description"
    }, description));
  }

  authenticatedUserLoaded(authenticatedUser) {
    let premiumLoaded = this.premiumLoaded.bind(this);
    let premiumLoadFailure = this.premiumLoadFailure.bind(this);

    if (authenticatedUser) {
      RPlus.premium.getPremium(authenticatedUser.id).then(premiumLoaded).catch(premiumLoadFailure);
    }

    this.setState({
      authenticatedUser: authenticatedUser
    });
  }

  authenticatedUserLoadFailure(e) {
    console.error("authenticatedUserLoadFailure", e);
    this.premiumLoadFailure(e);
  }

  premiumLoaded(premium) {
    let hubLink = React.createElement("a", {
      class: "text-link",
      target: "_blank",
      href: Roblox.games.getGameUrl(258257446, "Roblox+ Hub")
    }, "Roblox+ Hub");
    let newState = {};

    if (premium) {
      newState.isPremium = true;

      if (premium.expiration) {
        newState.premiumExpiration = new Date(premium.expiration);
        newState.premium = React.createElement("div", {
          class: "section-content"
        }, "You have Roblox+ Premium, thanks for the support!", React.createElement("br", null), "Your premium membership expires on: ", newState.premiumExpiration.toLocaleDateString(), React.createElement("br", null), "To keep premium going after this date make sure you have automatic renewal for the VIP server turned on at the ", hubLink, ".");
      } else {
        newState.premium = React.createElement("div", {
          class: "section-content"
        }, "You have a lifetime Roblox+ Premium membership! Nice!", React.createElement("br", null), "You are either a friend of WebGL3D, or bought it when it was still a t-shirt.", React.createElement("br", null), "Either way, thanks for sticking around!");
      }
    } else {
      newState.premium = React.createElement("div", {
        class: "section-content"
      }, "To get Roblox+ Premium buy a VIP server from this place: ", hubLink);
    }

    this.setState(newState);
  }

  premiumLoadFailure(e) {
    console.error("premiumLoadFailure", e);
    this.setState({
      premium: React.createElement("div", {
        class: "section-content-off"
      }, "Failed to load premium status.")
    });
  }

  setUpdateLogDraft(event) {
    this.setState({
      updateLogDraft: event.target.value
    });
  }

  viewUpdateLog(settings, event) {
    let about = this;

    if (event.target.tagName !== "TEXTAREA") {
      this.globalSettingsLoaded(settings);

      if (this.state.updateLogDraft !== this.state.updateLogPost) {
        let post = btoa(this.state.updateLogDraft);
        RPlus.settings.set({
          updateLogPost: post
        }).then(function () {
          about.setState({
            updateLogPost: atob(post),
            updateLogSaveStatus: "Saved: " + new Date().toLocaleString()
          });
        }).catch(function (e) {
          console.error(e);
          about.setState({
            updateLogSaveStatus: "Failed to save update log."
          });
        });
      }
    }
  }

  editUpdateLog(settings) {
    if (!this.state.authenticatedUser || this.state.authenticatedUser.id !== 48103520) {
      return;
    }

    this.setState({
      updateLog: React.createElement("div", {
        class: "section-content rplus-update-log-section form-group form-has-feedback",
        onDoubleClick: this.viewUpdateLog.bind(this, settings)
      }, React.createElement("textarea", {
        onChange: this.setUpdateLogDraft.bind(this),
        defaultValue: this.state.updateLogDraft
      }), React.createElement("p", {
        class: "form-control-label"
      }, this.state.updateLogSaveStatus))
    });
  }

  globalSettingsLoaded(settings) {
    let decodedPost = atob(settings.updateLogPost);
    let newState = {
      updateLog: React.createElement("div", {
        class: "section-content form-has-feedback",
        onDoubleClick: this.editUpdateLog.bind(this, settings)
      }, React.createElement("pre", {
        class: "text-description"
      }, this.state.updateLogPost || decodedPost), React.createElement("p", {
        class: "form-control-label"
      }, "Version ", Extension.Singleton.manifest.version), React.createElement("p", {
        class: "form-control-label"
      }, "Group: ", React.createElement("a", {
        class: "text-link",
        href: Roblox.groups.getGroupUrl(2518656, "Roblox+ Fan Group")
      }, "Roblox+ Fan Group")))
    };

    if (!this.state.updateLogDraft) {
      newState.updateLogDraft = decodedPost;
    }

    if (!this.state.updateLogPost) {
      newState.updateLogPost = decodedPost;
    }

    this.setState(newState);
  }

  globalSettingsLoadFailure(e) {
    console.error("globalSettingsLoadFailure", e);
    this.setState({
      updateLog: React.createElement("div", {
        class: "section-content-off"
      }, "Update log failed to load.")
    });
  }

  reloadExtension() {
    Extension.Reload().then(() => {
      setTimeout(function () {
        window.location.reload(true);
      }, 1000);
    }).catch(console.error);
  }

  render() {
    return React.createElement("div", null, React.createElement("div", {
      class: "section"
    }, React.createElement("div", {
      class: "container-header"
    }, React.createElement("h3", null, "Roblox+ Premium")), this.state.premium), React.createElement("div", {
      class: "section rplus-premium-section"
    }, React.createElement("div", {
      class: "container-header"
    }, React.createElement("h3", null, "Update Log")), this.state.updateLog), React.createElement("div", {
      class: "section"
    }, React.createElement("div", {
      class: "container-header"
    }, React.createElement("h3", null, "Disaster Recovery")), React.createElement("div", {
      class: "section-content"
    }, React.createElement("span", {
      class: "text-description"
    }, "Click button to \"turn off and back on again\"."), React.createElement("button", {
      class: "btn-control-sm acct-settings-btn",
      type: "button",
      onClick: this.reloadExtension
    }, "Reload"))), React.createElement("div", {
      class: "section rplus-feature-list"
    }, React.createElement("div", {
      class: "container-header"
    }, React.createElement("h3", null, "Feature List")), React.createElement("div", {
      class: "section-content"
    }, React.createElement("span", {
      class: "text-description"
    }, "Features listed are not configurable but are specified for transparency sake about what this extension is responsible for."), React.createElement("table", {
      class: "table table-striped"
    }, React.createElement("tbody", null, this.state.featureList)), React.createElement("div", {
      class: "rbx-divider"
    }), React.createElement("p", {
      class: "text-date-hint"
    }, React.createElement("span", {
      class: "icon-warning"
    }), " ", React.createElement("span", null, "Deprecated - These features are no longer supported. If they stop working they may not be fixed.")))), React.createElement("div", {
      class: "section rplus-privacy-policy"
    }, React.createElement("div", {
      class: "container-header"
    }, React.createElement("h3", null, "Privacy Policy")), React.createElement("div", {
      class: "section-content"
    }, React.createElement("span", {
      class: "text-description"
    }, "If you're going to use Roblox+ you should be informed of everything it does. Safety first!"), React.createElement("div", {
      class: "rbx-divider"
    }), React.createElement("h4", null, "Website Access"), React.createElement("p", {
      class: "text-description"
    }, React.createElement("span", null, "Any extension that has permission to roblox.com has just as much access to the website as you do! Roblox+ is no exception to that. Any extension that has access to roblox.com has access to anything you can do, including but not limited to:"), React.createElement("br", null), React.createElement("ul", null, React.createElement("li", null, "Your Robux"), React.createElement("li", null, "Your inventory"), React.createElement("li", null, "The games you play"), React.createElement("li", null, "The groups you're in"), React.createElement("li", null, "Your friends list"), React.createElement("li", null, "Roblox Authentication"), React.createElement("li", null, "Everything.")), React.createElement("span", null, "Why does Roblox+ need access to all of this?"), React.createElement("br", null), React.createElement("span", null, "For the most part it doesn't. ", React.createElement("b", null, "None of this data is stored."), " However - some of it used by the extension."), React.createElement("br", null), React.createElement("span", null, "For example: The extension gets your Robux count every few seconds when you turn on the live navigation counters feature."), React.createElement("br", null), React.createElement("span", null, "Another example: The extension loads your friends list every few seconds when you turn on the friend notifications so it knows who to notify you for."), React.createElement("br", null), React.createElement("span", null, "Final example: Roblox authentication tokens are accessed by this extension to launch you into games when you click buttons like the follow button on notifications when your friends play a game."), React.createElement("br", null), React.createElement("span", null, "This extension heavily utilizes your Roblox account data to improve your Roblox experience. That's the entire point of the extension. If you do not trust me as a developer to use this data securely and with good judgement to not expose you to any harm please do not use this extension."), React.createElement("br", null), React.createElement("br", null), React.createElement("span", null, "Roblox+ needs access to the roblox.com website to be able to modify the website. Without access to the website there is no way to add these features to website."), React.createElement("br", null), React.createElement("span", null, "Roblox+ has access to two other domains:"), React.createElement("br", null), React.createElement("ul", null, React.createElement("li", null, "rbxcdn.com"), React.createElement("li", null, React.createElement("a", {
      class: "text-link",
      href: "https://roblox.plus"
    }, "roblox.plus"))), React.createElement("span", null, "What are these domains?"), React.createElement("br", null), React.createElement("span", null, "rbxcdn.com is Roblox's content delivery domain. Any time the extension plays a sound (like when you get a notification) or you view asset contents on an item details page the data is loaded from an rbxcdn.com domain."), React.createElement("br", null), React.createElement("span", null, "What about roblox.plus?"), React.createElement("br", null), React.createElement("span", null, "roblox.plus is a domain owned by me (", React.createElement("a", {
      class: "text-link",
      href: "/users/48103520/profile"
    }, "WebGL3D"), "). This domain is used for two features of the extension:"), React.createElement("br", null), React.createElement("ul", null, React.createElement("li", null, "Roblox+ Premium"), React.createElement("li", null, "Roblox Catalog Notifier")), React.createElement("span", null, "To check whether or not you are a subscriber of Roblox+ Premium a request is sent to roblox.plus which includes your user Id so the Roblox+ servers can check your Roblox+ Premium subscription status. This is only done if it cannot find a subscription by checking VIP servers for the Roblox+ Hub."), React.createElement("br", null), React.createElement("span", null, "There is another time your user Id will be sent to the Roblox+ servers: Roblox Catalog Notifier notifications. Your user Id and cloud messaging token are sent to the Roblox+ servers to subscribe you to the cloud notification topics that are responsible for sending you notifications about Roblox catalog items."), React.createElement("br", null), React.createElement("span", null, "Why does the Roblox Catalog Notifier need your user Id?"), React.createElement("br", null), React.createElement("span", null, "There is a process for deciding which notifications to send to you based on whether or not you're a subscriber of Roblox+ Premium. If you have Roblox+ Premium and the catalog item that gets released is limited there will be an additional purchase option directly on the popup notification. The user id is sent to the backend to know which notification topic to subscribe you to.")), React.createElement("div", {
      class: "rbx-divider"
    }), React.createElement("h4", null, "Data"), React.createElement("p", {
      class: "text-description"
    }, React.createElement("span", null, "For the most part all data for the extension remains in the extension. All personal and Roblox data is kept inside the extension and is not sent outside of Roblox."), React.createElement("br", null), React.createElement("span", null, "There is one exception to this... your user Id. When you use the Roblox Catalog Notifier your user Id is paired with your cloud messaging token from the extension to the Roblox+ servers to send you notifications based on whether or not you have Roblox+ Premium. See above section on website access for slightly more information on this. This is the only Roblox account information that is sent to a non-Roblox server.")), React.createElement("div", {
      class: "rbx-divider"
    }), React.createElement("h4", null, "Permissions"), React.createElement("p", {
      class: "text-description"
    }, React.createElement("span", null, "The extension manifest has the following permissions listed:"), React.createElement("br", null), React.createElement("ul", null, React.createElement("li", null, React.createElement("span", null, "gcm (Google cloud messaging)"), React.createElement("ul", null, React.createElement("li", null, "Used to send notifications for the catalog notifier."))), React.createElement("li", null, React.createElement("span", null, "contextMenus"), React.createElement("ul", null, React.createElement("li", null, "Used to add context menu items when right clicking on Roblox users. Mainly, to be able to open a trade window without going to their profile."))), React.createElement("li", null, React.createElement("span", null, "webRequest (and webRequestBlocking)"), React.createElement("ul", null, React.createElement("li", null, "See Web Request Interception"))), React.createElement("li", null, React.createElement("span", null, "tts (text to speach)"), React.createElement("ul", null, React.createElement("li", null, "Used in some notifications that do not have specific sounds associated with them."))), React.createElement("li", null, React.createElement("span", null, "notifications"), React.createElement("ul", null, React.createElement("li", null, "Used to be able to display all notifications."))), React.createElement("li", null, React.createElement("span", null, "*://*.roblox.com/*")), React.createElement("li", null, React.createElement("span", null, "*://*.rbxcdn.com/*")), React.createElement("li", null, React.createElement("span", null, "*://*.roblox.plus/*"), React.createElement("ul", null, React.createElement("li", null, "See Website Access"))))), React.createElement("div", {
      class: "rbx-divider"
    }), React.createElement("h4", null, "Web Request Interception"), React.createElement("p", {
      class: "text-description"
    }, React.createElement("span", null, "Some requests to roblox.com are intercepted!"), React.createElement("br", null), React.createElement("span", null, "Yup. This extension uses webRequest and webRequestBlocking permissions to intercept and modify some requests that go to Roblox. For example: To load the authentication token for game launch additional headers are needed that are not typically accessible via XMLHttpRequest. webRequest is needed for this to add the additional request parameters necessary to launch you into game as... you!"), React.createElement("br", null), React.createElement("span", null, "There are other requests being intercepted (like knowing when you visit Roblox for the first time for the extension start notification when enabled) and I could list them all out but imagine being me for a second... what if I missed one? What if I add a new feature and forget to update the privacy policy? I don't know what's legally required or not. How much do I need to specify or forget to specify before Google pulls me off the chrome web store? Instead of me trying to go into the implementation details of every feature this extension has I invite you to the extensions source."), React.createElement("br", null), React.createElement("span", {
      class: "text-secondary"
    }, "Roblox+ source code: ", React.createElement("a", {
      class: "text-link",
      href: "https://git.roblox.plus/Chrome"
    }, "https://git.roblox.plus"))))));
  }

}