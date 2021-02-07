class UserInfoWidgetInventoryItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collectible: props.collectible
    };
  }

  getSerialNumberTooltip() {
    let serialNumbers = this.state.collectible.serialNumbers;

    if (serialNumbers.length === 1 && serialNumbers[0]) {
      return `#${serialNumbers[0]}/${this.state.collectible.assetStock}`;
    }

    return "";
  }

  renderNumberContainer() {
    let serialNumbers = this.state.collectible.serialNumbers;

    if (serialNumbers.length > 1) {
      return React.createElement("span", {
        class: "limited-number-container"
      }, React.createElement("span", {
        class: "font-caption-header"
      }, "x"), React.createElement("span", {
        class: "font-caption-header text-subheader limited-number"
      }, global.addCommas(serialNumbers.length)));
    }

    if (serialNumbers[0]) {
      return React.createElement("span", {
        class: "limited-number-container"
      }, React.createElement("span", {
        class: "font-caption-header"
      }, "#"), React.createElement("span", {
        class: "font-caption-header text-subheader limited-number"
      }, serialNumbers[0]));
    }

    return React.createElement("span", null);
  }

  render() {
    return React.createElement("li", {
      class: "item-card list-item"
    }, React.createElement("div", {
      class: "item-card-container"
    }, React.createElement("a", {
      class: "item-card-link",
      href: Roblox.catalog.getAssetUrl(this.state.collectible.assetId, this.state.collectible.assetName)
    }, React.createElement("div", {
      class: "item-card-thumb-container"
    }, React.createElement(Thumbnail, {
      thumbnailType: Roblox.thumbnails.types.asset,
      thumbnailTargetId: this.state.collectible.assetId
    }), React.createElement("span", {
      class: "limited-icon-container",
      title: this.getSerialNumberTooltip()
    }, React.createElement("span", {
      class: "icon-shop-limited"
    }), this.renderNumberContainer())), React.createElement("div", {
      class: "item-card-name",
      title: this.state.collectible.assetName
    }, this.state.collectible.assetName)), React.createElement("div", {
      class: "item-card-caption"
    }, React.createElement("div", {
      class: "text-overflow item-card-price"
    }, React.createElement("span", {
      class: "icon icon-robux-16x16"
    }), React.createElement("span", {
      class: "text-robux ng-binding"
    }, this.state.collectible.recentAveragePrice !== Infinity ? global.addCommas(this.state.collectible.recentAveragePrice) : "Priceless")))));
  }

}