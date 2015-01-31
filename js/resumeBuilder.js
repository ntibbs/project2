//bio object
var bio = {
	"name": "Nicholas Tibbs",
	"role": "Front-end Web Developer",
	"contacts": {
		"mobile": "(804) 393-8804",
		"email": "ntibbs1126@gmail.com",
		"github": "ntibbs",
		"twitter": "tibbs_nicholas",
		"location": "Richmond, VA"
	},
	"welcomeMessage": "Welcome!",
	"biopic": "images/fry.jpg",	
	"skills": [
	"HTML", "CSS", "Javascript"
	]

}

//work object
var work = {
	"jobs": [
		{
		"employer": "Capital One",
		"title": "Fraud Detection Coordinator",
		"dates": "June 2012 - present",
		"location": "Glen Allen, VA",
		"description": "Catch fraudulent activity on credit cards"
		},
				{
		"employer": "Geico",
		"title": "Homeowners insurance sales",
		"dates": "October 2006 - September 2008",
		"location": "Fredericksubrg, VA",
		"description": "Sell homeowners insurance"
		},
				{
		"employer": "Army National Guard",
		"title": "Specialist (13-B)",
		"dates": "November 2008 - November 2014",
		"location": "Oil City, Pa",
		"description": "Operate various positions on the m119 howitzer"
		}
	]
}

//education object
var education = {
	"schools": [
		{
		"name": "Old Dominion University",
		//"degree": "N/A",
		//"dates": "N/A",
		"location": "Norfolk, VA",
		"majors": [
		"Engineering"
		]
		}
	],
	"onlineCourses": [
		{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"dates": 2015,
		"url": "www.udacity.com"
		}
	]
}

//project object
var projects = {
	"projects": [
	{
	"title": "Page Mock",
	"dates": "December 2014",
	"description": "Create a website based off a designers mockup",
	"image": ["images/page-mock.png"]
	},
	{
	"title": "Portfolio",
	"dates": "December 2014",
	"description": "Create a website to desplay our work",
	"image": ["images/portfolio.png"]
	}
	]
}

bio.display = function () {
	//code for display bio
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	$("#header").prepend(formattedName);

	var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);
	$("#header").append(formattedBiopic);

	var formattedwelcomeMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").append(formattedwelcomeMessage);

	//code for display skills
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
		$("#skills").append(formattedSkill);
	}

	//code for display bio.contacts
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	$("#topContacts, #footerContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	$("#topContacts, #footerContacts").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	$("#topContacts, #footerContacts").append(formattedGithub);

	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#topContacts, #footerContacts").append(formattedLocation);

	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	$("#topContacts, #footerContacts").append(formattedTwitter);
}


bio.display();

education.display = function () {
	//code for display education
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		$("#education").append(formattedName);

		//var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		//$("#education").append(formattedDegree);

		//var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		//$("#education").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$("#education").append(formattedLocation);

		var formattedMajors = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$("#education").append(formattedMajors);
	}

	for (school in education.onlineCourses) {
		$("#education").append(HTMLonlineClasses);

		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[school].title);
		$("#education").append(formattedTitle);

		var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[school].school);
		$("#education").append(formattedSchool);

		var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[school].dates);
		$("#education").append(formattedDates);

		var formattedUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[school].url);
		$("#education").append(formattedUrl);
	}
}

education.display();

work.display = function () {
	//code for display work
	for (job in work.jobs) {
   		$("#workExperience").append(HTMLworkStart);

    	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    	var formattedEmployerTitle = formattedEmployer + formattedTitle;
    	$(".work-entry:last").append(formattedEmployerTitle);

   		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    	$(".work-entry:last").append(formattedDates);

    	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    	$(".work-entry:last").append(formattedLocation);

    	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    	$(".work-entry:last").append(formattedDescription);
	}
}

work.display();


projects.display = function () {
	for (project in projects.projects) {
	$("#projects").append(HTMLprojectStart);

	var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);

	var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);

	var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);

	if (projects.projects[project].image.length > 0) {
		for (image in projects.projects[project].image) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].image[image]);
			$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

$(document).click(function(loc) {
	var x = loc.pageX
	var y = loc.pageY

	logClicks(x, y)
});

$("#mapDiv").append(googleMap);z