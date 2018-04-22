/*
" "--Un espacio vac�o 
"#"--Una pared
"."--Objetivo
"$"--Tesoro
"*"--Tesoro sobre un objetivo
"@"--Jugador
"+"--Jugador sobre un objetivo
*/
var numNiveles = 54;
var nombreDeNivel = "Microban III"; 
var autorDeNivel = "David Skinner";
var urlDeNivel = "http://users.bentonrea.com/~sasquatch/sokoban/";
var mailDeNivel = "sasquatch@bentonrea.com";

nivel_1 = 
"####    |" + 
"#  #    |" + 
"#  #    |" + 
"#  #####|" + 
"#.$$ $@#|" + 
"#  . . #|" + 
"#  #####|" + 
"####    ";

nivel_2 = 
"#######|" + 
"#     #|" + 
"# .$  #|" + 
"##.$###|" + 
"#  @  #|" + 
"# .$# #|" + 
"#     #|" + 
"#######";

nivel_3 = 
"################|" + 
"#  #  #  #  #  #|" + 
"#  .  #  #  #  #|" + 
"# $#  *  #  #  #|" + 
"#  #  # @*  #$ #|" + 
"#  #  #  #  .  #|" + 
"#  #  #  #  #  #|" + 
"################";

nivel_4 = 
"####### #####|" + 
"#   ..###   #|" + 
"#  ##.#     #|" + 
"# @##$# $  ##|" + 
"#      $ ### |" + 
"#  #  #  #   |" + 
"#######  #   |" + 
"      ####   ";

nivel_5 = 
"    #####|" + 
"   ##   #|" + 
"   #  @ #|" + 
"#### # ##|" + 
"#. .  . #|" + 
"#  ###  #|" + 
"## $ $ ##|" + 
" #  $ ## |" + 
" ###  #  |" + 
"   ####  ";

nivel_6 = 
"##### #####|" + 
"#   ###   #|" + 
"#    ##   #|" + 
"##    $$ ##|" + 
" #  #  $ # |" + 
" ###  #  # |" + 
"   # @#### |" + 
"   #    #  |" + 
" ### ## #  |" + 
" #    # #  |" + 
" #.. .# #  |" + 
" ## ### #  |" + 
"  #     #  |" + 
"  #######  ";

nivel_7 = 
"####    |" + 
"#  #### |" + 
"#...  # |" + 
"#.##  ##|" + 
"#  $ $ #|" + 
"###$ $ #|" + 
"  #@   #|" + 
"  ######";

nivel_8 = 
" ####  |" + 
" #  ###|" + 
" # *  #|" + 
" # *#@#|" + 
"## *  #|" + 
"#  .$##|" + 
"#    # |" + 
"###### ";

nivel_9 = 
"########|" + 
"#    @ #|" + 
"# $  $ #|" + 
"## ## ##|" + 
"# $# $# |" + 
"#  .. # |" + 
"## .. # |" + 
" ###### ";

nivel_10 = 
"####    |" + 
"# @#### |" + 
"#     ##|" + 
"# .#.  #|" + 
"##$$$$ #|" + 
"# . .###|" + 
"#    #  |" + 
"######  ";

nivel_11 = 
"######   |" + 
"#   ###  |" + 
"#   #### |" + 
"## $ * ##|" + 
"##$#... #|" + 
"# $   @ #|" + 
"#   ##  #|" + 
"#########";

nivel_12 = 
"     ####    |" + 
"###### .#    |" + 
"#      .#    |" + 
"#  #$#@.#####|" + 
"## #   . #  #|" + 
" #  ###  $$ #|" + 
" # #   ##$  #|" + 
" #         ##|" + 
" #  ######## |" + 
" ####        ";

nivel_13 = 
"####  ####|" + 
"#  ####  #|" + 
"# $$  $$ #|" + 
"# .$..$. #|" + 
"## .  . ##|" + 
" ## @  ## |" + 
"  ######  ";

nivel_14 = 
"       #####|" + 
" #######   #|" + 
"##   ..# $ #|" + 
"# $ $..# $ #|" + 
"# $ #..$ $ #|" + 
"# $ #..   ##|" + 
"# @ ####### |" + 
"#####       ";

nivel_15 = 
"       #### |" + 
"  ###### .# |" + 
"###       # |" + 
"#  $$ # ..# |" + 
"# $  #  .## |" + 
"#  $$# #.###|" + 
"###  #     #|" + 
"  #    # # #|" + 
"  ##### @  #|" + 
"      #   ##|" + 
"      ##### ";

nivel_16 = 
"############    |" + 
"#   .#  #  #    |" + 
"#   .#    $###  |" + 
"# @#.# $#  $ ## |" + 
"#   .   # $   ##|" + 
"#  ##### ##    #|" + 
"####   ##    # #|" + 
"        # #  # #|" + 
"        #  ##  #|" + 
"        ##    ##|" + 
"         ###### ";

