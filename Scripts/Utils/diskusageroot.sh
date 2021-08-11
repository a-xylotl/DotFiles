#!/bin/sh
df -h | grep "/dev/nvme0n1p2" | awk '{print $3"/"$2", "$5}'

