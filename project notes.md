notes:

consolidated 10/01/22:

  1. "learning" ::: "repeated expectation calibration"
      todos (expectation) (reality)
      todos (undefined, 95%) ()
      var todos = ['item1', 'item2', 'item3'];
      todos (arr with 3 items, 95%) ()
       
  2. often times element related stuff like attributes are strings

  3. javascript is loosely typed

  4. at core of web based application, DOM, interacting between document and backend code

  5. "partner" relationship, vs "client & provider" common in vertial program structure

  6. 'this' keyword is slippery, also, string by reference or value?

  7. javascript differentiates between undefined and null

  8. directly editing innerHTML is apparently fragile practice, text node is better?

  9. naming scheme of variable might need examination, with many variables, and closure

  10. centralized vs decentralized management of information

  11. D-side of things, 'style' attribute seems interesting, related to CSS?

  12. 'new' keyword in javascript is weird, https://javascript.info/constructor-new

  13. https://stackoverflow.com/questions/18600102/ how-to-reference-object-instance-from-event-handler
    
      - "Very interesting approach. Helps me realize that calling the handler within a callback has the advantage of not having to pass the event object around"
  
  14. def 'callback'?
  
  15. https://blog.logrocket.com/how-to-decide-between-classes-v-closures-in-javascript/
    - "Encapsulation is one of the core tenets of OOP (object oriented programming)"
    - more on OOP, generative research

  16. thoughts on closure & in general

    - doesnt look like i need classes anymore if i can use closure

    - closure as a way to pass around the context has better affinity with the centralized
      helipad initial landing spot of frontend signals to backend style of doing things, 
        with the generic event handler invoking my custom handler with my params n whatnot

    - true OOP would require me to like, basically chain stack listeners, so when button listener
        fires off, my listener on the button listener chain reacts and invokes my object's 
          event handler with my object's context, which is what i need to resolve the button's event

          - in this strategy, the button's listener is just a placeholder so to speak, kind of a waste
              and not elegant, not sure if its good practice

          - how do people resolve the issue of not having the right context to handle event where
              the event is triggered?
            
              https://stackoverflow.com/questions/43695014/how-to-chain-addeventlistener
          - 'custom addEventListener to redirect handling location'
          - 'But messing about with built-in prototypes is something that is often advised against, as it can have unwanted side effects.'

    - variables vs object properties
    - static variables vs instance variables vs scope in javascript
    
    - difference between javascript and java

    - a traditional java program could be a calculator application
    - input is stable, numbers and operators, the program is like a large, complex function
    - a traditional javascript program faces a harsher environment
    - a typical user is predicably unpredictable, no telling what order or which links they will click
    - the program must not only know how to resolve events, but also what context info is needed,
        and how to access them. Where the event is handled matters.
    - less known about input, more work needed from program, more context awareness
    - javascript feels like a more optimized variant of java for web platforms
    - java is generic solution, widely applicable, but rarely best solution for particular use cases
    - javascript, kind of messy of a language, but better affinity for the web environment

    - javascript is really sensitive to context, like you can often times access random variables
      in your parent context if you make a typo or use a keyword name for your variable

    - https://stackoverflow.com/questions/111102/how-do-javascript-closures-work
    https://www.javascripttutorial.net/javascript-closure/

    - need beyond bits and pieces of tips, need as goal developing of systematic understanding of js

    - possible memory leak issue with js closure?

    - in js, functions are first class citizens, implications of this, if true?

  17. 'learning', 'repeated expectation calibration', 'follow your intuition, but verify'

  18. reducing 'unnecessary work', 'redundant work'

  19. preemptive load resource in anticipation of usage, cache similar concept, locality principle

  CSS related:

  20. h1-h6 header tags, difference?

  21. style element should be in head element
  https://stackoverflow.com/questions/1303416/does-style-have-to-be-in-the-head-of-an-html-document

  22. https://www.w3schools.com/css/css_border_rounded.asp

  23. CSS should have its own file?

  24. inspirations for todo list app appearance..
  https://asana.com/uses/to-do-list?utm_campaign=NB--NAMER--EN--Catch-All--All-Device--DSA&utm_source=google&utm_medium=pd_cpc_nb&gclid=Cj0KCQjwyt-ZBhCNARIsAKH1174-JOY_11CJekBPV5RoR1ofPOB7nhRAqGbedBy1scjVvvrbl-zHcUgaAnWxEALw_wcB&gclsrc=aw.ds

  25. https://www.w3schools.com/css/css_website_layout.asp

  26. CSS selector is kinda like HTML element, with javascript-isque syntax, properties mostly strings i assume?

  27. external CSS kinda like C preprocessor, just copy paste stuff, might be same as internal underneath

  28. How to add CSS external, internal, inline

  29. https://www.w3schools.com/colors/colors_names.asp

  30. background img, repeat for ambient cover, specific bkgd obj img can use position or no repeat

  31. background img attachment, scroll or fixed

  32. background property short hand: color image repeat position

  33. vertical vs lateral learning, paused tutorial at border section

  34. selector, class property?
        - selecting by id with '#' prefix
        - selecting by class property like .colortext
        - batch select with ',' for delin

  35. 'float' concept, and <div> element for 'float content'?

  36. more modern way to imp column layout -> CSS flexbox

  37. flex-flow: row wrap;

  38. justify-content: space-between;

  39. align and justify content kinda do the same thing no?

  40. justify-content is horizontal alignment, align-items is vertical...

  41. CSS 'ul li' for selector, no ',' delin, what is going on here?

  42. what exactly is a 'flex line' vs 'flex item'?

  43. when, how utilize expert example in learning, when generative research instead 

  44. using 'position' property for alignment purposes, 'normal flow', overlapping other elements

  45. add needs to go out of global-actions div element, like google search bar by itself

  46. class property is just id for CSS, disp:flex is core of flex containers

  47. flex container names should have 'container' somewhere for naming clarity

  48. footer img should be fixed position, when list content changes

  49. possible O(1) removeAll() with clearing inner HTML, but i needa somehow get the list title text outta there...

  50. https://dbushell.com/about/
  Found this guy's website from inspecting LoA's website source code lmao, portfolio, interesting

  51. why use 'new' keyword, why not?

  52. new style of obj creation with lstEntry objs, using closure to mask certain inner properties

  53. https://stackoverflow.com/questions/1646698/what-is-the-new-keyword-in-javascript

  54. new style of using closure on creating coherent todo entry objs, with () embedded

  55. apparently cookies suck, i agree, i should try local storage? meh..lets get a basic working
      version with cookies first

  56. syncUpdate for now just replaces all properties...

  57. need to imp cid recycle system if keep using cookies for storage

  58. https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/

  59. convert string to boolean, interesting https://stackoverflow.com/questions/263965/how-can-i-convert-a-string-to-boolean-in-javascript

  60. possible alternative to cookies, for basic storage
  https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API

  61. HTTP redirects to get todoList from index.html
  https://blog.hubspot.com/website/html-redirect

  62. cookies http only
  https://stackoverflow.com/questions/46216863/how-to-edit-cookie-with-javascript

  63. cool closure article https://www.webtips.dev/private-properties-in-javascript

  64. min-content && max-content for size measurement in CSS

  65. static env, CSS, https://stackoverflow.com/questions/50068078/how-to-prevent-flex-items-from-overflowing-flex-parent-with-no-wrap

  66. fixed height vs flex https://stackoverflow.com/questions/64098500/flex-item-content-overflows-container

  67. https://stackoverflow.com/questions/27618000/why-ul-adds-extra-top-margin

  68. ghibi wallpaper link
  https://www.reddit.com/r/ghibli/comments/1vp5p9/collection_of_my_favourite_ghibli_wallpapers_feel/

  69. https://www.google.com/search?q=css+max-height+flexbox&oq=css+max-height+flexbox&aqs=chrome..69i57j0i22i30j0i390l4j69i60.3144j0j4&sourceid=chrome&ie=UTF-8

  max-height property, and/or height needed for overflow property to work

  70. flexbox, align-item purpose https://stackoverflow.com/questions/33212892/how-to-make-a-flex-item-not-fill-the-height-of-the-flex-container

  71. zapier interface design is good
  https://zapier.com/blog/best-todo-list-apps/

  72. js insert line break with html break element
  https://stackoverflow.com/questions/8147376/how-to-insert-a-javascript-textnode-element-on-a-newline

  73. http://cssdesignpatterns.com/ holy jes

  74. https://dev.to/lennythedev/css-gotcha-how-to-fill-page-with-a-div-270j

  75. flexbox is such a god-send

  76. issue with setting b4 aligning, offset child from parent

  77. https://css-tricks.com/snippets/css/a-guide-to-flexbox/

  78. CSS & text nodes
