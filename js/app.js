/* 
https://git.generalassemb.ly/SEI-CC/sei-1-22-wc/blob/main/Unit_1/04-dom/4.2-dom-events.md
https://git.generalassemb.ly/SEI-CC/sei-1-22-wc/blob/main/Unit_1/04-dom/4.2.1-dom-menu-lab-part-2.md
5.2 and 5.3 were where I got the most confusion from. I ended up copying and pasting those prolem for the sake
of getting the site to work.Functions were my weakest, and I definitely need to keep practicing functions!
My code is generally written above the correct code. I put notes on very bottom of the page.
*/
//Task 3.0

//Copy the following data structure to the top of script.js:

// Menu data structure
const menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];
//Create an <a> element.
//On the new element, add an href attribute with its value set
// to the href property of the "link" object.
//how does href attribut differ from href property?

//Set the new element's content to the value of the
//text property of the "link" object.
//googled: how to iterate over an array in an object js
/* this is what I wrote first. Clearly wrong. I wrote out mistakes I made 
at the botom of this page
menuLinks.forEach(function(links) {
    console.log(links);
});
const addingNew =menuLinks.href.add('<a>')
addingNew.menulinks.text.append('topMenuEl')
*/

//task 1.0
//Select and cache the <main> element in a variable, 
//named mainEl.
const mainEl = document.querySelector('main');
//how would I check to make sure I selected and cached it?
//Task 1.1
//Set the background color of mainEl 
//using the --main-bg CSS custom property.
//Using a custom property set on :root
//mainEl = background-color--main-bg  <-- I wrote this first
//the next day I wrote --> mainEl = document.style('--main-bg')
//https://developer.mozilla.org/en-US/docs/Web/CSS/var
mainEl.style.backgroundColor = 'var(--main-bg)';
//Task 1.2
//practice results:
//mainEl.innertext= ('<h1>SEI Rocks!</h1>')
//Set the content of mainEl to <h1>SEI Rocks!</h1>.
mainEl.innerHTML = '<h1> SEI Rocks!</h1>';

//Add a class of flex-ctr to mainEl.
//practice1:
//mainEl.class.add = ('flex-ctr')


mainEl.classList.add('flex-ctr');


//Task 2.0

//Select and cache the <nav id="top-menu"> 
//element in a variable named topMenuEl.
//practice: topMenuEl = document.querySelector('top-menu')
// I think we have to use getElementById because we already used queryselector?
const topMenuEl = document.getElementById('top-menu');
//I used querySelector at first >.>

//Task 2.1
//Set the height topMenuEl element to be 100%.
//practice: topMenuEl = height('100%')
//would topMenuEl = style.height('100%) work? No that made the whole screen white
topMenuEl.style.height = '100%';

//Task 2.2
//Set the background color of topMenuEl
// using the --top-menu-bg CSS custom property.
//practice: topMenuEl.style.color('--top-menu-bg)
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//Task 2.3
//Add a class of flex-around to topMenuEl
//practice: topMenuEl.style.('flex-around')
topMenuEl.classList.add('flex-around');


//task3.1
menuLinks.forEach(function (link) {
  const linkEl = document.createElement('a');
  linkEl.setAttribute('href', link.href);
  linkEl.textContent = link.text;
  topMenuEl.appendChild(linkEl);
});

