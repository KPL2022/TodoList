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
  