class ItemOwners extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      loadError: false,
      assetId: props.assetId,
      sortOrder: "Asc",
      owners: []
    };
    this.itemOwnersPager = new CursorPager(100, 100, pagingParameters => {
      return this.loadPage(pagingParameters);
    });
  }

  init() {
    this.setState({
      loading: true
    });
    this.itemOwnersPager.loadFirstPage().then(data => this.handlePageLoad(data)).catch(err => {
      if (err.type === cursorPaginationConstants.errorType.getItemsFailure) {
        setTimeout(() => this.init(), 10 * 1000);
      } else {
        this.handleError(err);
      }
    });
  }

  loadPage(pagingParameters) {
    this.setState({
      loading: true,
      loadError: false
    });
    return new Promise((resolve, reject) => {
      Roblox.inventory.getAssetOwners(this.state.assetId, pagingParameters.cursor, this.state.sortOrder).then(data => {
        resolve({
          nextPageCursor: data.nextPageCursor,
          items: data.data.map(ownershipRecord => {
            ownershipRecord.updated = new Date(ownershipRecord.updated);
            ownershipRecord.created = new Date(ownershipRecord.created);
            return ownershipRecord;
          })
        });
      }).catch(reject);
    });
  }

  changeSortOrder(event) {
    this.setState({
      sortOrder: event.target.value
    });
    setTimeout(() => this.loadFirstPage(), 10);
  }

  loadFirstPage() {
    this.itemOwnersPager.loadFirstPage().then(data => this.handlePageLoad(data)).catch(err => this.handleError(err));
  }

  loadNextPage() {
    this.itemOwnersPager.loadNextPage().then(data => this.handlePageLoad(data)).catch(err => this.handleError(err));
  }

  loadPreviousPage() {
    this.itemOwnersPager.loadPreviousPage().then(data => this.handlePageLoad(data)).catch(err => this.handleError(err));
  }

  handlePageLoad(data) {
    this.setState({
      loading: false,
      owners: data
    });
  }

  handleError(err) {
    if (err.type !== cursorPaginationConstants.errorType.getItemsFailure) {
      return;
    }

    this.setState({
      loading: false,
      loadError: true
    });
    console.error(err.data);
    setTimeout(() => {
      this.itemOwnersPager.getCurrentPage().then(data => this.handlePageLoad(data)).catch(err => this.handleError(err));
    }, 2000);
  }

  getSerialNumber(ownershipRecord) {
    if (!ownershipRecord.serialNumber) {
      return "";
    }

    return React.createElement("span", null, React.createElement("span", {
      class: "separator"
    }, "-"), React.createElement("span", {
      class: "font-caption-body serial-number"
    }, `Serial #${ownershipRecord.serialNumber}`));
  }

  renderPager() {
    if (!this.itemOwnersPager.canLoadNextPage && !this.itemOwnersPager.canLoadPreviousPage) {
      return "";
    }

    return React.createElement("div", {
      class: "pager"
    }, React.createElement("div", {
      class: "select-group rbx-select-group"
    }, React.createElement("select", {
      class: "input-field select-option rbx-select",
      value: this.state.sortOrder,
      onChange: this.changeSortOrder.bind(this)
    }, React.createElement("option", {
      value: "Asc"
    }, "Ascending"), React.createElement("option", {
      value: "Desc"
    }, "Descending")), React.createElement("span", {
      class: "icon-arrow icon-down-16x16"
    })), React.createElement("ul", {
      class: "pager"
    }, React.createElement("li", {
      class: "first" + (this.itemOwnersPager.canLoadPreviousPage ? "" : " disabled"),
      onClick: this.loadFirstPage.bind(this)
    }, React.createElement("a", null, React.createElement("span", {
      class: "icon-first-page"
    }))), React.createElement("li", {
      class: "pager-prev" + (this.itemOwnersPager.canLoadPreviousPage ? "" : " disabled"),
      onClick: this.loadPreviousPage.bind(this)
    }, React.createElement("a", null, React.createElement("span", {
      class: "icon-left"
    }))), React.createElement("li", {
      class: "pager-count"
    }, React.createElement("span", null, "Page ", this.itemOwnersPager.currentPageNumber)), React.createElement("li", {
      class: "pager-next" + (this.itemOwnersPager.canLoadNextPage ? "" : " disabled"),
      onClick: this.loadNextPage.bind(this)
    }, React.createElement("a", null, React.createElement("span", {
      class: "icon-right"
    }))), React.createElement("li", {
      class: "last disabled"
    }, React.createElement("a", null, React.createElement("span", {
      class: "icon-last-page"
    })))));
  }

  renderOwners() {
    return this.state.owners.map(ownershipRecord => {
      let ownedSince = `${ownershipRecord.updated.toLocaleDateString()} ${ownershipRecord.updated.toLocaleTimeString()}`;

      if (!ownershipRecord.owner) {
        return React.createElement("li", {
          class: "list-item"
        }, React.createElement("span", {
          class: "list-header"
        }, React.createElement(Thumbnail, {
          thumbnailType: Roblox.thumbnails.types.userHeadshot,
          thumbnailTargetId: 0
        })), React.createElement("div", {
          class: "rplus-ownership-info"
        }, React.createElement("span", {
          class: "text-label username"
        }, "Private Inventory"), this.getSerialNumber(ownershipRecord), React.createElement("br", null), React.createElement("span", {
          class: "text-secondary"
        }, "Owner since: ", ownedSince)));
      }

      return React.createElement("li", {
        class: "list-item"
      }, React.createElement("a", {
        class: "list-header",
        href: Roblox.users.getProfileUrl(ownershipRecord.owner.userId)
      }, React.createElement(Thumbnail, {
        thumbnailType: Roblox.thumbnails.types.userHeadshot,
        thumbnailTargetId: ownershipRecord.owner.userId
      })), React.createElement("div", {
        class: "rplus-ownership-info"
      }, React.createElement("a", {
        class: "text-name username",
        href: Roblox.users.getProfileUrl(ownershipRecord.owner.userId)
      }, ownershipRecord.owner.username), this.getSerialNumber(ownershipRecord), React.createElement("br", null), React.createElement("span", {
        class: "text-secondary"
      }, "Owner since: ", ownedSince)));
    });
  }

  render() {
    if (this.state.loading) {
      return React.createElement("div", {
        class: "rplus-item-owners"
      }, React.createElement("div", {
        class: "section-content-off"
      }, "Loading..."));
    } else if (this.state.loadError) {
      return React.createElement("div", {
        class: "rplus-item-owners"
      }, React.createElement("div", {
        class: "section-content-off"
      }, "Failed to load owners, trying again..."));
    }

    return React.createElement("div", {
      class: "rplus-item-owners"
    }, this.renderPager(), React.createElement("ul", {
      class: "vlist"
    }, this.renderOwners()));
  }

}