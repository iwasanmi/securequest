// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
  info: {
    name: " <img style='width:200px; height:200px;'  class='agent' src='../../img/bletchley_lady.svg' alt='Sweet World big logo'>Test Your Cyber Security Knowledge!!",
    main: "<p>Be Among the Professional Cyber Security Agent Leaderboard? Find out with this super knowledge quiz!</p>",
    results:"",
    level1:
      "CONGRATULATION YOU'RE NOW AN EXPERT AGENT ON THE LEADER BOARD<br><h3> Expert Agent Badge :</h3>  <img style='width:200px; height:150px;' src='../../img/badges/pro.png'/>",
    level2:
      "CONGRATULATION YOU'RE NOW AN ADVANCED LEARNER ON THE LEADER BOARD <br><h3> Advance Agent Badge:</h3></b>  <img style='width:200px; height:150px;' src='../../img/badges/pro.png'/>",
    level3:
      "CONGRATULATION YOU'RE NOW AN INTERMEDIATE AGENT ON THE LEADER BOARD <br><h3>Intermediate Agent Badge</h3> <img style='width:200px; height:150px;' src='../../img/badges/intermediateBadge.png'/>",
    level4:
      "WELLDONE, YOU'RE GETTING THERE. YOU'RE NOW AN AMATEUR AGENT ON THE LEADER BOARD <br><h3> Amateur Agent Badge :</h3> <img style='width:200px; height:150px;' src='../../img/badges/amateur.png'/>",
    level5:
      "WELLDONE, YOU CAN DO BETTER. YOU'RE NOW ON THE NOVICE AGENT ON THE LEADER BOARD <br><h3>Novice Agent Badge :</h3> <img style='width:200px; height:150px;' src='../../img/badges/novice.png'/>", // no comma here
  },
  questions: [
            { // Question 1 - Multiple Choice, Single Answer
                  "q": "What is an incident report?",
                  "a": [
                  {"option": "a). A report on cybersecurity threats in the news",      "correct": false},
                  {"option": "b). A report detailing an actual or suspected security incident",     "correct": true},
                  {"option": "c). A report on the financial performance of an organization",      "correct": false},
                  {"option": "d). A report on the installation and configuration of security tools",     "correct": false} // no comma here
                  ],
            
                  "correct": "<p><span>That's right! Your Answer is Correct</span></p>",
                  "incorrect": "<p><span>Wrong !! </span> The Right Option is <b>B</b></p>" // no comma here
            },


            { // Question 2 - Multiple Choice, Single Answer
                  "q": "Why is incident reporting important?",
                  "a": [
                  {"option": "a). To assign blame to individuals involved in the incident",      "correct": false},
                  {"option": "b). To fulfill regulatory requirements and compliance obligations",     "correct": true},
                  {"option": "c). To keep the incident details confidential and undisclosed",      "correct": false},
                  {"option": "d). To delay the incident response process",     "correct": false} // no comma here
                  ],
            
                  "correct": "<p><span>That's right! Your Answer is Correct</span></p>",
                  "incorrect": "<p><span>Wrong !! </span> The Right Option is <b>B</b></p>" // no comma here
            },

            { // Question 3 - Multiple Choice, Single Answer
                  "q": "Who should be responsible for incident reporting?",
                  "a": [
                  {"option": "a). Only the IT department",      "correct": false},
                  {"option": "b). Only the employees involved in the incident",     "correct": false},
                  {"option": "c). All employees within an organization",      "correct": true},
                  {"option": "d). Only the upper management",     "correct": false} // no comma here
                  ],
            
                  "correct": "<p><span>That's right! Your Answer is Correct</span></p>",
                  "incorrect": "<p><span>Wrong !! </span> The Right Option is <b>C</b></p>" // no comma here
            },

            { // Question 4 - Multiple Choice, Single Answer
                  "q": "When should an incident be reported?",
                  "a": [
                  {"option": "a). Only during regular business hours",      "correct": false},
                  {"option": "b). Only if the incident causes significant damage",     "correct": false},
                  {"option": "c). As soon as possible after the incident is discovered",      "correct": true},
                  {"option": "d). Only after conducting a thorough investigation",     "correct": false} // no comma here
                  ],
            
                  "correct": "<p><span>That's right! Your Answer is Correct</span></p>",
                  "incorrect": "<p><span>Wrong !! </span> The Right Option is <b>C</b></p>" // no comma here
            },

            { // Question 5 - Multiple Choice, Single Answer
                  "q": "What information should be included in an incident report?",
                  "a": [
                  {"option": "a). Only technical details about the incident",      "correct": false},
                  {"option": "b). Only the names of individuals involved in the incident",     "correct": false},
                  {"option": "c). Detailed description of the incident, date and time, impact, and actions taken",      "correct": true},
                  {"option": "d). Only recommendations for preventing future incidents",     "correct": true} // no comma here
                  ],
            
                  "correct": "<p><span>That's right! Your Answer is Correct</span></p>",
                  "incorrect": "<p><span>Wrong !! </span> The Right Option is <b>C</b></p>" // no comma here
            },

            { // Question 6 - Multiple Choice, Single Answer
                  "q": "Who should incident reports be submitted to?",
                  "a": [
                  {"option": "a). Only the IT department",      "correct": false},
                  {"option": "b). Only the CEO or top-level management",     "correct": false},
                  {"option": "c). Relevant stakeholders within the organization, such as IT and security teams",      "correct": true},
                  {"option": "d). External organizations and authorities",     "correct": false} // no comma here
                  ],
            
                  "correct": "<p><span>That's right! Your Answer is Correct</span></p>",
                  "incorrect": "<p><span>Wrong !! </span> The Right Option is <b>C</b></p>" // no comma here
            },

            { // Question 7 - Multiple Choice, Single Answer
                  "q": "What is the purpose of incident response?",
                  "a": [
                  {"option": "a). To ignore and overlook security incidents",      "correct": false},
                  {"option": "b). To assign blame to individuals involved in the incident",     "correct":true},
                  {"option": "c). To minimize the impact and restore normal operations as quickly as possible",      "correct": true},
                  {"option": "d). To delay the incident reporting process",     "correct": false} // no comma here
                  ],
            
                  "correct": "<p><span>That's right! Your Answer is Correct</span></p>",
                  "incorrect": "<p><span>Wrong !! </span> The Right Option is <b>B</b></p>" // no comma here
            },

            { // Question 8 - Multiple Choice, Single Answer
                  "q": "What is the role of documentation in incident reporting?",
                  "a": [
                  {"option": "a). It is not necessary to document incident details",      "correct": false},
                  {"option": "b). Documentation helps in assigning blame to individuals involved",     "correct": false},
                  {"option": "c). Documentation provides a record of the incident for analysis and future reference",      "correct": true},
                  {"option": "d). Documentation slows down the incident response process",     "correct": false} // no comma here
                  ],
            
                  "correct": "<p><span>That's right! Your Answer is Correct</span></p>",
                  "incorrect": "<p><span>Wrong !! </span> The Right Option is <b>C</b></p>" // no comma here
            },

            { // Question 9 - Multiple Choice, Single Answer
                  "q": "What is the purpose of conducting a post-incident review?",
                  "a": [
                  {"option": "a). To assign blame to individuals involved in the incident",      "correct": false},
                  {"option": "b). To document the incident details for legal purposes",     "correct": false},
                  {"option": "c). To learn from the incident and improve security measures",      "correct": true},
                  {"option": "d). To delay the incident response process",     "correct": false} // no comma here
                  ],
            
                  "correct": "<p><span>That's right! Your Answer is Correct</span></p>",
                  "incorrect": "<p><span>Wrong !! </span> The Right Option is <b>C</b></p>" // no comma here
            },

            { // Question 10 - Multiple Choice, Single Answer
                  "q": "How should incidents be classified or categorized in an incident reporting process?",
                  "a": [
                  {"option": "a). Only based on the financial impact of the incident",      "correct": false},
                  {"option": "b). Only based on the individuals involved in the incident",     "correct": false},
                  {"option": "c). Based on predefined categories such as data breaches, malware attacks, or physical security incidents",      "correct": true},
                  {"option": "d). Only based on the reputation of the organization",     "correct": false} // no comma here
                  ],
            
                  "correct": "<p><span>That's right! Your Answer is Correct</span></p>",
                  "incorrect": "<p><span>Wrong !! </span> The Right Option is <b>C</b></p>" // no comma here
            },



  ],
};
