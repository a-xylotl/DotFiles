#!/bin/sh

pulse() {
	STATUS=$(pactl list sinks | grep 'Mute')
	VOL=$(pactl list sinks | grep '^[[:space:]]Volume:' | \
		head -n $(( $SINK + 1 )) | tail -n 1 | sed -e 's,.* \([0-9][0-9]*\)%.*,\1,')
	printf "%s" "$SEP1"
	if [ "$STATUS" = "yes" ]; then
		printf "🔇"
	else
		if [ "$VOL" -ge 0 ] && [ "$VOL" -le 33 ]; then
            		printf "🔈: %s%%" "$VOL"
        	elif [ "$VOL" -gt 33 ] && [ "$VOL" -le 66 ]; then
            		printf "🔉: %s%%" "$VOL"
        	else
            		printf "🔊: %s%%" "$VOL"
        	fi
	fi
    printf "%s\n" "$SEP2"
}

pulse
