//$("#main").append('Cameron Gillespie');

var name = "Cameron Gillespie";
var role = "GIS Web Developer";
var email = "gillespie.cam@gmail.com";
var twitter = "@degathem";
var github = "https://github.com/degathem";
var bioPicUrl = "https://lh6.googleusercontent.com/-BN_s-Iu3j1Y/Ul7XvntlbWI/AAAAAAAAB44/0G-uJ-nUMkA/w733-h550-no/IMG_2925.JPG";
var skills = ["HTML","CSS","JavaScript","GIS"];




bio = { 
	"name" : name,
	"role" : role,
	"email" : email,
	"twitter" : twitter,
	"github" : github,
	"biopic" : bioPicUrl,
	"welcomeMsg" : "Welcome to my resume",
	"skills" : skills
};


var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedEmail = HTMLemail.replace("%data%",bio.email);
var formattedtwitter = HTMLtwitter.replace("%data%",bio.twitter);
var formattedgithub = HTMLgithub.replace("%data%",bio.github);
var formattedbiopic = HTMLbioPic.replace("%data%",bioPicUrl);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMsg);
var formattedSkills = HTMLskills.replace("%data%",bio.skills);



$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedbiopic);
$("#header").append(formattedWelcomeMsg);

$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedtwitter);
$("#footerContacts").append(formattedgithub);

$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);