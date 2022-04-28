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
            image: { src: '../../assets/images/weather.png', url: 'https://github.com/PcaJosue/weather-app' },
            links: { github: 'https://github.com/PcaJosue/weather-app' }
        },
        {
            title: 'Meal App',
            subtitle: 'Personal Project',
            description: 'Website where you can find various food recipes, categorized by regions and types of food.',
            tools: ['Angular', 'API-REST', 'Typescript', 'SCSS', 'Jasmine', 'StoryBook'],
            image: { src: '../../assets/images/mealApp.png', url: 'https://github.com/PcaJosue/meal-app' },
            links: { github: 'https://github.com/PcaJosue/meal-app' }
        },
        {
            title: 'Curriculum Vitae App',
            subtitle: 'Personal Project',
            description: 'Web application where you can build your resume for free, you can choose between a format with design or a format for international basic.',
            tools: ['Angular', 'Typescript', 'SCSS', 'NGRX'],
            image: { src: '../../assets/images/cv.png', url: 'https://github.com/PcaJosue/cv_app' },
            links: { github: 'https://github.com/PcaJosue/cv_app' }
        },
        {
            title: 'Kanban',
            subtitle: 'Personal Project',
            description: 'The Kanban methodology is implemented by means of Kanban boards. It is a visual method of project management that allows teams to visualize their workflows and workload.On a Kanban board, work is displayed on a project in the form of a board organized by columns.Traditionally, each column represents a stage of the work.',
            tools: ['Angular', 'Typescript', 'SCSS', 'NGRX'],
            image: { src: '../../assets/images/kanban.png', url: 'https://github.com/PcaJosue/kanban-app' },
            links: { github: 'https://github.com/PcaJosue/kanban-app' }
        },
        {
            title: 'Pomodoro',
            subtitle: 'Personal Project',
            description: 'The Pomodoro Technique is a time management method that can be used for any task. For many, time is an enemy.The anxiety produced by "clock ticks," especially if you have a deadline, leads to inefficient work and study habits that in turn lead to procrastination.',
            tools: ['Angular', 'Typescript', 'SCSS', 'NGXS'],
            image: { src: '../../assets/images/pomodoro.png', url: 'https://github.com/PcaJosue/pomodoro' },
            links: { github: 'https://github.com/PcaJosue/pomodoro' }
        }
    ]
}