#!/bin/sh
df -h | grep "/home" | awk '{print $3"/"$2", "$5}'

