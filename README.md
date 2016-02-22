# RPi-webcam
Surveillance using node-js, socket.io  hosted on Rpi

#Dependencies
Express >=4.*.*
Socket.io >= 1.3.*

install dependencies using 
$ npm install

HOW to use ?

1. Configure your Pi
2. Install fswebcam [ $ sudo apt-get install fswebcam ]
3. goto /home/pi/ and clone this repo
4. make new dir on your user home [ $ mkdir /home/pi/images ]
5. Attach a new webcam and test using 
   $ fswebcam image.jpg
   this should generate a image.jpg in current folder
6. Create a cron entry
   $ crontab -e
   # write this line on your cron entry
   * * * * * /home/pi/RPi-webcam/cam 2&>1
7. install nodejs, npm and npm dependencies
8. start the server using 
   $ nodejs index.js
