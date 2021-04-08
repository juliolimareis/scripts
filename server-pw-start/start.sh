#!/bin/sh

sh /home/chmod.sh

PW_PATH=/home
if [ ! -d $PW_PATH/logs ]; then
mkdir $PW_PATH/logs
fi
GREEN='\033[0;32m'
NORMAL='\033[0m'
echo "::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::"
echo ":::               ${GREEN}Perfect World Server 1.5.3v145${NORMAL}               :::"
echo "                     ADMVAL                         "
echo "::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::"
echo "::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::"
echo ":::                        Start Server                        :::"
echo "::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::"
echo ""
echo "${GREEN}::: iWeb :::${NORMAL}"
/usr/local/jakarta/bin/startup.sh
sleep 1
echo "${GREEN}::: Ready :::${NORMAL}"
echo ""
echo "${GREEN}::: Log Service :::${NORMAL}"
cd $PW_PATH/logservice; $PW_PATH/logservice logservice.conf >$PW_PATH/logs/logservice.log &
sleep 1
echo "${GREEN}::: Ready :::${NORMAL}"
echo ""
echo "${GREEN}::: Unique Name Daemon :::${NORMAL}"
cd $PW_PATH/uniquenamed; $PW_PATH/uniquenamed gamesys.conf >$PW_PATH/logs/uniquenamed.log &
sleep 2
echo "${GREEN}::: Ready :::${NORMAL}"
echo ""
echo "${GREEN}::: Auth Daemon :::"
cd $PW_PATH/auth/build/; $PW_PATH/auth/build/authd.sh start >$PW_PATH/logs/auth.log &
sleep 3
echo "${GREEN}::: Ready :::${NORMAL}"
echo ""
echo "${GREEN}::: Game Data Base Daemon :::${NORMAL}"
cd $PW_PATH/gamedbd; $PW_PATH/gamedbd gamesys.conf >$PW_PATH/logs/gamedbd.log &
sleep 2
echo "${GREEN}::: Ready :::${NORMAL}"
echo ""
echo "${GREEN}::: Game Anti Cheat Daemon :::${NORMAL}"
cd $PW_PATH/gacd; $PW_PATH/gacd gamesys.conf >$PW_PATH/logs/gacd.log &
sleep 2
echo "${GREEN}::: Ready :::${NORMAL}"
echo ""
echo "${GREEN}::: Game Faction Daemon :::${NORMAL}"
cd $PW_PATH/gfactiond; $PW_PATH/gfactiond gamesys.conf >$PW_PATH/logs/gfactiond.log &
sleep 2
echo "${GREEN}::: Ready :::${NORMAL}"
echo ""
echo "${GREEN}::: Game Delivery Daemon :::${NORMAL}"
cd $PW_PATH/gdeliveryd; $PW_PATH/gdeliveryd gamesys.conf >$PW_PATH/logs/gdeliveryd.log &
sleep 3
echo "${GREEN}::: Ready :::${NORMAL}"
echo ""
echo "${GREEN}::: Game Link Daemon :::${NORMAL}"
cd $PW_PATH/glinkd; $PW_PATH/glinkd gamesys.conf 1 >$PW_PATH/logs/glink.log &
#cd $PW_PATH/glinkd; $PW_PATH/glinkd gamesys.conf 2 >$PW_PATH/logs/glink2.log &
#cd $PW_PATH/glinkd; $PW_PATH/glinkd gamesys.conf 3 >$PW_PATH/logs/glink3.log &
#cd $PW_PATH/glinkd; $PW_PATH/glinkd gamesys.conf 4 >$PW_PATH/logs/glink4.log &
sleep 7
echo "${GREEN}::: Ready :::${NORMAL}"
echo ""
echo "::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::"
echo ":::                            ${GREEN}Maps${NORMAL}                            :::"
echo "::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::"
echo ""
echo "${GREEN}::: Game Service :::${NORMAL}"
cd $PW_PATH/gamed; $PW_PATH/gamed/gs gs01 > $PW_PATH/logs/gs01.log &
sleep 7
echo "${GREEN}::: is61 :::${NORMAL}"
cd $PW_PATH/gamed; $PW_PATH/gamed/gs is61 > $PW_PATH/logs/is61.log &
echo "${GREEN}::: Ready :::${NORMAL}"
echo ""
echo "::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::"
echo ":::                        ${GREEN}Server Online ADMVAL${NORMAL}                       :::"
echo "::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::"