nivel_17 = 
"           ####### |" + 
"          ##     # |" + 
"         ##  ### # |" + 
"         #  $ $  ##|" + 
"         # $ $ $  #|" + 
" #########  ###   #|" + 
" # . . . # ## #####|" + 
"##        @  $ #   |" + 
"#  . . . # #   #   |" + 
"# ######## #####   |" + 
"#          #       |" + 
"############       ";

nivel_18 = 
" ############ |" + 
" #          # |" + 
"## ####$    # |" + 
"#    $ $$#  # |" + 
"# #  $@  ## ##|" + 
"#  # $ $##...#|" + 
"##  # #  #.  #|" + 
" ##   ## #. .#|" + 
"  ######  .###|" + 
"   ##  #    # |" + 
"    ## ##   # |" + 
"     ######## ";

nivel_19 = 
"  ##### |" + 
" ##   ##|" + 
"### #  #|" + 
"###$.# #|" + 
"#  $.#@#|" + 
"# #$.# #|" + 
"# #    #|" + 
"#  # ###|" + 
"##   ## |" + 
" #####  ";

nivel_20 = 
"########|" + 
"#      #|" + 
"# #$.@ #|" + 
"#  $.###|" + 
"# #$.#  |" + 
"#   ##  |" + 
"#####   ";

nivel_21 = 
" #####   |" + 
" #   ####|" + 
" #  $.  #|" + 
" ## $.  #|" + 
"  ##$.###|" + 
"   #@ #  |" + 
"   ####  ";

nivel_22 = 
"  #### |" + 
"  #  # |" + 
"  #  # |" + 
"###$.# |" + 
"#  $.##|" + 
"# #$. #|" + 
"#   @ #|" + 
"#######";

nivel_23 = 
"#####   |" + 
"#   ####|" + 
"# #$.  #|" + 
"#  .$#@#|" + 
"###$.  #|" + 
"  #  ###|" + 
"  #  #  |" + 
"  ####  ";

nivel_24 = 
"  ######|" + 
"###    #|" + 
"#   ## #|" + 
"# #$.  #|" + 
"#@#.$###|" + 
"# #$.## |" + 
"#     # |" + 
"###   # |" + 
"  ##### ";

nivel_25 = 
"  ######|" + 
"###    #|" + 
"#  $.# #|" + 
"#@#.$  #|" + 
"# #$.###|" + 
"#    #  |" + 
"######  ";

nivel_26 = 
"   #####|" + 
"####   #|" + 
"#  $.# #|" + 
"#@#.$  #|" + 
"# #$.###|" + 
"# #  #  |" + 
"#    #  |" + 
"######  ";

nivel_27 = 
"  #### |" + 
" ##  # |" + 
" # . # |" + 
" # * # |" + 
"## *###|" + 
"#  $ # |" + 
"#  @ # |" + 
"#  ### |" + 
"####   ";

nivel_28 = 
"####    |" + 
"#  #### |" + 
"#     # |" + 
"#  .# # |" + 
"###*# ##|" + 
" #@*   #|" + 
" # $   #|" + 
" ###  ##|" + 
"   #### ";

nivel_29 = 
" #####|" + 
" # . #|" + 
" # * #|" + 
"## * #|" + 
"#  * #|" + 
"# @$ #|" + 
"#  ###|" + 
"####  ";

nivel_30 = 
" ######|" + 
" # .  #|" + 
" # *# #|" + 
" #@*  #|" + 
" # * ##|" + 
" ##$  #|" + 
" #    #|" + 
" # # ##|" + 
" #   # |" + 
" ##### ";

nivel_31 = 
"###### #|" + 
"#   ## #|" + 
"#  . #  |" + 
"#  $ ###|" + 
"## * @ #|" + 
"###$ # #|" + 
"  #.#  #|" + 
"# #   ##|" + 
"# ######";

nivel_32 = 
"#####   |" + 
"#   ##  |" + 
"# #. ###|" + 
"#  $ @ #|" + 
"###*   #|" + 
"#  $ ###|" + 
"# #.##  |" + 
"#   #   |" + 
"#####   ";

nivel_33 = 
" ####   |" + 
" #  #   |" + 
" #  #   |" + 
" #  ####|" + 
"###$$  #|" + 
"#  $.  #|" + 
"# #..###|" + 
"# @# #  |" + 
"##   #  |" + 
"######  ";

nivel_34 = 
"#####   |" + 
"#  @####|" + 
"# #$$  #|" + 
"#  $.# #|" + 
"###..  #|" + 
"  ##   #|" + 
"   #####";

nivel_35 = 
"   #### |" + 
"#### @# |" + 
"#  $$ ##|" + 
"# #$.  #|" + 
"#  ..# #|" + 
"####   #|" + 
"   #####";