//task 4.0
//subMenuEl= document.querySelector("sub-menu")
const subMenuEl = document.getElementById('sub-menu');
//task 4.1
//subMenuEl = '100%'
subMenuEl.style.height = '100%';
//task 4.2
//subMenuEl.style.backgroundColor('--sub-menu-bg')
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
//task 4.3
subMenuEl.classList.add('flex-around')
//task 4.4
//subMenuEl.style.position('absolute')
subMenuEl.style.position = 'absolute';
//task 4.5
//subMenuEl.style.top('0')
subMenuEl.style.top = '0';
//task 5.1 //i got this one wrong
//const topMenuLinks = document.querySelector.topMenuEl('a')
const topMenuLinks = document.querySelectorAll('#top-menu a');
let showingSubMenu = false;
//task 5.2 // I got this one very wrong
// Task 5.2
topMenuEl.addEventListener('click', function (evt) {
  evt.preventDefault();
  const link = evt.target;
  if (link.tagName !== 'A') return;
  console.log(link.textContent);

  // Task 5.3
  if (link.classList.contains('active')) {
    link.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return;
  }
  //5.4
  topMenuLinks.forEach(function (link) {
    link.classList.remove('active');
  });
  //5.5
  //.add.classList('#active')
  link.classList.add('active');
  //5.6
  // if menuLinks.subLinks
  // showingSubMenu = true
  //else return false
  const linkData = menuLinks.find(function (linkObj) {
    return linkObj.text === link.textContent;
  });
  showingSubMenu = 'subLinks' in linkData;

  //5.7
  /*
  const buildSubMenu = subLinks('a')
  subMenuEl = '100%'
  buildSubMenu === true
  
  if showingSubMenu === false
  subMenuEl.top('0')
  mainEl.innerHTML('<h1>about</h1>')
  */
  if (showingSubMenu) {
    buildSubMenu(linkData.subLinks);
    subMenuEl.style.top = '100%';
  } else {
    subMenuEl.style.top = '0';
    mainEl.innerHTML = '<h1>about</h1>';
  }
  //5.8
  /*
  buildSubMenu {
  clear.subMenuEl
  (for each subLinks
    const newA = createElement('a')
  newA.link.value('href')
  newA.content.value.text.link
  appendChild.subMenuEl
  }
  */ //Task 5.8
  function buildSubMenu(subLinks) {
    subMenuEl.innerHTML = '';
    subLinks.forEach(function (link) {
      const linkEl = document.createElement('a');
      linkEl.setAttribute('href', link.href);
      linkEl.textContent = link.text;
      subMenuEl.appendChild(linkEl);
    });
  }
  //task 6.0
  /*
  addEventListener('click',subMenuEl)
  preventDefault()
  if 'click' !== ('a') return
  */
  // Task 6.0
  subMenuEl.addEventListener('click', function (evt) {
    evt.preventDefault();
    const link = evt.target;
    if (link.tagName !== 'A') return;
    console.log(link.textContent);

    //6.1
    /*subMenuEl(evt)
    showingSubMenu = false
    subMenuEl.style.top('0')*/
    // Task 6.1
    showingSubMenu = false;
    subMenuEl.style.top = '0';

    //6.2
    //remove('active')topMenuLinks('a')
    // Task 6.2
    topMenuLinks.forEach(function (link) {
      link.classList.remove('active');
    });
    //6.3
    //mainEl('a')
    // Task 6.3
    mainEl.innerHTML = `<h1>${link.textContent}</h1>`;
  });

  /*
  what to study/what I missed:
  createELement() method https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
  setAttribute()  method
  textContent
  appendChild
  
  methods that are used to create something seem to be preceded
  by document. while methods that modify an element don' need to be
  */

  /*
  Task 4.0
  Select and cache the <nav id="sub-menu"> element 
  in a variable named subMenuEl
  subMenuEl = document.getElementById('nav')
  correction: the string should have 'sub-menu' in it, not nav
  why is that?
  Task 4.1
  Set the height subMenuEl element to be 100%.
  style.height('100%')
  correction: didn't target subMenuEl
  Task 4.2
  Set the background color of subMenuEl using the --sub-menu-bg CSS custom property.
  style.backgroundcolor.subMenuEl('--sub-menu-bg)
  this is kinda correct, but out of order. I wonder if it will work
  also var needs to be in front of (
  Task 4.3
  Add the class of flex-around to the subMenuEl element.
  flex-around.subMenuEl
  correction: I forgot about classList..and add
  Task 4.4
  Set the CSS position property of subMenuEl to the value of absolute.
  submenu.style.position('absolute')
  Task 4.5
  Set the CSS top property of subMenuEl to the value of 0.
  subMenuEl.value('0')
  top and I don't think it needs ()
  Task 5.0
  Replace the menuLinks array in script.js with this version
  that adds sub-menu data:
  Task 5.1
  Select and cache all of the <a> elements inside of topMenuEl
   in a variable named topMenuLinks.
   const topMenuEl= document.querySelectAll('a')
   const showingSubMenu = false
   it needs to be ('#top-menu a'); not ('a')
  also const showingSubMenu should be a let var. I was
  kinda thinking it needed to be a let when they said a "global variable"
  Declare a global showingSubMenu variable and initialize it to false;
  Task 5.2 This is where I really started to mess up.
  I need to pratie this part more, and functions overall.
  function addEventListener(topMenuEl)
  preventDefault ()
  return
  Attach a delegated 'click' event listener to topMenuEl.
  The first line of code of the event listener function should 
  call the event object's preventDefault() method.
  The second line of code function should immediately return if 
  the element clicked was not an <a> element.
  
      👀 Hint: DOM elements have a tagName property.
  
  
  
      Task 5.3
  
  This feature "deselects" the menu item if it's clicked when it's currently active, resulting in the sub-menu sliding up as well.
  
  Next in the event listener, if the clicked <a> link has a class of active:
  
      Remove the active class from the clicked <a> element.
      Set the showingSubMenu to false.
      Set the CSS top property of subMenuEl to 0.
      return; from the event listener function.
  
  Task 5.4
  
  At this point, a new menu item has been clicked and it's time to "reset" any currently active menu item...
  
  Add code to the bottom of the the event listener that iterates over each <a> element in topMenuLinks and removes the class name of active, regardless of whether the <a> element has a class of active or not.
  
  Hint: Removing a non-existent class from an element does not cause an error, so just remove it!
  for topMenuLinks ('a').remove */
  //  <--- this properly closes the function I think
});