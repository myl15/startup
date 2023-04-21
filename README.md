# startup
## CS260 Startup project

This project will be completed over the course of the 2023 Winter Semester.
Project details can be found on GitHub.

Licensed to Myles Barney.
#### ------------------------------------------------

IP for webpage is https://3.136.102.1/

Domain name is https://oneglobe.click


Webpage is hosted by AWS.
#### ------------------------------------------------
Command for SSH is ssh -i [key pair file] ubuntu@3.136.102.1

# Simon
The Simon project is all about learning to use basic HTML structures and tools so that they can be applied to the startup website.  As of the first submission I have learned to use basic forms and outputs, hyperlinks and svg drawing. On the second submission I implemented a CSS stylesheet with formatting for text and div elements.  I also used bootstrap elements to improve formatting and styling of the overall project.
Here is the link for the Simon [github](https://github.com/myl15/simon) and the Simon page on my [website](https://simon.oneglobe.click/).



# CodePen
Links to CodePen assignments can be found on the OneGlobe website, and i will post some here.
- [OneGlobe Animation](https://codepen.io/myl15/pen/Exexaep)


# OneGlobe
### What is OneGlobe?

In the modern era, the world feels smaller than ever.  Anyone can find the information they are looking for with a few taps on their phone or clicks on their computer.  You can view resource after resource about any destination anywhere on the globe!  But, at OneGlobe we believe there is no substitute for real human interaction.  That's why we are committed to bridging differences between people in order to make the world feel a little bit safer for everyone. We hope to bring people together as users explore and make exciting discoveries all over the world.  OneGlobe is more than a tourism service, and it is more than a social media platform; OneGlobe is a mechanism for real social change all over the world.

### Key Features
+ Ability to connect with individuals from other cultures around the world
+ Tools for international travelers to find travel assistance and contact locals
+ See suggestions from local experts on places to eat and visit based on your location, in **Real Time!**
+ Learn about other cultures and countries everyday
+ See your friends' travels and share your own experiences

### Link to Website
#### [OneGlobe](https://oneglobe.click)

<!-- ![Mockup_1](Images/Mockup_1.jpg width=100)
![Mockup_2](Images/Mockup_2.jpg width=100)
![Mockup_3](Images/Mockup_3.jpg width=100) -->
<img src="https://github.com/myl15/startup/blob/d00aaf76b0dc60a641d3a36620b3438a0a0b5c94/Images/Mockup_1.jpg" width="600px">
<img src="https://github.com/myl15/startup/blob/d00aaf76b0dc60a641d3a36620b3438a0a0b5c94/Images/Mockup_2.jpg" width="600px">
<img src="https://github.com/myl15/startup/blob/d00aaf76b0dc60a641d3a36620b3438a0a0b5c94/Images/Mockup_3.jpg" width="600px">

## Things To Remember
### HTML
#### Common Elements
element	  meaning
html	  The page container
head	  Header information
title	  Title of the page
meta	  Metadata for the page such as character set or viewport settings
script	  JavaScript reference. Either a external reference, or inline
include	  External content reference
body	  The entire content body of the page
header	  Header of the main content
footer	  Footer of the main content
nav	  Navigational inputs
main	  Main content of the page
section	  A section of the main content
aside	  Aside content from the main content
div	  A block division of content
span	  An inline span of content
h<1-9>	  Text heading. From h1, the highest level, down to h9, the lowest level
p	  A paragraph of text
b	  Bring attention
table	  Table
tr	  Table row
th	  Table header
td	  Table data
ol,ul	  Ordered or unordered list
li	  List item
a	  Anchor the text to a hyperlink
img	  Graphical image reference
dialog	  Interactive component such as a confirmation
form	  A collection of user input
input	  User input field
audio	  Audio content
video	  Video content
svg	  Scalable vector graphic content
iframe	  Inline frame of another HTML page

### CSS
<img src="https://github.com/myl15/startup/blob/8340c83802685a0666a070710311ac351287f125/Images/CSS_Notes.png" width="600px">

### JavaScript
Javascript is the language of the internet, and is used to create interactive webpages with funcitonalities such as buttons, changing text and images, and animations.  I used javascript in my startup to create interactive slides with different captions based on the button the user selects, and to create an interactive login which displays the user's name. 

### HTTPS
Verbs
There are several verbs that describe what the HTTP request is asking for. The list below only describes the most common ones.

Verb	Meaning
GET	Get the requested resource. This can represent a request to get a single resource or a resource representing a list of resources.
POST	Create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly created resource.
PUT	Update a resource. Either the URL path, HTTP header, or body must contain the unique ID of the resource being updated. The body of the request should contain the updated resource. The body of the response may contain the resulting updated resource.
DELETE	Delete a resource. Either the URL path or HTTP header must contain the unique ID of the resource to delete.
OPTIONS	Get metadata about a resource. Usually only HTTP headers are returned. The resource itself is not returned.
Status codes
It is important that you use the standard HTTP status codes in your HTTP responses so that the client of a request can know how to interpret the response. The codes are partitioned into five blocks.

1xx - Informational.
2xx - Success.
3xx - Redirect to some other location, or that the previously cached resource is still valid.
4xx - Client errors. The request is invalid.
5xx - Server errors. The request cannot be satisfied due to an error on the server.
Within those ranges here are some of the more common codes. See the MDN documentation for a full description of status codes.

Code	Text	Meaning
100	Continue	The service is working on the request
200	Success	The requested resource was found and returned as appropriate.
201	Created	The request was successful and a new resource was created.
204	No Content	The request was successful but no resource is returned.
304	Not Modified	The cached version of the resource is still valid.
307	Permanent redirect	The resource is no longer at the requested location. The new location is specified in the response location header.
308	Temporary redirect	The resource is temporarily located at a different location. The temporary location is specified in the response location header.
400	Bad request	The request was malformed or invalid.
401	Unauthorized	The request did not provide a valid authentication token.
403	Forbidden	The provided authentication token is not authorized for the resource.
404	Not found	An unknown resource was requested.
408	Request timeout	The request takes too long.
409	Conflict	The provided resource represents an out of date version of the resource.
418	I'm a teapot	The service refuses to brew coffee in a teapot.
429	Too many requests	The client is making too many requests in too short of a time period.
500	Internal server error	The server failed to properly process the request.
503	Service unavailable	The server is temporarily down. The client should try again with an exponential back off.

### Node.js
- Create your project directory
- Initialize it for use with NPM by running npm init -y
- Make sure .gitignore file contains node-modules
- Install any desired packages with npm install <package name here>
- Add require('<package name here>') to your JavaScript code
- Run your code with node main.js


### Authorization Services
When recording user information, you authenticate a user by taking their credentials and store an authentication token (in the form of a cookie) for a period of time. 
Stick to trusted, well-tested, authorization services to handle the majority of authorization.
Consider AWS Cognito and Google Firebase.

#### Account Creation and Login
Requires to service endpoints, **Create** and **Login**.

Create the web service using Express. 

Refer to the Simon-login files in the future for how to set up those programs.
Use uuid to generate tokens for unique identifiers.
Always securely store passwords.  Crytpographically hash the password and never store the actual password.  Use bcrypt package.
Use cookieParser to handle cookies and ensure that cookies are only passed from the original site.  cookieParser has built in functions httpOnly, secure, and sameSite which we used for this project.  


### Websocket
Websocket was created to solve problems created by the client/server model of HTTP.  It creates a peer to peer connection after an initial connection to the server, allowing for more efficient sharing of data between parties. 

#### Debugging Websocket

1. Create a directory named `testWebSocket` and change to that directory.
1. Run `npm init -y`.
1. Run `npm install ws`.
1. Open VS Code and create a file named `main.js`. Paste the following code.

   ```js
   const { WebSocketServer } = require('ws');

   const wss = new WebSocketServer({ port: 9900 });

   wss.on('connection', (ws) => {
     ws.on('message', (data) => {
       const msg = String.fromCharCode(...data);
       console.log('received: %s', msg);

       ws.send(`I heard you say "${msg}"`);
     });

     ws.send('Hello webSocket');
   });
   ```

1. Set breakpoints on the `ws.send` lines so you can inspect the code executing.
1. Start debugging by pressing `F5`. The first time you may need to choose Node.js as the debugger.

Debugging the client

1. Open the Chrome debugger by pressing `F12`.
1. Paste this code into the debugger console window and press enter to execute it. Executing this code will immediately hit the server breakpoint. Take a look at what is going on and then remove the breakpoint from the server.

   ```js
   const socket = new WebSocket('ws://localhost:9900');

   socket.onmessage = (event) => {
     console.log('received: ', event.data);
   };
   ```

1. Select the `Network` tab and then select the HTTP message that was generated by the execution of the above client code.
1. With the HTTP message selected, you then click the `Messages` tab to view the WebSocket messages
1. Send a message to the server by executing the following in the debugger console window. This will cause the second server breakpoint to hit. Explore and then remove the breakpoint from the server.
   ```js
   socket.send('I am listening');
   ```
1. You should see the messages in the `Messages` debugger window.
1. Send some more messages and observe the communication back and forth without stopping on the breakpoints.

After looking through the new code in the Simon repository, I don't know if I feel like I understand it.  I understand what each of the functions is doing, but I don't feel confident that I could achieve what I want with Websocket if I had to do it on my own.  There are a lot of steps in the peerProxy.js file and in the other Javascript files to handle websocket peer to peer communication.  But I did learn some new things from reading over it.


### Final Review
1. Port 80 is reserved for HTTP
1. HTTP status codes in the 300 range are for Content redirects or caching
1. Standard HTTP headers include: Content-type, Host, and Cookie
1. Cookies allo a server to store data on the client
1. App.use *always* comes before any other HTTP method, regardless of the method. It is a prefix path 
1. Hashing passwords is important because it improves security for users, making passwords unreadable
1. Websocket allows peer to peer communication rather than client to server communication.
1. The purpose of JSX is to inject HTML into JavaScript, componentize HTML, and allow for composability of HTML
1. Routes have paths which lead to a specific element
1. Fetch can be used in front end and back end code
1. Linux daemons do the following: execute independent of a user, start when a computer is rebooted, PM2 is an example.  Daemons do not fork other processes.

#### HTTP Error Cheat Sheet
200 — OK ✔️ 💯
Ok. The request went fine and the content requested was returned. This is normally used on GET requests

201 — Created 🐾
The resource was created and the server has acknowledged it. It could be useful on responses to POST or PUT requests. Additionally, the new resource could be returned as part of the response body.

204 — No Content 👌
The action was successful but there is no content returned. Useful for actions that do not require a response body, such as a DELETE action.

301 — Moved Permanently 🏃
This resource was moved to another location and the location is returned. This header is especially useful when URLs change over time (maybe due to a change in version, a migration, or some other disruptive change), keeping the old ones and returning a redirection to the new location allows old clients to update their references in their own time.

400 — Bad Request 👎
The request issued has problems (for example, might be lacking some required parameters). A good addition to a 400 response might be an error message that a developer can use to fix the request.

401 — Unauthorized 🚫 ✖️
Especially useful for authentication when the requested resource is not accessible to the user owning the request

403 — Forbidden ✖️ ⛔️
The resource is not accessible, but unlike 401, authentication will not affect the response.

404 — Not Found 🔍 🔎 🔦
The URL provided does not identify any resource. A good addition to this response could be a set of valid URLs that the client can use to get back on track (root URL, previous URL used, etc.).

405 — Method Not Allowed ✖️
The HTTP verb(e.g POST, GET, PUT etc)used on a resource is not allowed — for instance, doing a PUT on a resource that is read-only.

500 — Internal Server Error 🙈
A generic error code when an unexpected condition is met and the server crashes. Normally, this response is accompanied by an error message explaining what went wrong.
