cnee --record --keyboard 2>/dev/null |
awk -F, -v wanted=171 '$1==7{
 down = ($2==2); keycode = $6; tod = $8;
 if(keycode==wanted){
   if(down){
     diff = tod-last
     if(diff>250){ last = tod; cmus-remote --seek +5; next } # note time of first press
     else{
       #printf "%s %s %d\n",down?"down":"up",keycode,diff
       cmus-remote --next
     }
   }else next
 }
 last = 0
}'
