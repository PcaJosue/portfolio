export const Profile = {
    home: {
        title: "Hi, I'm Web Developer",
        presentation: "My name is Josué Pacheco",
        skills: ['Javascript', 'NodeJS', 'Angular2+', 'SQL', 'SCSS', 'Java'],
        links: { linkedin: 'https://www.linkedin.com/in/alexander-josue-pacheco/', github: 'https://github.com/PcaJosue', email: 'pca.josue@gmail.com' }

    },
    about: {
        skills: [
            { name: 'SCSS', level: 75 },
            { name: 'HTML', level: 90 },
            { name: 'Javascript', level: 80 },
            { name: 'Angular', level: 80 },
            { name: 'NodeJs', level: 70 },
            { name: 'SQL', level: 70 },
            { name: 'no SQL', level: 60 },
            { name: 'Java', level: 60 },
            { name: 'React', level: 50 }]
    },
    projects: [
        {
            title: 'Weather App',
            subtitle: 'Personal Project',
            description: 'A challenge from devchallenges.io, whose goal is to build a web application to display weekday weather information for different locations.',
            tools: ['Angular', 'API-REST', 'Typescript', 'SCSS', 'Jasmine', 'StoryBook'],
            image: { src: 'assets/images/weather.png', url: 'https://pcajosue.github.io/weather-app/' },
            links: { github: 'https://github.com/PcaJosue/weather-app', site: 'https://pcajosue.github.io/weather-app/' }
        },
        {
            title: 'Meal App',
            subtitle: 'Personal Project',
            description: 'Website where you can find various food recipes, categorized by regions and types of food.',
            tools: ['Angular', 'API-REST', 'Typescript', 'SCSS', 'Jasmine', 'StoryBook'],
            image: { src: 'assets/images/mealApp.png', url: 'https://pcajosue.github.io/meal-app/' },
            links: { github: 'https://github.com/PcaJosue/meal-app', site: 'https://pcajosue.github.io/meal-app/' }
        },
        {
            title: 'Curriculum Vitae App',
            subtitle: 'Personal Project',
            description: "Create Your Future with Our Professional Resumes in our APP, To create an effective CV, it's important to tailor it to the job you are applying for. This means including relevant keywords and phrases that match the job description. Using clear, concise language and bullet points can also make your CV easier to read and understand.",
            tools: ['Angular', 'Typescript', 'SCSS', 'NGRX'],
            image: { src: 'assets/images/cv.png', url: 'https://pcajosue.github.io/cv_app/' },
            links: { github: 'https://github.com/PcaJosue/cv_app', site: 'https://pcajosue.github.io/cv-app-home/' }
        },
        {
            title: 'Kanban',
            subtitle: 'Personal Project',
            description: 'The Kanban methodology is implemented by means of Kanban boards. It is a visual method of project management that allows teams to visualize their workflows and workload.On a Kanban board, work is displayed on a project in the form of a board organized by columns.Traditionally, each column represents a stage of the work.',
            tools: ['Angular', 'Typescript', 'SCSS', 'NGRX'],
            image: { src: 'assets/images/kanban.png', url: 'https://pcajosue.github.io/kanban-app/' },
            links: { github: 'https://github.com/PcaJosue/kanban-app', site: 'https://pcajosue.github.io/kanban-app/' }
        },
        {
            title: 'Pomodoro',
            subtitle: 'Personal Project',
            description: 'The Pomodoro Technique is a time management method that can be used for any task. For many, time is an enemy.The anxiety produced by "clock ticks," especially if you have a deadline, leads to inefficient work and study habits that in turn lead to procrastination.',
            tools: ['Angular', 'Typescript', 'SCSS', 'NGXS'],
            image: { src: 'assets/images/pomodoro.png', url: 'https://pcajosue.github.io/pomodoro/' },
            links: { github: 'https://github.com/PcaJosue/pomodoro', site: 'https://pcajosue.github.io/pomodoro/' }
        }
    ],
    works: [
        {
            position: 'Fullstack Developer',
            name: 'Rumzer LLC',
            startDate: new Date('02/01/2021'),
            endDate: null,
            url: 'https://rumzer.com/',
            functions: [
                'Build different UI component to display the functionality desired',
                'Analyze the requirements,design and implements them',
                "Build or manage the necessary API's",
                'Teammate code review'
            ]
        },
        {
            position: 'Technical Consultant',
            name: 'Kruger Corporation',
            startDate: new Date('10/01/2018'),
            endDate: new Date('12/01/2019'),
            url: 'https://krugercorp.com/',
            functions: [
                'Develope and maintenance of web applications in Angular',
                'Develope and maintenance of backend in Java - REST APIs',
            ]
        },
        {
            position: 'Junior Developer',
            name: 'Frontera Global s.a.',
            startDate: new Date('08/01/2018'),
            endDate: new Date('10/01/2018'),
            url: 'http://www.fronteraglobal.com/',
            functions: [
                'Develope of web applications in Angular',
                'Develope of backend in Java - REST APIs',
            ]
        },
        {
            position: 'Intern',
            name: 'Ministry of Industries and Productivity',
            startDate: new Date('02/01/2017'),
            endDate: new Date('02/12/2017'),
            url: 'https://www.industrias.gob.ec/',
            functions: [
                'Functionality tests',
                'Instalation and configuration of linux computers',
                "Develope of reports",
                'Develope of MVC web applications in JAVAEE - primefaces'
            ]
        }
    ],
    contact: {
        email: 'pca.josue@gmail.com'
    }
}
