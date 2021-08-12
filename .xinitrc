#!/bin/sh

~/Scripts/Startup/XTheme.sh
~/Scripts/Startup/Xorg.sh
exec dbus-run-session -- dwm
