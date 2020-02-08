# spaceFighter
Turn-Based 2D Multiplayer Space Fighter Game for my MEAN-stack project

I made this game as an exercise to learn and become comfortable with Angular and Sockets in the MEAN stack.

To run the game:

  -Install Node
  -Clone the repo
  
  -In the spaceFighter repo root directory, run:
  
    -npm install
    
  -CD into the public directory, and run:
  
    -npm install
    
  -Adjust the IP address for socket connections in public/src/app/app.module.ts so that instead of reading http://192.168.1.224:8000 in the SocketIoConfig line, it reads your actual public IP address to know where to look for socket connections
  
  -If not already installed on your machine, install angular:
  
    -npm install -g @angular/cli
    
  -Back in the public directory, run:
  
    -ng build
    
  -Back in the spaceFighter repo root directory, run:
  
    -node server.js
    
  -The server should now be online and you can access it in your browser by going to http://localhost:8000 (and replacing localhost with your public IP if you are accessing it from another computer to play multiplayer)
