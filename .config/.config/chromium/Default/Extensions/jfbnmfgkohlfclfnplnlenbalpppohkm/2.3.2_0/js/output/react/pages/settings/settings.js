class Settings extends React.Component {
  render() {
    let tabs = [{
      label: "About",
      class: About
    }, {
      label: "Navigation",
      class: NavigationSettings
    }, {
      label: "Notifications",
      class: NotificationSettings
    }, {
      label: "Other",
      class: OtherSettings
    }];
    return React.createElement("div", {
      class: "section"
    }, React.createElement("div", {
      class: "container-header"
    }, React.createElement("h1", null, "Roblox+ Settings")), React.createElement("div", null, React.createElement(VerticalTabs, {
      tabs: tabs
    })));
  }

}

if (location.search.includes("rplus")) {
  var container = $("<div id=\"rplus-settings\" class=\"page-content\">");
  var userAccount = $("#user-account").hide().after(container);
  console.log("Render Settings in #user-account (" + userAccount.length + ")");
  ReactDOM.render(React.createElement(Settings, null), container[0]);
} else {
  var li = $("<li class=\"menu-option\">");
  var a = $("<a class=\"rbx-tab-heading\">").append($("<span class=\"font-caption-header\">").text(Extension.Singleton.manifest.name)).attr("href", Extension.Singleton.manifest.homepage_url);
  $("#vertical-menu").append(li.append(a));
} // WebGL3D