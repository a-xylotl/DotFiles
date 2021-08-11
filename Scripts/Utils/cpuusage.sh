#!/bin/bash

# This section of code was made by pcolby on GitHub
# ---

PREV_TOTAL=$(cat /tmp/cpuusage_prev_total)
PREV_IDLE=$(cat /tmp/cpuusage_prev_idle)

# Get the total CPU statistics, discarding the 'cpu ' prefix.
CPU=($(sed -n 's/^cpu\s//p' /proc/stat))
IDLE=${CPU[3]} # Just the idle CPU time.

# Calculate the total CPU time.
TOTAL=0
for VALUE in "${CPU[@]:0:8}"; do
  TOTAL=$((TOTAL+VALUE))
done

# Calculate the CPU usage since we last checked.
DIFF_IDLE=$((IDLE-PREV_IDLE))
DIFF_TOTAL=$((TOTAL-PREV_TOTAL))
DIFF_USAGE=$(((1000*(DIFF_TOTAL-DIFF_IDLE)/DIFF_TOTAL+5)/10))


# Remember the total and idle CPU times for the next check.
PREV_TOTAL="$TOTAL"
PREV_IDLE="$IDLE"

echo $PREV_TOTAL > /tmp/cpuusage_prev_total
echo $PREV_IDLE > /tmp/cpuusage_prev_idle

# ---

CPUUSAGE=$DIFF_USAGE
CPUTEMP=$(sensors | grep Tdie | awk '{print $2}' | sed -r 's/.//')

echo $CPUUSAGE%, $(echo $CPUTEMP)

#°c
