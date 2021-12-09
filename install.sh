#!/usr/bin/env bash
{
    exitScript() {
        echo "$1 isn\'t installed. Please install and try again"
        rm ./test.txt
        exit 1

    }

    which node > test.txt
    if [ $(wc -c <"test.txt") = 0 ];
    then
        exitScript node
    fi


    which npm > test.txt
    if [ $(wc -c <"test.txt") = 0 ];
    then
        exitScript npm
    fi

    rm test.txt

    git clone https://github.com/gj-ca/friends-api-demo.git --depth=1 $pwd 

    cd friends-api-demo/backend
    {
        npm install
    } &> /dev/null

    echo 
    echo -e "\033[1;32mServer will be running on port 5000. "
    echo -e "\033[0mIf this port is in use, close it and run again"

    echo -e "The server is currently 'waiting', like in rails"
    echo -e "\033[0;31mTo exit, press ctrl + c"
    echo -e "\033[0mNow you can start up a live server session and add some friends"
    node index.js
}