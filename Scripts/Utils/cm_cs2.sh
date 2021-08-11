#!/bin/sh

Song_status=$(cmus-remote -Q | grep status | awk '{print $2}')
Song_status="$(tr '[:lower:]' '[:upper:]' <<< ${Song_status:0:1})${Song_status:1}"

Song_position=$(cmus-remote -Q | grep position | awk '{print $2}')
Song_position_minutes=$(($Song_position / 60))
Song_position_rseconds=$(( $Song_position - ($Song_position_minutes * 60) ))

[[ $Song_position_rseconds -le 9 ]] && Song_position_rseconds="0${Song_position_rseconds}" || Song_position_rseconds=$Song_position_rseconds

Song_position_final="${Song_position_minutes}:${Song_position_rseconds}"

Song_genre=$(cmus-remote -Q | grep genre | cut -d ' ' -f3-)
Song_path=$(cmus-remote -Q | grep file | cut -d ' ' -f2-)

notify-send "<b>Status:</b> $Song_status <b>Position:</b> $Song_position_final" "<b>Genre:</b> $Song_genre <b>Directory:</b> $Song_path"
