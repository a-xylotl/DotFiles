class NotificationStreamWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: []
    };
    Extension.NotificationService.Singleton.onNotificationCreated.addEventListener(this.loadNotifications.bind(this));
    Extension.NotificationService.Singleton.onNotificationClosed.addEventListener(this.loadNotifications.bind(this));
    this.loadNotifications();
  }

  loadNotifications() {
    Extension.NotificationService.Singleton.getNotifications().then(notifications => {
      this.setState({
        notifications: notifications
      });
    }).catch(console.error);
  }

  clickNotification(notification, event) {
    if (notification.metadata.url) {
      event.preventDefault();
    }

    Extension.NotificationService.Singleton.clickNotification(notification.id).then(() => {// notification clicked
    }).catch(console.error);
    ;
  }

  closeNotification(notification) {
    Extension.NotificationService.Singleton.closeNotification(notification.id).then(() => {// notification closed
    }).catch(console.error);
  }

  renderNotificationImage(notification) {
    return React.createElement("div", {
      class: "notification-image-container"
    }, React.createElement("img", {
      src: notification.icon
    }));
  }

  renderNotificationContent(notification) {
    return React.createElement("div", {
      class: "notification-item-content",
      onClick: this.clickNotification.bind(this, notification)
    }, React.createElement("div", {
      class: "notification-data-container"
    }, React.createElement("div", {
      class: "font-caption-body text"
    }, React.createElement("div", {
      class: "text-subject message-preview"
    }, notification.title), React.createElement("div", {
      class: "text-secondary message-preview"
    }, notification.context), React.createElement("div", {
      class: "text-secondary message-preview"
    }, notification.message))));
  }

  renderNotificationItem(notification) {
    if (notification.metadata.url) {
      return React.createElement("a", {
        class: "notification-item",
        href: notification.metadata.url
      }, this.renderNotificationImage(notification), this.renderNotificationContent(notification));
    }

    return React.createElement("div", {
      class: "notification-item"
    }, this.renderNotificationImage(notification), this.renderNotificationContent(notification));
  }

  renderNotifications() {
    let notifications = this.state.notifications;
    return notifications.map((notification, index) => {
      let className = "notification-stream-item";

      if (index !== notifications.length - 1) {
        className += " border-bottom";
      }

      if (notification.metadata.url) {
        className += " clickable";
      }

      return React.createElement("li", {
        class: className
      }, this.renderNotificationItem(notification), React.createElement("span", {
        class: "icon-turn-off",
        title: "Close Notification",
        onClick: this.closeNotification.bind(this, notification)
      }));
    });
  }

  render() {
    return React.createElement("ul", {
      class: "rplus-notification-stream notification-stream-list"
    }, this.renderNotifications());
  }

}