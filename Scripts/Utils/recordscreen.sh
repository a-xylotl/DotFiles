#!/bin/bash
for arg in "$@"
do
    case $arg in
        -n|--noname)
        nflag="untitled"
        shift # Remove --initialize from processing
        ;;
    esac
done

if [[ $nflag == "untitled" ]]
then
	title=untitled	
else
	title=$(echo "Short title (and/or ENTER):" | dmenu)
fi
recdir=/mnt/Internal_HDDs/ToshibaMD40_4TB/Videos/Recordings
# Check if default directory exists
if [ -d $recdir ]
then
	path=$recdir
else
	path=$HOME/Videos/Recordings
fi

if [[ $title == "" ]] || [[ $title == *"Short"* ]]
then
	exit
fi

filename=$(date +"$path/%Y%m%d-%H%M_$title.mp4")

twmnc -t "Recording now!" -c "To file: $filename"

ffmpeg -f x11grab \
	-framerate 60 -probesize 20M \
	-video_size 1920x1080 \
	-i "$DISPLAY.0+1680,0" \
	-f pulse -i default \
	-acodec libmp3lame \
	-aq 300 \
	-ab 320000 \
	-ar 48000 \
	-c:v libx264 \
	-preset fast \
	-c:a aac $filename

twmnc -t "Finished recording!" -c "To file: $filename"
