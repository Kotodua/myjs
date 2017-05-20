echo "Starting installation"
echo "Unziping..." 
unzip \locomote.zip
cd locomote
npm install
echo "Installation complete"
node server.js
