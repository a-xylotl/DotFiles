class PremiumPayoutsSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      errorMessage: "",
      actualRobuxEarned: 0,
      projectedRobuxEarned: 0
    };
    this.componentWillReceiveProps(props);
  }

  init(universeId, startDate, endDate) {
    this.setState({
      loading: true,
      errorMessage: ""
    });
    Roblox.economy.getPremiumPayouts(universeId, startDate, endDate).then(data => {
      let actualRobuxEarned = 0;
      let projectedRobuxEarned = 0;
      data.forEach(payout => {
        switch (payout.type) {
          case "Projected":
            projectedRobuxEarned += payout.payoutInRobux;
            return;

          case "Actual":
            actualRobuxEarned += payout.payoutInRobux;
            return;

          default:
            console.warn("Unknown payout type", payout);
            return;
        }
      });
      this.setState({
        loading: false,
        errorMessage: "",
        actualRobuxEarned: actualRobuxEarned,
        projectedRobuxEarned: projectedRobuxEarned
      });
    }).catch(err => {
      console.error(err);
      this.setState({
        loading: false,
        errorMessage: "Failed to load premium payout summary. Please try again later."
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    const startDate = new Date(nextProps.startDate);
    const endDate = new Date(nextProps.endDate);
    this.init(nextProps.universeId, this.formatDate(startDate), this.formatDate(endDate));
  }

  formatDate(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${date.getFullYear()}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
  }

  render() {
    if (this.state.loading) {
      return React.createElement("div", null, React.createElement("h3", {
        class: "payout-title"
      }, "Summary"), React.createElement("span", {
        class: "spinner spinner-default"
      }));
    }

    if (this.state.errorMessage) {
      return React.createElement("div", null, React.createElement("h3", {
        class: "payout-title"
      }, "Summary"), React.createElement("div", {
        class: "section-content-off"
      }, this.state.errorMessage));
    }

    return React.createElement("div", null, React.createElement("h3", {
      class: "payout-title"
    }, "Summary"), React.createElement("table", {
      class: "table summary"
    }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {
      class: "text-label"
    }, "Category"), React.createElement("th", {
      class: "text-label"
    }, "Amount"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "Actual Robux Earned"), React.createElement("td", null, React.createElement("span", {
      class: "icon-robux-16x16"
    }), React.createElement("span", {
      class: "text-robux"
    }, " ", global.addCommas(this.state.actualRobuxEarned)))), React.createElement("tr", null, React.createElement("td", null, "Projected Robux"), React.createElement("td", null, React.createElement("span", {
      class: "icon-robux-16x16"
    }), React.createElement("span", {
      class: "text-robux"
    }, " ", global.addCommas(this.state.projectedRobuxEarned)))), React.createElement("tr", null, React.createElement("td", null, "Estimated Total"), React.createElement("td", null, React.createElement("span", {
      class: "icon-robux-16x16"
    }), React.createElement("span", {
      class: "text-robux"
    }, " ", global.addCommas(this.state.actualRobuxEarned + this.state.projectedRobuxEarned)))))));
  }

}

;