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

  