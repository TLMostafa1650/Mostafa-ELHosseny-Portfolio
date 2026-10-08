# Mostafa.dev portfolio
npm install && npm run dev      # develop
npm run build && npm run preview # production check

Edit src/data/profile.js (email, LinkedIn, resume path) and src/data/projects.js (screenshots, repo links).
Empty values hide their buttons. For SPA hosting add a redirect so unknown paths serve index.html (Netlify: public/_redirects with "/* /index.html 200").
