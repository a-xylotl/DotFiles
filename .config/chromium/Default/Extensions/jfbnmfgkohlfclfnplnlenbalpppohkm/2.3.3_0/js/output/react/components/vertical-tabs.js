class VerticalTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: props.defaultTab || props.tabs[0]
    };
  }

  selectTab(tab) {
    this.setState({
      activeTab: tab
    });
  }

  render() {
    let verticalTabs = this;
    let activeTab = this.state.activeTab;
    let tabListItems = [];
    let tabContentDivs = [];
    this.props.tabs.forEach(function (tab) {
      let tabContent = React.createElement(tab.class, tab.props || {});
      tabListItems.push(React.createElement("li", {
        className: "menu-option" + (tab === activeTab ? " active" : ""),
        onClick: verticalTabs.selectTab.bind(verticalTabs, tab)
      }, React.createElement("a", {
        class: "rbx-tab-heading"
      }, React.createElement("span", {
        class: "font-caption-header"
      }, tab.label))));
      tabContentDivs.push(React.createElement("div", {
        className: "tab-pane" + (activeTab === tab ? " active" : "")
      }, tabContent));
    });
    return React.createElement("div", {
      class: "menu-vertical-container"
    }, React.createElement("ul", {
      class: "menu-vertical"
    }, tabListItems), React.createElement("div", {
      class: "tab-content rbx-tab-content"
    }, tabContentDivs));
  }

}