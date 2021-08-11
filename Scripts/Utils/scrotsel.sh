#!/bin/bash

sleep 0.25
scrot -s /tmp/tempfile_scrot.png 2> /home/aaxylotl/scrot_error

date=$(date +"%Y-%m-%d-%H%M%S")
height=$(file /tmp/tempfile_scrot.png | awk '{for (I=1;I<NF;I++) if ($I == "x") print $(I-1)}')
width=$(file /tmp/tempfile_scrot.png | awk '{for (I=1;I<NF;I++) if ($I == "x") print $(I+1)}' | awk -F'[,]' '{print $1}')

finalfilename="${date}_${height}x${width}_scrot.png"
cp /tmp/tempfile_scrot.png /home/aaxylotl/Pictures/Screenshots/$finalfilename

rm /tmp/tempfile_scrot.png

[[ ${height} == "" || ${width} == "" ]] && exit || twmnc -t "Took a selection screenshot!" -c "To file: /home/aaxyl/Pictures/Screenshots/$finalfilename"

