~/Scripts/MouseSettings

alias ls="ls --color=auto"; alias nf="neofetch"; alias p="sudo pacman"
alias r="ranger"; alias cm="cmus"; alias ca="cava"

force_color_prompt=yes

xbindkeys --poll-rc

export PATH="$PATH:/usr/local/bin/discord/:/home/aaxyl/Games/Mindustry:/usr/bin/color-scripts/:/home/aaxyl/Scripts/"

export PS1="\[\033[38;5;6m\]\u\[$(tput sgr0)\]@\[$(tput sgr0)\]\[\033[38;5;33m\]\h\[$(tput sgr0)\]:\[$(tput sgr0)\]\[\033[38;5;178m\]\w\[$(tput sgr0)\] \\$ \[$(tput sgr0)\]"

export LS_COLORS="$(vivid generate snazzy)"
