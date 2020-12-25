class NavigationSettings extends SettingsTab {
  constructor(props) {
    super(props);
    this.state.counterRoundAt = 1000;
    this.state.navigationLinks = [{
      text: "Create",
      href: "/develop",
      textError: "",
      hrefError: ""
    }, {
      text: "Trade",
      href: "/my/money.aspx#/#TradeItems_tab",
      textError: "",
      hrefError: ""
    }];
    let navigationSettings = this;
    Extension.Storage.Singleton.get("navigation").then(function (navigation) {
      navigationSettings.setState({
        counterRoundAt: navigation ? navigation.counterCommas : 10000,
        navigationLinks: navigation && navigation.buttons || navigationSettings.state.navigationLinks
      });
    }).catch(console.warn);
  }

  updateCounterRoundAt(event) {
    let roundAt = event.target.value;
    this.setState({
      counterRoundAt: roundAt
    });
    Extension.Storage.Singleton.get("navigation").then(function (navigation) {
      navigation = navigation || {};
      navigation.counterCommas = roundAt;
      Extension.Storage.Singleton.blindSet("navigation", navigation);
    }).catch(console.warn);
  }

  updateNavigationLink(index, property, event) {
    let update = false;
    let navigationSettings = this;
    let value = event.target.value;
    let newState = {
      navigationLinks: this.state.navigationLinks.slice()
    };
    newState.navigationLinks[index][property] = value;

    if (property === "href") {
      if (value.startsWith("/") || value.startsWith("https://")) {
        newState.navigationLinks[index].hrefError = "";
        update = true;
      } else {
        newState.navigationLinks[index].hrefError = "Invalid URL - must start with '/' or 'https://'";
      }
    } else {
      if (/^\s*$/.test(value)) {
        newState.navigationLinks[index].textError = "Cannot be empty.";
      } else {
        newState.navigationLinks[index].textError = "";
        update = true;
      }
    }

    navigationSettings.setState(newState);

    if (!update) {
      return;
    }

    Extension.Storage.Singleton.get("navigation").then(function (navigation) {
      navigation = navigation || {};
      navigation.buttons = navigation.buttons || [{
        "text": "Create",
        "href": "/develop"
      }, {
        "text": "Trade",
        "href": "/my/money.aspx#/#TradeItems_tab"
      }];
      navigation.buttons.forEach(function (button, i) {
        if (!newState.navigationLinks[i].hrefError) {
          button.href = newState.navigationLinks[i].href;
        }

        if (!newState.navigationLinks[i].textError) {
          button.text = newState.navigationLinks[i].text;
        }
      });
      Extension.Storage.Singleton.blindSet("navigation", navigation);
    }).catch(console.warn);
  }

  blur(event) {
    if (event.keyCode === 13) {
      $(event.target).blur();
    }
  }

  render() {
    return React.createElement("div", null, React.createElement("div", {
      class: "section"
    }, React.createElement("div", {
      class: "container-header"
    }, React.createElement("h3", null, "Navigation bar")), React.createElement("div", {
      class: "section-content"
    }, React.createElement("span", {
      class: "text-lead"
    }, "Live navigation counters."), React.createElement(PillToggle, {
      getValue: this.getPillValue.bind(this, "navcounter"),
      onToggle: this.setPillValue.bind(this, "navcounter")
    }), React.createElement("div", {
      class: "rbx-divider"
    }), React.createElement("span", {
      class: "text-lead"
    }, "Side navigation bar always open."), React.createElement(PillToggle, {
      getValue: this.getPillValue.bind(this, "navigation.sideOpen"),
      onToggle: this.setPillValue.bind(this, "navigation.sideOpen")
    }), React.createElement("div", {
      class: "rbx-divider"
    }), React.createElement("span", {
      class: "text-lead"
    }, "DevEx rates on Robux."), React.createElement(PillToggle, {
      getValue: this.getPillValue.bind(this, "navigation.showDevexRate"),
      onToggle: this.setPillValue.bind(this, "navigation.showDevexRate")
    }))), React.createElement("div", {
      class: "section"
    }, React.createElement("div", {
      class: "container-header"
    }, React.createElement("h3", null, "Navigation counters")), React.createElement("div", {
      class: "section-content"
    }, React.createElement("span", {
      class: "text-lead"
    }, "Counter rounding."), React.createElement("div", {
      class: "select-group rbx-select-group"
    }, React.createElement("select", {
      class: "input-field select-option rbx-select",
      value: this.state.counterRoundAt,
      onChange: this.updateCounterRoundAt.bind(this)
    }, React.createElement("option", {
      value: "1000"
    }, "1,000"), React.createElement("option", {
      value: "10000"
    }, "10,000"), React.createElement("option", {
      value: "100000"
    }, "100,000"), React.createElement("option", {
      value: "1000000"
    }, "1,000,000"), React.createElement("option", {
      value: "10000000"
    }, "10,000,000"), React.createElement("option", {
      value: "100000000"
    }, "100,000,000")), React.createElement("span", {
      class: "icon-arrow icon-down-16x16"
    })), React.createElement("div", {
      class: "rbx-divider"
    }), React.createElement("span", {
      class: "text-description"
    }, "This is where Robux, private messages, friend requests, and trade request counts will stop displaying the full number."))), React.createElement("div", {
      class: "section rplus-navigation-link-overrides"
    }, React.createElement("div", {
      class: "container-header"
    }, React.createElement("h3", null, "Navigation link overrides")), React.createElement("div", {
      class: "section-content"
    }, React.createElement("div", {
      class: "form-group form-has-feedback" + (this.state.navigationLinks[0].hrefError ? " form-has-error" : "")
    }, React.createElement("span", {
      class: "text-lead"
    }, "Link 1"), React.createElement("input", {
      class: "form-control input-field",
      placeholder: "/develop",
      value: this.state.navigationLinks[0].href,
      onChange: this.updateNavigationLink.bind(this, 0, "href"),
      onKeyUp: this.blur
    }), React.createElement("span", {
      class: "form-control-label"
    }, this.state.navigationLinks[0].hrefError)), React.createElement("div", {
      class: "rbx-divider"
    }), React.createElement("div", {
      class: "form-group form-has-feedback" + (this.state.navigationLinks[0].textError ? " form-has-error" : "")
    }, React.createElement("span", {
      class: "text-lead"
    }, "Link 1 text"), React.createElement("input", {
      class: "form-control input-field",
      placeholder: "Create",
      value: this.state.navigationLinks[0].text,
      onChange: this.updateNavigationLink.bind(this, 0, "text"),
      onKeyUp: this.blur
    }), React.createElement("span", {
      class: "form-control-label"
    }, this.state.navigationLinks[0].textError))), React.createElement("div", {
      class: "section-content"
    }, React.createElement("div", {
      class: "form-group form-has-feedback" + (this.state.navigationLinks[1].hrefError ? " form-has-error" : "")
    }, React.createElement("span", {
      class: "text-lead"
    }, "Link 2"), React.createElement("input", {
      class: "form-control input-field",
      placeholder: "/upgrades/robux?ctx=nav",
      value: this.state.navigationLinks[1].href,
      onChange: this.updateNavigationLink.bind(this, 1, "href"),
      onKeyUp: this.blur
    }), React.createElement("span", {
      class: "form-control-label"
    }, this.state.navigationLinks[1].hrefError)), React.createElement("div", {
      class: "rbx-divider"
    }), React.createElement("div", {
      class: "form-group form-has-feedback" + (this.state.navigationLinks[1].textError ? " form-has-error" : "")
    }, React.createElement("span", {
      class: "text-lead"
    }, "Link 2 text"), React.createElement("input", {
      class: "form-control input-field",
      placeholder: "Robux",
      value: this.state.navigationLinks[1].text,
      onChange: this.updateNavigationLink.bind(this, 1, "text"),
      onKeyUp: this.blur
    }), React.createElement("span", {
      class: "form-control-label"
    }, this.state.navigationLinks[1].textError)))));
  }

}