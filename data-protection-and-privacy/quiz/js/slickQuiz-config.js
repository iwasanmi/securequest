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
            "q": "What is personally identifiable information (PII)?",
            "a": [
            {"option": "a). Data that is publicly available on the internet",      "correct": false},
            {"option": "b). Information that can identify an individual",     "correct": true},
            {"option": "c). Data stored in encrypted form for enhanced security",      "correct": false},
            {"option": "d). A type of malware that steals personal information",     "correct": false} // no comma here
            ],
      
            "correct": "<p><span>That's right! Your Answer is Correct</span></p>",
            "incorrect": "<p><span>Wrong !! </span> The Right Option is <b>B</b></p>" // no comma here
      },


      { // Question 2 - Multiple Choice, Single Answer
            "q": "What is the purpose of data encryption?",
            "a": [
            {"option": "a). To make data unreadable to unauthorized users",      "correct": true},
            {"option": "b). To compress data for efficient storage",     "correct": false},
            {"option": "c). To anonymize data for privacy protection",      "correct": false},
            {"option": "d). To ensure data integrity and accuracy",     "correct": false} // no comma here
            ],
      
            "correct": "<p><span>That's right! Your Answer is Correct</span></p>",
            "incorrect": "<p><span>Wrong !! </span> The Right Option is <b>A</b></p>" // no comma here
      },

      { // Question 3 - Multiple Choice, Single Answer
            "q": "What is the General Data Protection Regulation (GDPR)?",
            "a": [
            {"option": "a). A set of guidelines for secure data deletion",      "correct": false},
            {"option": "b). A legal framework for data protection and privacy in the European Union",     "correct": true},
            {"option": "c). A method of data anonymization for research purposes",      "correct": false},
            {"option": "d). A standard for secure transmission of data over the internet",     "correct": false} // no comma here
            ],
      
            "correct": "<p><span>That's right! Your Answer is Correct</span></p>",
            "incorrect": "<p><span>Wrong !! </span> The Right Option is <b>B</b></p>" // no comma here
      },

      { // Question 4 - Multiple Choice, Single Answer
            "q": "What is the principle of least privilege?",
            "a": [
            {"option": "a). Granting users the maximum level of access to data",      "correct": false},
            {"option": "b). Limiting user access to only what is necessary for their job roles",     "correct": true},
            {"option": "c). Sharing sensitive data with as many people as possible",      "correct": false},
            {"option": "d). Providing unrestricted access to all data within an organization",     "correct": false} // no comma here
            ],
      
            "correct": "<p><span>That's right! Your Answer is Correct</span></p>",
            "incorrect": "<p><span>Wrong !! </span> The Right Option is <b>B</b></p>" // no comma here
      },

      { // Question 5 - Multiple Choice, Single Answer
            "q": "What is the purpose of a privacy policy?",
            "a": [
            {"option": "a). To protect data from unauthorized access",      "correct": false},
            {"option": "b). To inform users about how their data will be collected and used",     "correct": true},
            {"option": "c). To ensure compliance with data retention regulations",      "correct": false},
            {"option": "d). To encrypt data for secure transmission over the internet",     "correct": true} // no comma here
            ],
      
            "correct": "<p><span>That's right! Your Answer is Correct</span></p>",
            "incorrect": "<p><span>Wrong !! </span> The Right Option is <b>B</b></p>" // no comma here
      },

      { // Question 6 - Multiple Choice, Single Answer
            "q": "What is data minimization?",
            "a": [
            {"option": "a). The process of encrypting all data within an organization",      "correct": false},
            {"option": "b). The practice of collecting only the necessary data for a specific purpose",     "correct": true},
            {"option": "c). The process of securely deleting all data after a certain period of time",      "correct": false},
            {"option": "d). The practice of making data available to the public by default",     "correct": false} // no comma here
            ],
      
            "correct": "<p><span>That's right! Your Answer is Correct</span></p>",
            "incorrect": "<p><span>Wrong !! </span> The Right Option is <b>B</b></p>" // no comma here
      },

      { // Question 7 - Multiple Choice, Single Answer
            "q": "What is two-factor authentication (2FA)?",
            "a": [
            {"option": "a). A method of encrypting data using two different algorithms",      "correct": false},
            {"option": "b). The process of verifying user identity through biometric information",     "correct":false},
            {"option": "c). The practice of using two different passwords for added security",      "correct": false},
            {"option": "d). The process of using two different factors to verify user identity",     "correct": true} // no comma here
            ],
      
            "correct": "<p><span>That's right! Your Answer is Correct</span></p>",
            "incorrect": "<p><span>Wrong !! </span> The Right Option is <b>D</b></p>" // no comma here
      },

      { // Question 8 - Multiple Choice, Single Answer
            "q": "What is a data breach?",
            "a": [
            {"option": "a). The intentional sharing of confidential data with authorized individuals",      "correct": false},
            {"option": "b). The accidental deletion of important data",     "correct": false},
            {"option": "c). The unauthorized access or disclosure of sensitive data",      "correct": true},
            {"option": "d). The process of securely transferring data between different systems",     "correct": false} // no comma here
            ],
      
            "correct": "<p><span>That's right! Your Answer is Correct</span></p>",
            "incorrect": "<p><span>Wrong !! </span> The Right Option is <b>C</b></p>" // no comma here
      },

      { // Question 9 - Multiple Choice, Single Answer
            "q": "What is anonymization of data?",
            "a": [
            {"option": "a). The process of securely encrypting data for storage",      "correct": false},
            {"option": "b). The practice of making data publicly accessible without any restrictions",     "correct": false},
            {"option": "c). The process of removing personally identifiable information from data",      "correct": true},
            {"option": "d). The practice of granting users full access to all available data",     "correct": false} // no comma here
            ],
      
            "correct": "<p><span>That's right! Your Answer is Correct</span></p>",
            "incorrect": "<p><span>Wrong !! </span> The Right Option is <b>C</b></p>" // no comma here
      },

      { // Question 10 - Multiple Choice, Single Answer
            "q": "What is a privacy impact assessment (PIA)?",
            "a": [
            {"option": "a). The process of auditing an organization's data security practices",      "correct": false},
            {"option": "b). The practice of notifying users about changes in privacy policies",     "correct": true},
            {"option": "c). The process of evaluating and addressing privacy risks associated with data processing",      "correct": false},
            {"option": "d). The practice of restricting data access to a select group of individuals",     "correct": false} // no comma here
            ],
      
            "correct": "<p><span>That's right! Your Answer is Correct</span></p>",
            "incorrect": "<p><span>Wrong !! </span> The Right Option is <b>C</b></p>" // no comma here
      },

  ],
};