https://stackoverflow.com/questions/5688712/is-there-a-css-selector-for-text-nodes

  79. https://stackoverflow.com/questions/21093570/force-page-zoom-at-100-with-js

  80. https://www.w3schools.com/jsref/prop_style_visibility.asp

  81. https://www.w3.org/TR/css-flexbox-1/#auto-margins

  82. https://stackoverflow.com/questions/47456839/flex-item-is-not-shrinking-smaller-than-its-content

  83. https://stackoverflow.com/questions/5549114/change-font-after-createtextnode

  84. https://dev.to/lennythedev/css-gotcha-how-to-fill-page-with-a-div-270j
  
  84. todo list example with really cool CSS
  https://www.w3schools.com/howto/howto_js_todolist.asp

  85. https://www.w3schools.com/howto/howto_website_bootstrap5.asp

  86. CSS Grid is better for static placement of components, there are elements i could use that for (probs actually all but the entry lists that need flexbox), but its not well supported yet?

  87. position: fixed, new "stacking context"

  88. z-index, "stacking order"

  89. single item flexbox use a-ok

  90. overlay related learning -> used position property CSS, mixed with flexbox(for centering)

  91. event listener is more generic than expected? can imp on div for click page response too

  92. flexbox only does up to 2D, usually 1D, Grid either 1D or 2D, but with 3D placement better support, but Grid is newer, less supported layout module afaik

  93. another way to do overlapping elements is with positioning, but using position with flexbox? Need to research on possible side effects...   

  94. really good flexbox transition animation example
  https://codepen.io/thomas-eilermann/pen/grjEjE

  95. it appears that CSS can also handle events to a certain degree?

  96. https://stackoverflow.com/questions/41711365/flexbox-child-any-way-to-reset-display-none

  97. https://stackoverflow.com/questions/64636492/how-to-completely-hide-an-element-with-margin-outside-the-page

  98. transition end event 
  https://dev.to/tylerlwsmith/leveraging-javascript-to-implement-css-transitions-that-use-display-none-4hhb

  99. https://hellobharadwaj.medium.com/electron-plus-angular-react-why-use-2-different-package-json-files-361ae47d07f3

  100. https://www.logicflow.ai/blog/angular-desktop-applications-with-electron

  101. generative research:
  - interface animations
    - scrollbar disappear after a few seconds of no use
  - svg for graphing mindmap
  - react as option for UI components
  - Angular for dev framework
    - typescript for angular language
  - iframes for integrating mindmap module possibly
  - mind meister uses list, i think generic graph is better representation for my module..
  - jQuery...what is this used for?
  - Ajax...
  - generic web application structure i guess
    - what is considered front-end, what is back-end?
  - Hot Reload
  - SASS? bruh so many "buzz words" it feels like, which ones actually relevant to program quality?

  102. https://www.htmlgoodies.com/javascript/the-model-view-viewmodel-pattern-and-angular-development/

  architectual design pattern

  103. https://medium.com/@stephen.jcombs/10-best-vscode-extensions-for-angular-dev-in-2021-bd3773b6f882#e7c7

  104. https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html

  
  

  