nivel_36 = 
"  #####|" + 
"  ##  #|" + 
"###   #|" + 
"#  $  #|" + 
"# .*.##|" + 
"## $ # |" + 
"###@ # |" + 
"  #### ";

nivel_37 = 
"  ####|" + 
" ##  #|" + 
"###$ #|" + 
"# .*.#|" + 
"# #$ #|" + 
"#  @ #|" + 
"#   ##|" + 
"##### ";

nivel_38 = 
"   ##### |" + 
"   #   ##|" + 
" ### #  #|" + 
"##  $ # #|" + 
"#  .*.  #|" + 
"# # $  ##|" + 
"#  #@### |" + 
"##   #   |" + 
" #####   ";

nivel_39 = 
"#####   |" + 
"#   ##  |" + 
"#  $ ## |" + 
"##$*. ##|" + 
" # .@  #|" + 
" #  #  #|" + 
"#####  #|" + 
"##  ####";

nivel_40 = 
"#####   |" + 
"#   ####|" + 
"# #@$  #|" + 
"#  $*. #|" + 
"####. ##|" + 
" #    # |" + 
" #   ## |" + 
" #####  ";

nivel_41 = 
"  ########|" + 
"  #      #|" + 
"### #### #|" + 
"#  @$  # #|" + 
"#  $*. # #|" + 
"#  #.### #|" + 
"#  #     #|" + 
"##########";

nivel_42 = 
"  #####|" + 
" ##   #|" + 
"###   #|" + 
"#  * ##|" + 
"# .@$##|" + 
"#  * ##|" + 
"##  ## |" + 
"#####  ";

nivel_43 = 
" ####  |" + 
" #  ## |" + 
"## * ##|" + 
"# .@$ #|" + 
"#  *  #|" + 
"#  #  #|" + 
"#######";

nivel_44 = 
"  ####  |" + 
"  #  #  |" + 
"###  ###|" + 
"## $*  #|" + 
"#  *. @#|" + 
"#   ####|" + 
"#  ##   |" + 
"#####   ";

nivel_45 = 
"#####    |" + 
"#   #####|" + 
"#   #   #|" + 
"## $*@  #|" + 
" # *.  ##|" + 
" #  #### |" + 
" ####    ";

nivel_46 = 
"  ####  |" + 
"  #@ #  |" + 
"  #  ## |" + 
"###$* ##|" + 
"#  *.  #|" + 
"#      #|" + 
"#####  #|" + 
"    ####";

nivel_47 = 
"#### ###|" + 
"#@ ### #|" + 
"# $$ ###|" + 
"# $ .  #|" + 
"## ..  #|" + 
" #######";

nivel_48 = 
"####   |" + 
"#  #   |" + 
"#@ ### |" + 
"# $$ ##|" + 
"# $ . #|" + 
"###.. #|" + 
" #   ##|" + 
" #   # |" + 
" ##### ";

nivel_49 = 
"###### |" + 
"#    # |" + 
"#    # |" + 
"## $$##|" + 
" # $@.#|" + 
" ## ..#|" + 
"  #####";

nivel_50 = 
"  #####|" + 
"###   #|" + 
"# $$# #|" + 
"# $@. #|" + 
"#  .. #|" + 
"#######";

nivel_51 = 
"  ####  |" + 
"###  ###|" + 
"#      #|" + 
"# $ $ $#|" + 
"#*.*.*.#|" + 
"# $ $ $#|" + 
"#*.*.*.#|" + 
"# @    #|" + 
"########";

nivel_52 = 
"#################|" + 
"#               #|" + 
"#.$.$.######### #|" + 
"#$.$.$          #|" + 
"#.$.$.######### #|" + 
"#$.$.$          #|" + 
"#.$.$.######### #|" + 
"#       $       #|" + 
"# ############# #|" + 
"#       @       #|" + 
"#################";

nivel_53 = 
"  #########  |" + 
"  #       #  |" + 
"### # # # ###|" + 
"#  $.$.$.$  #|" + 
"# #.$.$.$.# #|" + 
"#  $.# #.$  #|" + 
"# #.$ @ $.# #|" + 
"#  $.# #.$  #|" + 
"# #.$.$.$.# #|" + 
"#  $.$.$.$  #|" + 
"### # # # ###|" + 
"  #       #  |" + 
"  #########  ";

nivel_54 = 
"###############|" + 
"#             #|" + 
"# # # # # # # #|" + 
"#  $.$.$.$.$  #|" + 
"# #.$.$.$.$.# #|" + 
"#  $.$.$.$.$  #|" + 
"# #.$.$.$.$.# #|" + 
"#  $.$.@.$.$  #|" + 
"# #.$.$.$.$.# #|" + 
"#  $.$.$.$.$  #|" + 
"# #.$.$.$.$.# #|" + 
"#  $.$.$.$.$  #|" + 
"# # # # # # # #|" + 
"#             #|" + 
"###############";
