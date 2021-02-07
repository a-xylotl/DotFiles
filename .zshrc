~/.bashrc

alias ls="ls --color=auto"; alias nf="neofetch"; alias p="sudo pacman"
alias r="ranger"; alias cm="cmus"; alias ca="cava"

force_color_prompt=yes

xbindkeys --poll-rc

export LANG=en_US.UTF-8

export PATH="$PATH:/usr/local/bin/discord/:/home/aaxyl/Games/Mindustry:/usr/bin/color-scripts/:/home/aaxyl/Scripts/:/home/aaxyl/.local/bin"

# The following lines were added by compinstall
zstyle :compinstall filename '/home/aaxyl/.zshrc'

autoload -Uz compinit
compinit
# End of lines added by compinstall
# Lines configured by zsh-newuser-install
HISTFILE=~/.histfile
HISTSIZE=1000
SAVEHIST=2500
setopt autocd nomatch
unsetopt beep
bindkey -e
# End of lines configured by zsh-newuser-install

export PROMPT='%K{234}%F{201}'" %W %f-%F{205} %* %f%k|%K{234}%F{51} %n%f@%F{33}%m%f: %F{214}%d %f%k"$'\n'"%F{226}-->%f "

precmd() { print "" }

source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source /usr/share/zsh/plugins/zsh-autocomplete/zsh-autocomplete.plugin.zsh
