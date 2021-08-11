#!/bin/sh

Cur_song=$(cmus-remote -Q)
Song_title=$(echo "$Cur_song" | awk '/\stitle\s/' | cut -d ' ' -f 3-)
Song_artist=$(echo "$Cur_song" | awk '/\sartist\s/' | cut -d ' ' -f 3-)

[[ $(echo "$Cur_song" | awk '/\salbum\s/' | cut -d ' ' -f 3- ) = "" ]] && Song_album="N/A" || Song_album=$(echo "$Cur_song" | awk '/\salbum\s/' | cut -d ' ' -f 3- )

Song_duration=$(cmus-remote -Q | grep duration | awk '{print $2}')
Song_duration_minutes=$(($Song_duration / 60))
Song_duration_rseconds=$(( $Song_duration - ($Song_duration_minutes * 60) ))

[[ $Song_duration_rseconds -le 9 ]] && Song_duration_rseconds="0${Song_duration_rseconds}" || Song_duration_rseconds=$Song_duration_rseconds

Song_duration_final="${Song_duration_minutes}:${Song_duration_rseconds}"

notify-send "<b>$Song_title - $Song_artist</b>" "<b>Album:</b> $Song_album <b>Duration:</b> $Song_duration_final"
