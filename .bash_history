locale-gen
sudo nvim /etc/default/libc-locales
glibc-locales
sudo xbps-install glibc-locales
sudo xbps-reconfigure glibc-locales
sudo xbps-reconfigure glibc-locales --force
locale
sudo xbps-install paudio
sudo xbps-install alsa-plugins-pulseaudio
sudo xbps-install apulse
pipes.sh
locales
localectl
sudo update-locale
t3rHau5
sudo update-locale
sudo xbps-install update-locale
sudo nvim ~/.bash_profile
export LANG="en_US.UTF-8"
pipes.sh
pavucontrol
speaker-test
pulseaudio
pulseaudio
dbus-run-session
dbus-run-session -- dwm
sudo nvim ~/.xinitrc
alsamixer
exit
speaker-test -D front:Generic
pulseaudio
pulseaudio
pulseaudio --daemonize=no --exit-idle-time=-1
flatpak ps
flatpak kill chrome
flatpak kill com.google.Chrome
flatpak kill com.spotify.Client
flatpak kill com.spotify.Discord
flatpak kill com.discordapp.Discord
sudo xbps-install kde-gtk-config
visudo nvim
visudo
sudo visudo nvim
sudo visudo
sudo visudo | nvim
sudo nvim visudo
export EDITOR=nvim visudo
export EDITOR=nvim
EDITOR=nvim visudo
sudo EDITOR=nvim visudo
sudo EDITOR=nvim visudo
sudo EDITOR=nvim visudo
sudo EDITOR=nvim visudo
sudo zzz
sv status dbus
ln -s /etc/sv/dbus/ /var/service
sudo ln -s /etc/sv/dbus/ /var/service
sv status dbus
sudo sv status dbus
sudo sv up dbus
sudo sv status dbus
killall chrome
killall Chrome
ps -ax | grep chrome
killall /app/extra/chrome
killall flatpak
ps -ax | grep flat
flatpak list
flatpak --help
flatpak ps
flatpak-kill 1422361038
flatpak kill 1422361038
amixer sg
amixer sget
amixer sget Master
amixer sget Master
amixer sget Master
amixer sget Master
amixer sget Master
amixer sget Master
amixer sget Master
amixer sget Master
amixer list
amixer --help
amixer get 
amixer sget Master
amixer sget Master
amixer sget Master
amixer sget Master
amixer sget Master
pacmd list-sinks
GTK_THEME=Adwaita:dark
pavucontrol
GTK_THEME=Adwaita:dark pavucontrol
sudo nvim ~/.bash_profile
sudo nvim ~/.bash_profile
~/.bash_profile
sudo chmod +x ~/.bash_profile 
~/.bash_profile
pavucontrol
~/.bash_profile
sudo chmod +x ~/.bash_profile 
sudo nvim ~/.bash_profile
alsamixer
neofetch
sudo neofetch
exit
sudo neofetch
chmod 0440 /etc/sudoers
sudo chmod 0440 /etc/sudoers
exit
pactl list sinks | grep '^[[:space:]]Volume:' |     head -n $(( $SINK + 1 )) | tail -n 1 | sed -e 's,.* \([0-9][0-9]*\)%.*,\1,'
pactl list sinks
pactl help
pulseaudio stat
pulseaudio stat 0
pulseaudio stat sink0
pulseaudio 
pactl
pactl stat
info
pactl info
pactl list sinks | grep 'Mute'
pactl list sinks | grep 'Mute'
xbindkeys --poll-rc
sudo reboot
flatpak kill com.discordapp.Discord
sudo xbps-install gsmartcontrol
sudo xbps-install sysstat
sudo xbps-install wqy-microhei 
sudo xbps-install noto-fonts-cjk
ranger
sysstat
sysstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat | grep %idle
mpstat | grep all
mpstat | grep all | awk '{print $5}'
mpstat | grep all | awk '{print $6}'
mpstat | grep all | awk '{print $7}'
mpstat | grep all | awk '{print $8}'
mpstat | grep all | awk '{print $7}'
mpstat | grep all
mpstat | grep all | awk '{print $10}'
mpstat | grep all | awk '{print $9}'
mpstat | grep all | awk '{print $11}'
mpstat | grep all | awk '{print $12}'
mpstat | grep all | awk '{print $13}'
mpstat | grep all | awk '{print $13}'
mpstat | grep all | awk '{print 100 - $13"%"}'
cpuusage.sh
cpuusage.sh
cpuusage.sh
cpuusage.sh
cpuusage.sh
cpuusage.sh
cpuusage.sh
stress -c 6
sudo neofetch
clear
neofetch
sudo nvim ~/Scripts/Utils/alsa.sh 
sudo mv ~/Scripts/Utils/alsa.sh ~/Scripts/Utils/pulse.sh
sudo nvim /opt/personal-dwmblocks/blocks.h
cd /opt/personal-dwmblocks && sudo make clean install && cd ~
pulse.sh
sudo nvim ~/Scripts/Utils/pulse.sh
pulse.sh
sudo rm ~/Scripts/*.sh
ls
killall dwmblocks &
echo $GTK_THEME
echo $GTK_THEME
sudo nvim ~/.bash_profile
sudo nvim ~/.xinitrc
sudo xbps-install dolphin
cd /opt
sudo git clone https://github.com/mwh/dragon
cd dragon
sudo make clean install
sudo make install
sudo xbps-install gtk+3-devel
sudo make install
sudo nvim ~/.config/ranger/rc.conf
sudo nvim /root/.config/ranger/rc.conf
sudo nvim ~/.config/ranger/rc.conf
sudo nvim /root/.config/ranger/rc.conf
sudo nvim /root/.config/ranger/rifle.conf
ranger
dragon
sudo xbps-install dragon
dragon
sudo xbps-install dragon
ranger
cpuusage.sh
top -bn1
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
mpstat
stress -c 4
sudo xbps-install stress
stress -c 6
stress -c 12
mpstat -P ALL 2 5
mpstat -P ALL 
mpstat -P ALL 
mpstat -P ALL 1 1
mpstat -P ALL 1 1
mpstat -P ALL 1 1
mpstat -P ALL 1 1
mpstat -P ALL 1 1
mpstat -P ALL 1 1
mpstat -P ALL 1 1
mpstat -P ALL 1
htop --help
sudo xbps-install corefreq
sudo xbps-install CoreFreq
ps -eo pcpu
cat /proc/stat
cat /proc/stat | grep cpu
cat /proc/stat | grep cpu | head -n 1
cpuusage.sh
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
cat /proc/stat | grep cpu | head -n 1
stress -c 6
cat /proc/stat | grep cpu
cat /proc/stat | grep cpu
cat /proc/stat | grep cpu
cat /proc/stat | grep cpu
cat /proc/stat | grep cpu
cat /proc/stat | grep cpu
cat /proc/stat | grep cpu
cat /proc/stat | grep cpu
cat /proc/stat | grep cpu
cat /proc/stat | grep cpu
cat /proc/stat | grep cpu
cat /proc/stat | grep cpu
cat /proc/stat | grep cpu
cat /proc/stat 
BEGIN {
  prev_total = 0
  prev_idle = 0
  while (getline < "/proc/stat") {
    close("/proc/stat")
    idle = $5
    total = 0
    for (i=2; i<=NF; i++)
      total += $i
    print (1-(idle-prev_idle)/(total-prev_total))*100"%"
    prev_idle = idle
    prev_total = total
    system("sleep 1")
  }
}
  prev_total = 0
  prev_idle = 0
  while (getline < "/proc/stat") {
    close("/proc/stat")
    idle = $5
    total = 0
    for (i=2; i<=NF; i++)
      total += $i
    print (1-(idle-prev_idle)/(total-prev_total))*100"%"
    prev_idle = idle
    prev_total = total
    system("sleep 1")
  }
PREV_TOTAL=0
PREV_IDLE=0
 
while true; do
  CPU=($(sed -n 's/^cpu\s//p' /proc/stat));   IDLE=${CPU[3]} # Just the idle CPU time.
 
  TOTAL=0;   for VALUE in "${CPU[@]:0:8}"; do     TOTAL=$((TOTAL+VALUE));   done 
  DIFF_IDLE=$((IDLE-PREV_IDLE));   DIFF_TOTAL=$((TOTAL-PREV_TOTAL));   DIFF_USAGE=$(((1000*(DIFF_TOTAL-DIFF_IDLE)/DIFF_TOTAL+5)/10));   echo -en "\rCPU: $DIFF_USAGE%  \b\b" 
  PREV_TOTAL="$TOTAL";   PREV_IDLE="$IDLE" 
  sleep 1; done
cpuusage.sh
cpuusage.sh
cpuusage.sh
cpuusage.sh
cpuusage.sh
cpuusage.sh
stress -c 6
stress -c 6
touch /tmp/cpuusage_prev_total
touch /tmp/cpuusage_prev_idle
touch /tmp/cpuusage_prev_total
sudo nvim /tmp/cpuusage_prev_total
stress -c 2
stress -c 4
stress -c 12
sudo xbps-install cpupower
sudo xbps-install turbostat
cd /opt
sudo git clone https://github.com/vagnum08/cpupower-gui#manual-installation
n
sudo git clone https://github.com/vagnum08/cpupower-gui
cd cpupower-gui/
sudo xbps-install meson ninja
sudo xbps-install glib2.0
sudo xbps-install glib
sudo xbps-install turbostat
turbostat
modprobe msr
sudo modprobe msr
turbostat
sudo chmod +r /dev/cpu/*/msr turbostat
sudo chmod +r /dev/cpu/*/msr && turbostat
#
# setcap cap_sys_rawio=ep turbostat
turbostat
sudo turbostat
clear
sudo turbostat
sudo turbostat --help
sudo turbostat -S
lscpu
lscpu
lscpu | grep MHz
cat /proc/cpuinfo
cat /proc/cpuinfo
cat /proc/cpuinfo
cat /proc/cpuinfo
cat /proc/cpuinfo
sudo xbps-install OpenRGB
sudo xbps-install openrgb
cd ..
sudo git clone https://github.com/nagisa/msi-rgb
cd msi-rgb/
cargo
sudo xbps-install cargo
cargo build --release
sudo cargo build --release
sudo xbps-install python
echo -e "import colorsys, time, subprocess\ni=0\nwhile True:\n  subprocess.call(['target/release/msi-rgb', '-d511'] + list(map(lambda x: ('{0:01x}'.format(int(15*x)))*8, colorsys.hsv_to_rgb((i % 96.0) / 96.0, 0.9, 1))))\n  time.sleep(0.1)\n  i+=1" | sudo python -
./target/release/msi-rgb -h
msi-rgb
./target/release/msi-rgb -p
./target/release/msi-rgb -p FFFFFF
./target/release/msi-rgb -p FFFFFF 000000 000000
sudo ./target/release/msi-rgb -p FFFFFF 000000 000000
killall msi-rgb
killall ./target/release/msi-rgb

sudo ./target/release/msi-rgb FFFFFF 000000 000000
sudo ./target/release/msi-rgb -h
sudo ./target/release/msi-rgb -x
sudo ./target/release/msi-rgb ---disable
sudo ./target/release/msi-rgb -x 000000 000000 000000
sudo ./target/release/msi-rgb FFFFFF 000000 000000
sudo modprobe i2c-dev
sudo modprobe i2c-piix4
sudo nvim ~/.bash_profile
sudo nvim ~/.zshrc
chsh -s $(which zsh)
sudo nvim /etc/passwd
zsh
sudo nvim ~/Scripts/Startup/Xorg.sh 
sudo nvim ~/Scripts/Startup/Apps.sh 
xbindkeys
sudo xbps-install wine proton lutris steam
sudo xbps-install wine lutris steam nvidia-libs-32bit libgcc-32bit libstdc++-32bit libdrm-32bit libglvnd-32bit
sudo xbps-install wine lutris steam libgcc-32bit libstdc++-32bit libdrm-32bit libglvnd-32bit
sudo xbps-install wine lutris steam nvidia-libs-32bit libgcc-32bit libstdc++-32bit libdrm-32bit libglvnd-32bit
sudo xbps-install wine lutris steam nvidia-libs-32bit libgcc-32bit libstdc++-32bit libdrm-32bit libglvnd-32bit
sudo xbps-install multilib-nonfree
sudo xbps-install multilib-nonfree
sudo xbps-install void-multilib-nonfree
sudo xbps-install void-repo-multilib
sudo xbps-install void-repo-multilib-nonfree
xbps-install -Syv void-repo-multilib{,-nonfree}
sudoxbps-install -Syv void-repo-multilib{,-nonfree}
sudo xbps-install -Syv void-repo-multilib{,-nonfree}
sudo xbps-install nvidia nvidia-libs-32bit
ranger
sudo xbps-install zsh
zsh
zsh
sudo chmod +x ~/.bashrc
zsh
zsh
zsh
zsh
zsh
zsh
zsh
zsh
zsh
zsh
zsh
gsmartcontrol
sudo gsmartcontrol
sudo xbps-install smartctl
smartctl
smartctl -h
smartctl --all /dev/nvme1n1
sudo smartctl --all /dev/nvme1n1
sudo smartctl --all /dev/nvme0n1
sudo smartctl --all /dev/nvme1n1
clear
sudo smartctl --all /dev/nvme1n1
sudo smartctl --all /dev/nvme1n1
sudo smartctl --all /dev/nvme1n1
sudo smartctl --all /dev/nvme0n1
sudo smartctl --all /dev/nvme1n1
sudo smartctl --all /dev/nvme0n1
sudo smartctl --all /dev/nvme1n1
sudo smartctl --all /dev/nvme0n1
zsh
sudo xbps-install zsh-syntax-highlighting zsh-vim-mode zsh-autocomplete
sudo xbps-install zsh-syntax-highlighting zsh-autocomplete
sudo xbps-install zsh-syntax-highlighting
ls ~/
ls -h ~/
ls -a ~/
where
what
which zsh-syntax-highlighting
zsh
