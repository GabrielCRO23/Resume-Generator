# Resume Generator
Made by Gabriel Hrastovic.

Live demo on: https://gabrielcro23.github.io/Resume-Generator/

If you clone this repo, you must first run **npm install** to install the dependencies below, followed by **npm run start**

This project uses:
-React
-Material UI for styled components
-Quill for the rich text editor
-HTML Parser to parse the rich text editor, since the rich text editor returns pure HTML

 This project took me roughly 100 hours of work to complete, mostly spent reading React documentation - and it was my first larger React project. The resume follows a LaTeX-style resume design. I wasn't sure whether to build it with class components or functional components, but I decided to build it with the more modern functional components and learn about using React hooks properly. I also had to decide between using conditional rendering or React routing for the preview page, and decided conditional rendering probably works best for this project.

 Some issues I had with the app was finding a working rich text editor, as most of them had conflicting issues with Material UI. Another issue was getting the preview page to save as a pdf, after webpack 5 came out it removed node polyfills which ruined a lot of libraries that used to be able to save pdf files from React components, so I had to resort to using the basic window.print() function, but I styled it a bit. The code is definitely not as clean as I would like it to be and needs some refactoring, I don't think as many useStates as I have are necessary and the input fields can just be condensed into one larger useState. It doesn't really matter for this app, but for larger apps something like that may cause optimization issues.



_______________________

I built this project because I couldn't find good and free to use resume makers online. So I made my own, which I can also edit easily in the future if I want to add or change sections, styles, fonts, etc. of the app.

