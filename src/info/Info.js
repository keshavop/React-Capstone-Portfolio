import self from "../img/self.png"




export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];


export const info = {
    firstName: " Keshav",
    lastName: "Kumar",
    initials: "keshavop", 
    position: "a Full Stack Web developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '👻',
            text: 'Techie Nerd'
        },
        {
            emoji: '🦉',
            text: 'Night Owl'
        },
        {
            emoji: "💼",
            text: "Student at Lovely Professional University"
        },
        {
            emoji: "📧",
            text: "keshav2op@gmail.com"
        }
    ],
    socials: [
        
        {
            link: "https://github.com/keshavop",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/keshavop",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }


    ],
    bio: "I'm Keshav Kumar, currently pursuing my Bachelor's degree (Computer Science & Engineering) from LPU, Jalandhar. I am a nerd and a technophile about new technologies. Along with this, I am also learning Android App Development & Full Stack web development.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'html5', 'css3', 'c++', 'java', 'python', 'kotlin'],
            exposedTo: ['nodejs', 'python', 'javascript' ]
        }
    ,
    hobbies: [
        {
            label: 'anime',
            emoji: '🎥'
        },
        {
            label: 'mechanic',
            emoji: '⚒️'
        },
        {
            label: 'gaming',
            emoji: '🎮'
        },
        {
            label: 'traveling',
            emoji: '🧳'
        }

    ],
    
}