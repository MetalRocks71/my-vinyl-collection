# Backroads App

[Working Application - Deployed](https://my-vinyls-collection.netlify.app/)

- my vinyl - working html/css/javascript project (contains assets)
  - navigate to the folder
  - run 'npm install'
  - once the dependencies are installed run 'npm start'


#### Create New React App

- install

```sh
npx create-react-app@latest backroads-app
```

- run dev server

```sh
npm start
```

#### SRC Folder (boilerplate)

- index.js

```js
import React from 'react'
import ReactDOM from 'react-dom/client'

// styles (typically global)
import './index.css'

// convention to name it App and setup in a separate file
import App from './App'
// import report web vitals
import reportWebVitals from './reportWebVitals'

// StrictMode

// StrictMode is a tool for highlighting potential problems in an application.Activates additional checks and warnings for its descendants.Runs only in Development, does not impact the production build. RENDERS TWICE !!! Possible to remove.

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
```

- remove in src

  - setupTests.js
  - reportWebVitals.js
  - App.test.js

- be careful with multiple css files

App.js

```js
function App() {
  return <h1>my vinyls collection</h1>
}

export default App
```

- remove
  - remove logo.svg
  - App.css

#### Setup Structure

- public/index.html

  - change title
  - copy/paste font-awesome link (from html project)

- index.css

  - copy/paste css (from html project - css/styles.css)
  - error in line 209, just comment out for now

```css
@media screen and (min-width: 768px) {
  /* .hero {
    background: linear-gradient(rgb(44, 174, 186, 0.7), rgba(0, 0, 0, 0.7)),
      url('../images/main.jpeg') center/cover no-repeat;
  } */
}
```

- src folder
  - copy/paste images folder (from html project)
  - move favicon.ico to public
- App.js
  - refactor to <React.Fragment>
  - copy/paste all the content within body tags, up to <script> (index.html)
  - select all "class" instances and refactor to "className" (CMD + D)
  - fix the comment bug (remove or comment out)
  - don't worry about - Using target="\_blank" without rel="noreferrer" warning,
    will fix it later
  - move README.md from final to current project

#### Setup Components

- in src create components folder
- in the components create following files
  - Navbar.js
  - Hero.js
  - About.js
  - Collection.js
  - Collectionrock.js
  - Tops.j
  - Topsrock.js
  - Footer.js
- setup components with default export (snippet - rafce)
- carefully move the code from App.js into components (files)
  - hint - look for navbar, footer and section tags
- App.js should be empty
- import and render all components in App.js (try auto imports)
- result is going to be the same, it's just easier to manage the code
- again, it's just my preference to split up code in such way.
  You can split it up in any way that makes the most sense to you.

#### Navbar

- first let's fix the image (logo)
  - setup import from images and update source

```js
```

#### Smooth Scroll

- html/css feature

```html
<!-- link -->
<a href="#services"> collections </a>
<!-- element -->
<section id="collection"></section>
```

```css
html {
  scroll-behavior: smooth;
}
.section {
  /* navbar height */
  scroll-margin-top: 4rem;
}
```

#### Page Links

- refactor repeating code

```js
<li>
  <a href='#home' className='nav-link'>
    home
  </a>
</li>
```

- figure out which data is repeating hint (href, text )
- in src create data.js and setup a structure
  - (hint - [{property:value},{property:value}])
- export/import iterate over the list,return elements and inject data

```js
export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about the music' },
  { id: 3, href: '#top', text: 'Top 10 Albums' },
  { id: 5, href: '#collection', text: 'The collection' },
]
export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://x.com/', icon: 'fa-brands fa-twitter' },
  { id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace' },
]
```

```js
import { pageLinks } from '../data'

{
  pageLinks.map((link) => {
    return (
      <li key={link.id}>
        <a href={link.href} className='nav-link'>
          {link.text}
        </a>
      </li>
    )
  })
}
```

#### Nav Icons (social-links)

- repeat the same steps (as with page links)
- add rel='noreferrer'

```js
{
  socialLinks.map((link) => {
    const { id, href, icon } = link
    return (
      <li key={id}>
        <a href={href} target='_blank' rel='noreferrer' className='nav-icon'>
          <i className={icon}></i>
        </a>
      </li>
    )
  })
}
```

#### Hero

- change title or text (optional)
- fix the image (path in css)

#### About

- fix the image (hint - just like with logo in the navbar)

#### Section Title

- in components create Title.js
- get the structure from one of the sections
- setup two props
- replace in About, Services, Tours

```js
const Title = ({ title, subTitle }) => {
  return (
    <div className='section-title'>
      <h2>
        {title} <span>{subTitle}</span>
      </h2>
    </div>
  )
}
export default Title
```

About.js

```js
// import
import Title from './Title'

// display
;<Title title='about' subTitle='us' />
```

#### Services

- refactor repeating code (hint - just like with page and social links)
  - setup data, export/import, iterate

data.js

```js
export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia',
  },
  // rest of the objects
]
```

Collection.js

```js
import { useState } from 'react'
import Title from './Title'
import { collection } from '../data'

const Collection = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  // Sort collection alphabetically by band name before rendering with operator
  const sortedCollection = [...collection].sort((a, b) =>
    a.band.localeCompare(b.band)
  )

  return (
    <section className="section collection" id="collection">
      <Title title="The " subtitle="Collection" />
      <div>
        <button className="category-btn" onClick={toggle}>
          Heavy Metal
        </button>
        {open && (
          <div className="section-center featured-center">
            {sortedCollection.map((collection) => {
              const { id, image, title, band, date, length, genre } = collection
              return (
                <article className="collection-card" key={id}>
                  <div className="collection-img-container">
                    <img src={image} className="collection-img" alt="" />
                    <p className="collection-date">{date}</p>
                  </div>
                  <div className="collection-info">
                    <div className="collection-title">
                      <h4>{title}</h4>
                    </div>
                    <div className="collection-footer">
                      <div>
                        <p>
                          <span>
                            <i className="fas fa-map"></i>
                          </span>{' '}
                          {band}
                        </p>
                        <p>
                          <span>
                            <i className="fas fa-map"></i>
                          </span>{' '}
                          {genre}
                        </p>
                        <p className="collection-length">{length}</p>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
export default Collection
```

#### Tops

- refactor repeating code

#### Footer

- refactor repeating code
- re-use page and social links
- in the <span id="date">provide current year (hint - {})

#### Alternative Approach (optional)

- in components create PageLinks.js
- import pageLinks
- return the entire list and replace current setup in Navbar, Footer
- "gotcha"
  - the more "moving parts" you will have the harder it's going to be to manage
  - my personal preference, if possible just use data

#### Challenge (optional)

- create more components (essentially, split up the code more)
- find all map methods and move elements to separate components
- By the end of the video you should have four additional components
  - Tops.js
  - Collection.js
  - SocialLink.js
  - PageLink.js

#### Continuous Deployment

- fix warnings (About Section)

- netlify account
- github account
- basic git commands :

  - remove existing git repo
    - Mac : rm -rf .git
    - Windows : rmdir -Force -Recurse .git
    - Windows : rd /s /q .git
      Windows commands were shared by students and I have not personally tested them.
  - setup new repo
    - git init
      create an empty git repository
    - git add
      adds new or changed files in your working directory
      to the Git staging area
    - git add .
      adds entire project
      apart from files/directories specified in .gitignore
    - git commit -m "first commit"
      A shortcut command that immediately creates a commit
      with a passed commit message.
    - push to github
      git remote add origin git@github.com:your-profile/repo-name.git
      git branch -M main
      git push -u origin main

#### Benefits

- don't need to keep project locally
- automatic builds

#### Warnings "Gotcha"

- Netlify treats warnings as errors

package.json

```json
"scripts": {
    "start": "react-scripts start",
    "build": "CI= react-scripts build",
    "local-build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```
