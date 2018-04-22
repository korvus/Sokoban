/*
" "--Un espacio vac�o 
"#"--Una pared
"."--Objetivo
"$"--Tesoro
"*"--Tesoro sobre un objetivo
"@"--Jugador
"+"--Jugador sobre un objetivo
*/
var numNiveles = 20;
var nombreDeNivel = "Picokosmos";
var autorDeNivel = "Aymeric du Peloux";
var urlDeNivel = "http://www.multimania.com/nabokos/";
var mailDeNivel = "aymeric.dupeloux@smile.fr";

nivel_1 =
" #####   |" + 
" #   ####|" + 
" #      #|" + 
"### **# #|" + 
"#  #* *@#|" + 
"#   * ###|" + 
"#  ##  # |" + 
"##     # |" + 
" #.$#  # |" + 
" #  #### |" + 
" ####    ";

nivel_2 = 
"       #####|" + 
"     ###   #|" + 
"    ## . # #|" + 
"   ##  $$  #|" + 
"  ## *$. ###|" + 
" ## $  ###  |" + 
"## .$. #    |" + 
"#  @ ###    |" + 
"#  . #      |" + 
"######      ";

nivel_3 =
"   ####  |" + 
"   #  #  |" + 
"####  ###|" + 
"#  *$*  #|" + 
"#  *@*# #|" + 
"## .**  #|" + 
"## #   ##|" + 
"#    ### |" + 
"#   ##   |" + 
"#####    ";

nivel_4 = 
"   ####  |" + 
" ###  ## |" + 
"## * * # |" + 
"#  * * ##|" + 
"#  * *  #|" + 
"#  $ * @#|" + 
"###. ####|" + 
"  #  #   |" + 
"  ####   ";

nivel_5 = 
"   #####  |" + 
" ###   ## |" + 
"##   #  ##|" + 
"#  * * * #|" + 
"#+  $ *  #|" + 
"#### * ###|" + 
"   #  ##  |" + 
"   ####   ";

nivel_6 = 
"  ####   |" + 
" ##  ### |" + 
"##  .  # |" + 
"# $.$.$##|" + 
"# .$.$. #|" + 
"##$ #.$ #|" + 
" #  @  ##|" + 
" ####### ";

nivel_7 = 
"   ##### |" + 
"####   ##|" + 
"#  * *  #|" + 
"#  . *  #|" + 
"##$.$*$##|" + 
" # . *@# |" + 
" #   ### |" + 
" #####   ";

nivel_8 = 
"    ####   |" + 
"   ##  #   |" + 
" ###   ####|" + 
"## * * *  #|" + 
"#  * * $  #|" + 
"#  * # * ##|" + 
"## . ##@ # |" + 
" #  ###### |" + 
" ####      ";

nivel_9 = 
" ####     |" + 
" #  ###   |" + 
"##    ####|" + 
"#  * *   #|" + 
"# $#*#*  #|" + 
"## * *   #|" + 
" #  + * ##|" + 
" ###  ### |" + 
"   ####   ";

nivel_10 = 
" ####    |" + 
"##  #### |" + 
"#      ##|" + 
"# **@** #|" + 
"##  #   #|" + 
" # **$ ##|" + 
" #  *  # |" + 
" ## . ## |" + 
"  ##  #  |" + 
"   ####  ";

nivel_11 = 
"    ####  |" + 
"    #  ###|" + 
"  ###    #|" + 
"### ** * #|" + 
"#  . *$@##|" + 
"#  ***  # |" + 
"##    ### |" + 
" ###  #   |" + 
"   ####   ";

nivel_12 = 
" ##### |" + 
" # + # |" + 
" #$.$# |" + 
" # * # |" + 
" # * # |" + 
" # * ##|" +  
"## *  #|" + 
"#  *  #|" + 
"#    ##|" + 
"##  ## |" + 
" ####  ";

nivel_13 = 
"        #####|" + 
"##### ###   #|" + 
"#   ###     #|" + 
"# * * # * +##|" + 
"##     $* ## |" + 
" #  *## * #  |" + 
" ##  ##  ##  |" + 
"  ########   ";

nivel_14 = 
"  #######|" + 
" ##  #  #|" + 
" #      #|" + 
"## # #  #|" + 
"#  *** ##|" + 
"#@#*  $# |" + 
"#  *** # |" + 
"### .  # |" + 
"  ###  # |" + 
"    #### ";

nivel_15 = 
"  ####   |" + 
" ##  ##  |" + 
" #@ $ #  |" + 
"## .* ###|" + 
"# $$*.* #|" + 
"# #.. # #|" + 
"#   $   #|" + 
"###  ####|" + 
"  ####   ";

nivel_16 = 
" ######  |" + 
" #    #  |" + 
"## * .## |" + 
"# *$*  ##|" + 
"#@ * *  #|" + 
"##* *   #|" + 
" #   ####|" + 
" #####   ";

nivel_17 = 
" ##### |" + 
" # + # |" + 
" #$.$# |" + 
" # * # |" + 
" # * # |" + 
"## * # |" + 
"#  * ##|" + 
"#  *  #|" + 
"#  *  #|" + 
"###  ##|" + 
"  #### ";

nivel_18 = 
" ########|" + 
" #   #  #|" + 
"##.     #|" + 
"# ***** #|" + 
"#   * * #|" + 
"## #$  ##|" + 
" #  @### |" + 
" #####   ";

nivel_19 = 
"  ####    |" + 
"  #  #### |" + 
"  #    @##|" + 
" ##** ** #|" + 
"##  **.  #|" + 
"# $  # ###|" + 
"#      #  |" + 
"########  ";

nivel_20 = 
"  ####  |" + 
" ##  #  |" + 
"##   ###|" + 
"#  *** #|" + 
"#  *@# #|" + 
"## **. #|" + 
" #     #|" + 
" # #$###|" + 
" #   #  |" + 
" #####  ";