// Edit your personal info here. Empty strings hide the related button/link automatically.
import photo from '../assets/profile.webp'

export const profile = {
  name: 'Mostafa El-Hosseny',
  brand: 'Mostafa.dev',
  role: 'Frontend Developer | React.js Developer',
  location: 'Alexandria, Egypt',
  github: 'https://github.com/TLMostafa1650',
  linkedin: '', // e.g. 'https://www.linkedin.com/in/your-handle'
  email: '', // e.g. 'you@example.com'
  resume: '', // put your PDF in /public and use e.g. '/Mostafa-El-Hosseny-CV.pdf'
  photo,
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const heroTech = ['React', 'JavaScript', 'TypeScript', 'Tailwind', 'HTML', 'CSS']

export const stats = [
  { value: '2+ Years', label: 'Learning & building' },
  { value: '10+', label: 'Academic & personal projects' },
  { value: 'React', label: 'Primary frontend stack' },
]

export const skills = {
  Frontend: ['HTML5', 'CSS3', 'JavaScript ES6+', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'],
  'Backend / APIs': ['Node.js', 'Express.js', 'REST APIs', 'Firebase', 'MongoDB'],
  Tools: ['Git', 'GitHub', 'VS Code', 'npm', 'Vite'],
  Additional: ['Python', 'Java', 'C++', 'Adobe Premiere Pro'],
}

export const experience = [
  {
    title: 'Frontend / Web Development Projects',
    org: 'Personal & Academic Projects',
    text: 'Building React interfaces with a focus on responsive layouts, component architecture, API integration, and Git/GitHub workflows.',
  },
  { title: 'Java Development Intern', org: 'CodSoft', text: 'Internship focused on Java development.' },
  { title: 'Web Development / React Intern', org: 'Uneeq Interns', text: 'Internship focused on web development with React.' },
]

export const why = [
  { title: 'Clean Code', text: 'I focus on maintainable, reusable components and organized frontend architecture.' },
  { title: 'Responsive by Default', text: 'Interfaces should work beautifully across phones, tablets, laptops, and large screens.' },
  { title: 'User-Focused UI', text: 'I care about usability, visual hierarchy, accessibility, and smooth interactions.' },
  { title: 'Continuous Learning', text: 'I keep improving by building real projects and exploring modern technologies.' },
]
