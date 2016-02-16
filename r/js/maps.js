

/**
 * These are the original maps, extracted from the DOS Sokoban game
*/

// Pattern: Width-height|data

var sb_maps =
[
'5|5|'+
    'XXXXX'+
    'X   X'+
    'X0 0X'+
    'X#B#X'+
    'XXXXX',


/* test 
'7|6|'+
    '  XXXXX'+
    'XXX B X'+
    'X 000 X'+
    'X### XX'+
    'X    X '+
    'XXXXXX ',
*/
/*1*/'19|11|'+
  '    XXXXX          '+
  '    X   X          '+
  '    X0  X          '+
  '  XXX  0XX         '+
  '  X  0 0 X         '+
  'XXX X XX X   XXXXXX'+
  'X   X XX XXXXX  ##X'+
  'X 0  0          ##X'+
  'XXXXX XXX XFXX  ##X'+
  '    X     XXXXXXXXX'+
  '    XXXXXXX        ',

/*2*/
'14|10|'+
    'XXXXXXXXXXXX  '+
    'X##  X     XXX'+
    'X##  X 0  0  X'+
    'X##  X0XXXX  X'+
    'X##    F XX  X'+
    'X##  X X  0 XX'+
    'XXXXXX XX0 0 X'+
    '  X 0  0 0 0 X'+
    '  X    X     X'+
    '  XXXXXXXXXXXX',

/*3*/
'17|10|'+
     '        XXXXXXXX '+
     '        X     FX '+
     '        X 0X0 XX '+
     '        X 0  0X  '+
     '        XX0 0 X  '+
     'XXXXXXXXX 0 X XXX'+
     'X####  XX 0  0  X'+
     'XX###    0  0   X'+
     'X####  XXXXXXXXXX'+
     'XXXXXXXX         ',

/*4*/
'19|14|'+
  '           XXXXXXXX'+
  '           X  ####X'+
  'XXXXXXXXXXXX  ####X'+
  'X    X  0 0   ####X'+
  'X 000X0  0 X  ####X'+
  'X  0     0 X  ####X'+
  'X 00 X0 0 0XXXXXXXX'+
  'X  0 X     X       '+
  'XX XXXXXXXXX       '+
  'X    X    XX       '+
  'X     0   XX       '+
  'X  00X00  FX       '+
  'X    X    XX       '+
  'XXXXXXXXXXX        ',

/*5*/'19|16|                                               XXXXX              X   XXXXX          X X0XX  X          X     0 X  XXXXXXXXX XXX   X  X####  XX 0  0XXX  X####    0 00 XX   X####  XX0  0 FX   XXXXXXXXX  0  XX           X 0 0  X           XXX XX X             X    X             XXXXXX                     ',
/*6*/'19|16|                                                             XXXXXX  XXX        X##  X XXFXX       X##  XXX   X       X##     00 X       X##  X X 0 X       X##XXX X 0 X       XXXX 0 X0  X          X  0X 0 X          X 0  0  X          X  XX   X          XXXXXXXXX                                         ',
/*7*/'19|16|                                                                    XXXXX        XXXXXXX   XX      XX X FXX 00 X      X    0      X      X  0  XXX   X      XXX XXXXX0XXX      X 0  XXX ##X       X 0 0 0 ###X       X    XXX###X       X 00 X X###X       X  XXX XXXXX       XXXX                              ',
/*8*/'19|16|    XXXX               X  XXXXXXXXXXX     X    0   0 0 X     X 0X 0 X  0  X     X  0 0  X    X   XXX 0X X  XXXX X   XFX0 0 0  XX   X   X    0 X0X   X X   X   0    0 0 0 X    XXXX  XXXXXXXXX     X      X           X      X           X######X           X######X           X######X           XXXXXXXX       ',
/*9*/'19|16|                              XXXXXXX            X  ###X        XXXXX  ###X        X      # #X        X  XX  ###X        XX XX  ###X       XXX XXXXXXXX       X 000 XX       XXXXX  0 0 XXXXX  XX   X0 0   X   X  XF 0  0    0  0 X  XXXXXX 00 0 XXXXX       X      X           XXXXXXXX                        ',
/*10*/'19|16| XXX  XXXXXXXXXXXXXXXFXXXX       X   XX 00   00  0 0 ###XX  000X    0  X###XX 0   X 00 00 X###XXXX   X  0    X###XX     X 0 0 0 X###XX    XXXXXX XXX###XXX X  X  0 0  X###XX  XX X 00 0 0XX##XX ##X X  0      X#XX ##X X 000 000 X#XXXXXX X       X X#X    X XXXXXXXXX X#X    X           X#X    XXXXXXXXXXXXXXX',
/*11*/'19|16|                             XXXX          XXXX X  X        XXX  XXX0 X       XX   F  0  X      XX  0 00XX XX      X  X0XX     X      X X 0 00 X XXX     X   0 X  X 0 XXXXXXXXX    X  00 X   XXXXX XX 0         XX#    XXX  XXXXXXXXX## ##X XXXX       X###X#X            X#####X            XXXXXXX            ',
/*12*/'19|16|                                       XXXXXXXXXXXXXXXX   X              X   X X XXXXXX     X   X X  0 0 0 0X  X   X X   0F0   XX XX  X X X0 0 0XXX###X  X X   0 0  XX###X  X XXX000 0 XX###X  X     X XX XX###X  XXXXX   XX XX###X      XXXXX     XXX          X     X            XXXXXXX                      ',
/*13*/'19|16|                      XXXXXXXXX         XX   XX  XXXXX   XXX     X  X    XXXX  0 X0 X  X  ### XX X 0XF0XX X X#X# XX  X X0  X    # # XX 0    0 X X X#X# XX   XX  XX0 0 # # XX 0 X   X  X0X#X# XXX 0  0   0  0### X X0 XXXXXX    XX  X X  X    XXXXXXXXXX XXXX                                                    ',
/*14*/'19|16|        XXXXXXX      XXXXXXX     X      X     X 0F0 X      X00 X   XXXXXXXXX  X XXX######XX   X  X   0######XX X X  X XXX######     X XX   XXXX XXX X0XX X  X0   X  0  X X  X  0 000  X 0XX X  X   0 0 XXX00 X X  XXXXX     0   X X      XXX XXX   X X        X     X   X        XXXXXXXX  X               XXXX ',
/*15*/'19|16|     XXXXXXX           X   X  X           X  0   X         XXX X0   XXXX      X  0  XX0   X      X  X F 0 X 0X      X  X      0 XXXX   XX XXXX0XX     X   X 0X#####X X   X   X  0##11# 0X XXX  XX  X#####X   X    X   XXX XXXXXXX    X 00  X  X         X  X     X         XXXXXX   X              XXXXX        ',
/*16*/'19|16|  XXXXX              X   XX             X    X  XXXX       X 0  XXXX  X       X  00 0   0X       XXXF X0    XX       X  XX  0 0 XX      X 0  XX XX #X      X  X0XX0  X#X      XXX   0##XX#X       X    X#1###X       X 00 X#####X       X  XXXXXXXXX       X  X               XXXX                              ',
/*17*/'19|16|                        XXXXXXXXXX         X##  X   X         X##      X         X##  X  XXXX      XXXXXXX  X  XX     X            X     X  X  XX  X  X   XXXX XX  XXXX XX   X  0  XXXXX X  X   X X 0  0  X 0  X   X F0  0   X   XX   XXXX XX XXXXXXX       X    X             XXXXXX                           ',
/*18*/'19|16|                        XXXXXXXXXXX        X  #  X   X        X X#    F X    XXXXX XX##X XXXX  XX  X ##XXX     XXXX 0 X###   0 X  0 XX    ## XX  XX XX XXXXX0XX0X 0 X   X X  XX X    X0 00 X X  X  0 X X  X 0XX X  X               X  X  XXXXXXXXXXX  X  XXXX         XXXX                                      ',
/*19*/'19|16|  XXXXXX             X   FXXXX        XXXXX 0   X        X   XX    XXXX     X 0 X  XX    X     X 0 X  XXXXX X     XX 0  0    X X     XX 0 0 XXX X X     XX X  0  X X X     XX X X0X   X X     XX XXX   X X XXXXXXX  0  XXXX X X####XX    0    0   ##X#XXXXX0  0X 0   ####XX       X  XX ####XXXXXXXXXXXXXXXXXXXX',
/*20*/'19|16|    XXXXXXXXXX     XXXXX        XXXX  X     X   0  XF X  X XXXXXXX0XXXX  XXXX X    XX X  X0 ##XX X 0  0  X  X  X#XX X 0  X     X0 ##XX X  XXX XX     X#XX XXX  X  X  X0 ##XX X    X 0XXXX  X#XX X0   0  0  X1 ##XX    0 X 0 0 X  X#XXXXX 0XXX    X1 ##X   X    00 XXX####X   X      XX XXXXXX   XXXXXXXX        ',
/*21*/'19|16|  XXXXXXXXX          X       X          X       XXXX       XX XXXX X  X       XX XFXX    X       X 000 0  00X       X  X XX 0  X       X  X XX  0 XXXX    XXXX  000 0X  X     X   XX   ####X     X X   X X## #X     X   X X XX###X     XXXXX 0  X###X         XX   XXXXX          XXXXX                         ',
/*22*/'19|16|XXXXX      XXXX    X    XXXXXXX  XXXXXX   0X  X  0  X   XX  0  0  0 X 0 0  XXX0 0   X FX 0    XX  0 XXXXXXXXXXX XXX X   X#######X 0X X XX  X ######X  X X X   0########0 X X X 0 X#### ##X  X X  0 0XXXX0XXXX 0X X 0   XXX 0   0  XXX 0     0 0  0    XXX XXXXXX 0 XXXXX XX         X       XXXXXXXXXXXXXXXXXXXX',
/*23*/'19|16|                       XXXXXXX            X  X  XXXX     XXXXX 0X0 X  XX    X## X  X  X   X    X## X 0X0 X  0XXXX X#  X     X0  X  X X##   0X  X 0    X X##FX  X0 X0  X  X X## X 0X     0X  X X## X  X00X0  X  XXX## X 0X  X  0X0  XX## X  X  X   X   XXX# XXXX  XXXXX   X XXXX  XXXX   XXXXX                   ',
/*24*/'19|16|XXXXXXXXXXXXXXX    X##########  #XXXX X##########00#X  X XXXXXXXXXXX0 X   XXX      0  0     0 XXX XXXX   X  0 X  XX      X   XX  X XXX  0X  X XX  XXX XXX 0 X0XXX    XXX XXXXX  0 X  X  XXX XXXXX    0 XX X  X XX X 0  X  0  0 0   X X  0  0X000  X   X X  X  0      XXXXX X FXX  X  X  X     XXXXXXXXXXXXXX    ',
/*25*/'19|16|XXXX               X  XXXXXXXXXXXXXX  X  X   ##X######X  X  X X XXXXX ###X  XX0X    ########X  X   XX0XXXXXX  XXXXX 0 X     XXXXXXF XXX0 X 0   XXXXXX  XX  0 X000XX       XX      X    X0X0XXXX XXXX X00000    X X X    0     X   X X X   XX XX     XXXX XXXXXX0XXXXXX 0 XX        X    X   XXXXXXXXXXX    XXXXX',
/*26*/'19|16|                                                             XXXXXXX            X  X  XXXXX       XX  X  X###XXX     X  0X  X###  X     X 0 X00 ###  X     X  0X  X### #X     X   X 0XXXXXXXX    XX0       0 0 X    XX  X  00 X   X     XXXXXX  XX00FX          X      XX          XXXXXXXX                     ',
/*27*/'19|16|                    XXXXXXXXXXXXXXXXX  X###   X    X   XXXX#####  0XX X X0 XX######X  0  X    XX######X  X  X X  XXXXXXXXXX 0  0 0  X  X     X0XX0 XX0XX XX   0    X 0    X X  XX XXX X  XX0 X X 0 00     0  0  X X 0    0XX0 XXXXXX XXXXXXX  F XX            XXXXXX                                            ',
/*28*/'19|16|          XXXXX          XXXXX   X         XX 0  0  XXXX  XXXXX 0  0 0 XX#X  X       00  XX##X  X  XXXXXX XXX## X  XX X  X    X### X  X 0   X    X### X  XF X0 XX XXXX###X  XXXX  0 00  XX##X     XX  0 0  0###X      X 00  0 X  #X      X   0 0  XXXX      XXXXXX   X              XXXXX                       ',
/*29*/'19|16|                   XXXXX              X   XX             X 0  XXXXXXXXX     XX X X       XXXXXXXX X   0X0XF  X   XX  X      0 X   0 XX  XXX XXXXXXXXX XXX  XX ##1##### X XXXX XX 1#1##1#1 X XXX 0XXXXXXXXXX XX0 XX  0   0  0    0  XX  X   X   X   X  XXXXXXXXXXXXXXXXXXXX                                      ',
/*30*/'19|16|                          XXXXXXXXXXX        X   X     X XXXXX  X     0 0 X X   XXXXX 0XX X XX X 0 XX   X XX 0  X X 0  F00 X XX000 X XX XXX   X XX    X XX X   XXX XXXXX0X XX X     0  X####X X  XXX XX 0 X####XXX 0   0 X   X##0# XX  XX 0 X  XX#### XXXXXX   XXXXXX###XX    XXXXX    XXXXX                    ',
/*31*/'19|16|   XXXX               X  XXXXXXXXX      XX  XX  X   X      X  0X 0F0   XXXX   X0  0  X 0 0X  XX XX  0XX X0 0     X X  X  X X   000  X X 0    0  0XX XXXX X 0 0 X0X  X  X    XX  XXX  XXX0 X     X  X####     X     XXXX######XXXX       X####XXXX          X###XX             X###X              XXXXX          ',
/*32*/'19|16|                            XXXX           XXXXX  X          XX     0X         XX 0  XX XXX       XF0 0 X 0  X       XXXX XX   0X        X####X0 0 X        X####X   0X        X####  00 XX       X### X 0   X       XXXXXX0 0  X            X   XXX            X0 XXX             X  X               XXXX      ',
/*33*/'19|16|                      XXXXXXXXXXXX       XX     XX  X       XX   0   0 X       XXXX XX 00 X       X   0 X    X       X 000 X XXXX       X   X X 0 XX       X  X  X  0 X       X 0X 0X    X       X   ##X XXXX       XXXX## 0 XFX       X#####X 0X X       XX####X  0 X       XXX##XX    X       XXXXXXXXXXXX    ',
/*34*/'19|16|                       XXXXXXXXX          X####   XX         X#X#X  0 XX       XX####X X FXX      X ####X  X  XX     X     X0 XX0 X     XX XXX  0    X      X0  0 0 0X  X      X X  0 0 XX X      X  XXX  XX  X      X    XX XX XX      X  0 X  0  X       XXX0 0   XXX         X  XXXXX           XXXX         ',
/*35*/'19|16|XXXXXXXXXXXX XXXXXXX   X    X XXX####XX   00X   F  #####XX   X XXX   X ####XXX XX XXX  X  ####X X 0 0     X X XXXX X  0 0XX  X      XXXXX X  XXXX X XX XX  X X0   XX X    XX 0  0  X XX X   XXX X 0 0    X X   X X  0 XX XX X XXXXX X 00     00  X     XX XX XXX 0  X      X    X X    X      XXXXXX XXXXXX     ',
/*36*/'19|16|            XXXXX  XXXXX  XXXXXX   X  X   XXXX  0 0 0 X  X 0   XX XX XX  XX X   0 0     0  0 X XXX 0  XX XX     XX  X XXXXX XXXXX00 X XX0XXXXX FXX     X X 0  XXX0XXX 0  XX X 0  X   XXX  XXX  X 00 0 X   00 X    X     X   XX  X    XXXXXXX## #XXX        X#########X        X#########X        XXXXXXXXXXX    ',
/*37*/'19|16|XXXXXXXXXXX        X######   XXXXXXXXXX######   X  XX   XX##XXX 0    0     XX### 0 0 X  XXX   XX###X0XXXXX    X  XXXX    X   X0  X0 X  X  00 0 0  0XX  X  X  0   X0X0 XX0 X  XXX XX X    XX  X   X  0 0 XX XXXXXX   X    0  0  X       XX   X X   X        XXXXXFXXXXX            XXX                           ',
/*38*/'19|16|                                                XXXX         XXXXXXX FX         X     0  X         X   0XX 0X         XX0X###X X          X 0###  X          X X# #X XX         X   X X0 X         X0  0    X         X  XXXXXXX         XXXX                                                                   ',
/*39*/'19|16|             XXXXXX XXXXXXXXXXXXX####XXX   XX     XX####XX  00XX  0 FXX####XX      00 0X  ####XX  0 XX 00 X X ###XX  0 XX 0  X  ####XXX XXXXX XXX XX#XXXXX   0  0 XX   #  XX 0XXX  X XXXXX XXXX   0   X       X  X  0 X0 0 0XXX  X  X 000X 0   X XXXX  X    X  00 X       XXXXXX   XXX            XXXXX         ',
/*40*/'19|16|     XXXXXXXXXXXX       X          XX      X  X X00 0  X      X0 X0X  XX FX     XX XX X 0 X XX     X   0 X0  X X      X   X 0   X X      XX 0 0   XX X      X  X  XX  0 X      X    XX 00X X   XXXXXX00   X   X   X####X  XXXXXXXX   X#X### XX          X####   X          X####   X          XXXXXXXXX         ',
/*41*/'19|16|           XXXXX             XX   XX           XX     X          XX  00  X         XX 00  0 X         X 0    0 X  XXXX   X   00 XXXXXX  XXXXXXXX XX    XX#            000FXX#X XXXXXXX XX   XXX#X XXXXXXX# X0 0XXX########### X    XXXXXXXXXXXXXXX  0 X             XX  XX              XXXX                    ',
/*42*/'19|16|                         XXXXXXXX        XXXX      XXXXXX   X    XX 0 0   FX   X XX XX0X0 0 0XX XXX ######X  00 XX X   ######X  X   X X X ######X0  0  X X X ###### 00X 0 X X  0XXX XXX0  0 XX XXX  0  0  0  0 X    X   0 0  0  0 X    XXXXXX   XXXXXX         XXXXX                                            ',
/*43*/'19|16|                                                                 XXXXXXX        XXXXX  X  XXXX     X   X   0    X  XXXX X00 XX XX  X XX      X X  XX XXXX  XXX 0X0  0  0  XX###    X XX  X   XX###X    F X XXX XXX###X  XXX  0  0  XXXXXXXXX XX   X   X          XXXXXXXXX                                      ',
/*44*/'19|16|                    XXXXX              X   X              X X XXXXXXX        X      0FXXXXXX    X 0 XX0 XXX   X    X XXXX 0    0 X    X XXXXX X  X0 XXXXXX  XXXX XX0      XX  0X  0  X XX XX XX         X X###X XXXXXXX  XXX  ###  X     XXXX X X###X X          X XXX X X          X       X          XXXXXXXXX',
/*45*/'19|16|                     XXXXX XXXX         X###X X  XXXX      X###XXX  0  X      X####XX 0  0XXX    XX####XX   0  X    XXX### XX 0 0 X    X XX    X  0  X    X  XX X XXX XXXX   X 0 X X0  0    X   X  0 F 0    0  X   X   X 0 00 0 XXX   X  XXXXXX  XXX     X XX    XXXX       XXX                                 ',
/*46*/'19|16|   XXXXXXXXXX         X        XXXX      X XXXXXX X  XX     X X 0 0 0  0 X     X       X0   X     XXX0  00X  XXX       X  XX X 0XX        XX0X   0 FX         X  0 0 XXX         X X   0  X         X XX   X X        XX  XXXXX X        X         X        X#######XXX        X#######X          XXXXXXXXX     ',
/*47*/'19|16|                                                XXXX       XXXXXXXXX  XX     XX  0      0 XXXXX X   XX XX   XX###X X X00 0 00X0XX###X X X    F  X   ###X X  0X XXX00   ###X X 0  00  0 XX####X XXX0       XXXXXXX   X  XXXXXXX         XXXX                                                                     ',
/*48*/'19|16|     XXXXXXXXX          X1#1X1#1X          X#1#1#1#X          X1#1#1#1X          X#1#1#1#X          X1#1#1#1X          XXX   XXX            X   X          XXXXXX XXXXXX      X           X      X 0 0 0 0 0 X      XX 0 0 0 0 XX       X0 0 0 0 0X        X   0F0   X        X  XXXXX  X        XXXX   XXXX    ',
/*49*/'19|16|                            XXXX               X  XX              X   XX             X 00 XX          XXX0  0 XX      XXXX    0   X    XXX  X XXXXX  X    X    X X####0 X    X X   0 ####X X    X  0 X X#1##X X    XXX  XXXX XXX X      XXXX F0  XX0XX        XXX 0     X          X  XX   X          XXXXXXXXX ',
/*50*/'19|16|      XXXXXXXXXXXX      XX##    X   X     XX##1 0    0 X    XX##1#X X X0 XX    X##1#X X X 0  X XXXX###X  X    X X X  XX X          X X F0 0 XXX  X X XX X 0   0   X X   X  XXX00   X X X X X    X   0   X X XXXXX  X 0X XXXXX      X  X0   X   X   X  X  X  XXX   XX     X  X  X      X    XX  XXXX      XXXXXX '
];