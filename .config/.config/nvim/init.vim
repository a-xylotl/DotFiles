:set number relativenumber
:set nu rnu
syntax on

autocmd BufWritePost Notes.ms !(groff -ms /home/aaxyl/Documents/Study/CCNA/Notes.ms -T pdf -U > /home/aaxyl/Documents/Study/CCNA/Notes.pdf 2> /dev/null)

