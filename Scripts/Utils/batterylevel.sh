#!/bin/sh

battery() {
	if [[ $(acpi -a | awk '{print $3}') = *off-line* ]]
	then
		Status="🔋: ";
	#	if [[ $(cat /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor | head -1) != powersave ]]
	#	then
	#		sudo powersaving.sh
	#	fi	
	else
		Status="🔌: ";	
	#	if [[ $(cat /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor | head -1) != performance ]]
	#	then
	#		sudo performance.sh
	#	fi
	fi

	Capacity=$(cat /sys/class/power_supply/BAT0/capacity | awk '{print $1"%"}')

	if [[ $(acpi -b | awk '{print $5}') = rate ]] || [[ $(acpi -b | awk '{print $5}') = charging ]] || [[ $(acpi -b | awk '{print $5}') = discharging ]]
	then
		Remaining="Calculating..."
	elif [[ $(acpi -b | awk '{print $5}') = "" ]] || [ -z $(acpi -b | awk '{print $5}') ]
	then
		Remaining="Done"
	elif [[ $(acpi -b | awk '{print $5}') = "until" ]]
	then
		Remaining=Unknown
	else
		Remaining=$(acpi -b | awk '{print $5}')
	fi

	if [[ $(acpi -b | awk '{print $1}') == "" ]]
	then
		echo ${Status} No battery
	else
		echo ${Status}${Capacity}, ${Remaining}
	fi

	if [[ $(acpi -b | awk '{print $4}' | tr -d %,) -le 5 ]] && [[ $(acpi -b | awk '{print $3}') != 'Charging' ]]
	then
		twmnc -t "Battery level critical!" -c "System hibernating in 10 seconds"
		sleep 10
		if [[ $(acpi -a | awk '{print $3}') = *off-line* ]]
		then
			systemctl hibernate
		fi
	fi
}

battery
