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

x get rid of class def, use producer function instead to make the todo objects, class is not needed

x adjust toggleAll function for array -> set replacement

x clean up comments and dev notes

x add 'clear list' option similar to toggleAll

x creating a second 'done-list' to catch finished todos, in parallel of offering straight up removal option

x added names for the disp lists

- expanding scope of program to prescriptively aid user, possibly with degree of freedom around working with guiding questions (creation, config, present, etc)
  i. in other words, implement basic evaluation framework

- QoL updates:
  - make static length of text display & hidden input field so no component jumping left right
  - make display better looking with CSS(?) and better formatting

- publish web based application on Github

- possible login component to support stateful user interaction (keeping state between user sessions) and possibly for easier time syncing state between platforms in future cross-platform update

- Develop cross platform support, starting research with Electron option

- Further expand usability by modulizing program & integrating into larger systems possibly

------------------------------------------------------------------
v0.3

update 1:
- replaced class def with createTodoEntry function for init todo entry objs
- used foreach for set iteration in toggleAll to adjust for arr -> set container type change
- added clearAll goal in v0.2 TODOs from adjusting toggleAll

update 2:
- cleaned up and separated project related notes to new document
- reorganized src code content order, added comments

update 3:
- implemented 'clear list' option
- added second disp list for completed items
- updated toggle & toggleAll to swap item between lists based on changes to completion status
- added names to disp lists

TODOs:

- implement feature to reorder todo entries

- implement basic evaluation framework

- mindmap metrics for eval first

- how to request feedback from user regarding eval purposes? iron this out

- a button to commit day's progress

- a button to view day's report

- a new category of higher level goal pre-planning, displayed on top? also persistent within certain time range undecided (daily?)

- implement local state persistence

- QoL updates:
  - make static length of text display & hidden input field so no component jumping left right
  - make display better looking with CSS(?) and better formatting

- publish web based application on Github

- possible login component to support stateful user interaction (keeping state between user sessions) and possibly for easier time syncing state between platforms in future cross-platform update

- Develop cross platform support, starting research with Electron option

- Further expand usability by modulizing program & integrating into larger systems possibly
------------------------------------------------------------------
v0.4

update 1:
- updated rmv function to remove from completed list if relevant

update 2:
- reorganized TODOs based on priorities related to learning CSS & a bit on future core program priorities
- learned basics of CSS, selector, class property, borders, flexbox, colors, etc, etc
- figured out a basic layout scheme and implemented skeleton version
- updated removeAll() to be compatible with dual list disp, found possible O(1) improvement,
    but still have to further consider the tradeoffs, and potential accommodations needed

update 3:
- fill this out later, currently testing cookie related
- implemented local state persistency with cookies
  - upgraded core to sync user records to data storage
  - implemented basic dependency management
    - access to key data structures are modified to always sync changes on update
- cookie expiration is currently set to 1yr, tho this is not a long term solution

update 4:
- explored CSS for basic interface design roughdraft
  - decided on static page setup, no scrolling outside entries containers
- CSS details
  - adjusted default browser css for ul element to remove margins
  - used inheritance from html, body elements for percent height definition
    - might run into issues with flex later, min-width helpful apparently?
- implemented basic footer, with credits and stub button for dev notes

update 5:
- finished rough draft for interface design
- still CSS issues with text node obj of the entries...
- flexbox, it's powerful, but also kind of behave weirdly at times
- a lot of clean up of code, and reflection, CSS is wild
- this update concludes v0.4

TODOs:

- suffix notes for todos feature request

- resolve system coherence issues with goal panel content not being persistent

- feather out goals panels stuff
  - like remove, edit, etc, etc

- animations & transitions to make prog more lively!
  - shadows, on hover, click effect, etc, etc

- imp basic entry point into persistent goals section

- modify data parsing to use better delin than '-' or other ideas other than delin

- sanitize user input

- mobile platform imp in future, cross platform communication for mobile notifications

- remove completed items feature

- RWD-ify the program

- def version -> collection of front end and/or back end updates

- try to iron out basic interface design in next version update

- investigate grid view

- get basic static layout

- separate CSS out into separate page

- remove logo from main UI -> use in login page later

- talked about b4, but separate out add input field out of global actions section
  - remove add button, change input commit -> enter detection instead

- a little dev note for footer can't hurt

- strange feature request from a client
  - exporting todo-list
  - proxy completion of todo-list items
  - some kind of communication channel between users?
    - between the dev and users for starters maybe
  
- a lot of this network related stuff requires database support
  - with database, can keep info exchange internal in system
    - otherwise, how in the world to find an end host definitively?

- by nature, info exchange also requires authentication
  - so login component too, all part of the same package for public facing systems


- go thru update [2] project notes for leftover things to address

- remove the <div> on persisted todo

- implement local state persistency asap

- implement layered todo list structure (daily goals -> session based pull & complete strategy)

CSS priorities
  - appearance looks good
    - logo masking
    - img and/or rounded borders
    - layered backgrounds
    - issue with avoiding copyrighted material
    
    - animated buttons
      - shape & location
      - on hover transition
        - gradient
    
    - text fonts/formatting/appearance

  - reasonable support for decent user experience
    - responsive design
      - input field scaling with user input length
      - differentiating and accounting for differences in user devices
        - resizing display elements, order, format adaptations etc
    
    - layout
      - on hover
        - z-idx
        - shadows

      - nav bar
      - multi-col design
      - grid design
      - generic layout templates
      - align related considerations

  - supportive of self features
    - selectors
    - internal -> eventually external CSS file migration

Core program feature priorities
  - stateful transition
    - session memory
      - local state persistence

    - basic evaluation framework
      - mindmapping metric priorities
        - developing metrics

      - presentation to user
        - user interaction related to eval purposes
          - button to commit day's progress?
          - button to view day's reports, maybe
          - new display section on higher level goals?
            - issue of persistence duration, daily, weekly?

  - possible login component to support stateful user interaction (keeping state between user  sessions) and possibly for easier time syncing state between platforms in future cross-platform update

  - features
    - reorder todo entries
    - lightbulb to switch to night mode

big picture goals for project:

- publish web based application on Github

- Develop cross platform support, starting research with Electron option

- Further expand usability by modulizing program & integrating into larger systems possibly

------------------------------------------------------------------
v0.5

update 1:
- updated version number
- created dev-notes overlay for that bottom btn click response
- implemented transition between goals and main pages
  - super weird, gotta flush out later
- added basic functions to interact with goals panel
- resolved issues around text overflow
  - prelim sol at least, li inner structure needs overhaul
- prelim addition of goal entries to local persistent storage
- remove option added for goal entries

update 2:
- resolved record keeping format issues
- goal entries loaded from history now init with hidden options
- updated overflow settings on goals list
- changed proj name from 'todo list type NG' to 'path notes'
  - reflects new visions
