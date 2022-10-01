# TodoList

v0.1 09/29/22 

- basic functionalities implemented: add, edit, toggle, remove todos

TODO:
- src code needs clean up
  - in general reflect on things learned about
    - approaching software development
      - functional -> improvement
    - and other things
    - maybe js specific
  - organizing WnC course notes
  - restructure implementation -> OOP

- make website look better with CSS(?) and better HTML formatting

- publish website on Github

- Develop cross platform support with Electron

- Expand usability by modulizing program & integrating into larger systems possibly

------------------------------------------------------------------
v0.2 09/30/22 

- initially tried OOP, because the WnC way of updating entire displays even with minor changes felt bad
- realized i dont really know what OOP means and that i really meant to decentralize the design
  to enable modularized updates in the above statement

- ran into issue with index access scheme in the original, centralized way of managing things
  - its annoying and unnecessary to try to maintain knowledge about the global container index
    between all the individual todo objects, esp with frequent position updates from removals
    and whatnot
  - also, why should order of todos matter in the container?
- changed access scheme to global container to use object reference instead

- without indexes, ran into issue of providing the todo object context to event handlers
- tried to pass obj ref as did with indexes, but got weird string "[Object Object]" instead
- p sure it's because all element attributes are strings, parsing a number like index from string
    was probs ok
- but in string concat, obj.toString() was probs invoked and it was not the mem addr I expected
- probs couldve made this work, if i encoded the ob ref differently, or overrode the toString method
- but this is a sketchy way of passing access to objs

- the core issue is the event listener is attached to the button, but the context of the button is not enough to resolve the click event. I need info from the todo object to perform user actions.

- learned about javascript 'closure' concept to run my event handlers in properly contextualized environment, came upon this concept when researching about passing object references to event handlers

- fixated a bit on OOP, cuz with closure, the java style todo class is like not really useful anymore, i can run a producer function with the closure stuff and it'd be all the same

- tried to integrate javascript class and closure, failed, cannot put obj ref info in void space between class def and constructor, in part because i dont have that info at that time of obj creation, but also that area of class scope does not allow instance variables, its just all around
bad match of concepts, i think they do not go well together in a meaningfully constructive way

- javascript class and closure might still could be used together in other interesting ways, pending further research

- branched out research to chaining event listeners, using the button listener as jumping pad to 
invoke my todo obj listener, where the click events can be properly resolved
  - seems like wasteful idea

- inventing own wheel with custom addEventListener could be worth a try

- WnC course taught me some useful things, closure was introduced without name, using debugger, calibrating expectation vs reality as means of progress & learning, mentality to get minVP first b4 priv to improv, etc

-need beyond bits and pieces of tips, need as goal developing of systematic understanding of js

- systematic understanding comes from generative research and purposeful application.

TODOs:

- get rid of class def, use producer function instead to make the todo objects, class is not needed

- adjust toggleAll function for array -> set replacement

- clean up comments and dev notes

- add 'clear list' option similar to toggleAll

- creating a second 'done-list' to catch finished todos, in parallel of offering straight up removal option

- expanding scope of program to prescriptively aid user, possibly with degree of freedom around working with guiding questions (creation, config, present, etc)

- QoL updates:
  - make static length of text display & hidden input field so no component jumping left right
  - make display better looking with CSS(?) and better formatting

- publish web based application on Github

- possible login component to support stateful user interaction (keeping state between user sessions) and possibly for easier time syncing state between platforms in future cross-platform update

- Develop cross platform support, starting research with Electron option

- Further expand usability by modulizing program & integrating into larger systems possibly

------------------------------------------------------------------
v0.3

- replaced class def with createTodoEntry function for init todo entry objs
- used foreach for set iteration in toggleAll to adjust for arr -> set container type change
- added clearAll goal in v0.2 TODOs from adjusting toggleAll


