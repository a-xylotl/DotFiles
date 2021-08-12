#!/bin/bash
# .bashrc

alias ls='ls --color=auto'
PS1='[\u@\h \W]\$ '

# Custom path
HOMEPATH="/home/aaxylotl/Scripts"
PATH="$PATH:$HOMEPATH:$HOMEPATH/Startup:$HOMEPATH/FlatPak:$HOMEPATH/Utils"

# Fixes for flatpak apps not opening
export $(dbus-launch)
