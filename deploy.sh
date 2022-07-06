#!/bin/bash
ssh shinobiweb@vpsserver 'cd /home/shinobiweb/chironig.com/ ; git pull'
ssh shinobiweb@vpsserver 'cd /home/shinobiweb/chironig.com/ && sh server-deploy.sh'