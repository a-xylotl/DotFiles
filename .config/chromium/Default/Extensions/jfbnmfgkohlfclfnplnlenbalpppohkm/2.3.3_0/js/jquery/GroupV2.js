﻿var RPlus = RPlus || {};
RPlus.Pages = RPlus.Pages || {};

RPlus.Pages.Group = function (pathMatch) {
	var id = Number(pathMatch[1]);
	if (!id) {
		console.warn("Could not parse group id.");
		return;
	}

	console.log("Group:", id);

	Extension.Storage.Singleton.get("groupRoleDisplay").then(function(groupRoleDisplayEnabled) {
		if (!groupRoleDisplayEnabled) {
			return;
		}

		setInterval(function () {
			$(".group-comments .list-body .text-date-hint:not([rplus])").attr("rplus", "").each(function () {
				var el = $(this);
				var posterId = Roblox.users.getIdFromUrl(el.closest(".comment.list-item").find("a[href*='/users/']").attr("href"));
				if (posterId) {
					Roblox.groups.getUserRole(id, posterId).then(function (role) {
						el.prepend($("<span>").text(role.name), " | ");
					}).catch(function (e) {
						console.error(e);
					});
				}
			});
		}, 500);
	}).catch(console.warn);

	if (id == 650266) {
		setInterval(function () {
			$(".group-comments .group-menu .dropdown-menu:not([rplus])").attr("rplus", "").each(function () {
				var el = $(this);
				var posterId = Roblox.users.getIdFromUrl(el.closest(".comment.list-item").find("a[href*='/users/']").attr("href"));
				if (posterId) {
					let listItem = $("<li>");
					let link = $("<a>").text("Trade").attr({
						"target": "_blank",
						"href": Roblox.trades.getTradeWindowUrl(posterId)
					});

					el.append(listItem.append(link));
				}
			});
		}, 100);
	}

	return {};
};

RPlus.Pages.Group.patterns = [/^\/groups\/(\d+)\//];


// WebGL3D
