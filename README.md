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
