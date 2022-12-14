// prev vers were developed on 1.5 zoom, i forgot, more long term solution later
// lets set to 1.0 for better default...
document.body.style.zoom = 1.0;

var projVers = 0.5;
var setToExpire = "0";
var oneYear = "31536000";
var cid = 0;
var cCnt = 0;
var cLim = 15;

function createEntryBook(baseCol) {

  var enBk = {

    collectionInternal: baseCol,

    addEntry: function (lstEntry) {

      baseCol.add(lstEntry);
      persistentCoreV1.syncAdd(lstEntry);
    },

    rmvEntry: function (lstEntry) {

      baseCol.delete(lstEntry);
      persistentCoreV1.syncRemove(lstEntry);
    },

    clearAllEntries: function () {

      persistentCoreV1.resetRemote();
      baseCol.clear();
    },

    accessCol: function () {

      return baseCol;
    }
  };

  return enBk;
}

function createCore(todosContainer) {

  var enBk = createEntryBook(todosContainer);

  var res = {

    entryBook: enBk,
    
    syncUpdate: function(lstEntry) {

                  var entryId = lstEntry.getItemType() + lstEntry.id;
                  var newVal = lstEntry.getRecord();

                  document.cookie = entryId + "=" + newVal + ";" + " max-age=" + oneYear;
                },

    syncAdd: function(lstEntry) {

                var entryId = lstEntry.getItemType() + cid;
                lstEntry.id = cid;
                cid++;
                document.cookie = 'z' + "cid=" + cid + ";" + " max-age=" + oneYear;
                cCnt++;
                var entryVal = lstEntry.getRecord();

                document.cookie = entryId + "=" + entryVal + ";" + " max-age=" + oneYear;
              },

    syncRemove: function(lstEntry) {

                  var entryId = lstEntry.getItemType() + lstEntry.id;
                  document.cookie = entryId + "=" + ";" + " max-age=" + setToExpire;
                  cCnt--;
                },

    resetRemote: function() {

                    enBk.accessCol().forEach(entry => {

                      persistentCoreV1.syncRemove(entry);
                    });

                    document.cookie = "z" + "cid=0; max-age=" + oneYear;
                  },

    loadRecords: function() {

                    var cks = decodeURIComponent(document.cookie).split(';');
                    
                    initFromCookies(cks);
                  }
  };

  return res;
}

function initFromCookies(cookies) {

  for (var i = 0; i < cookies.length; i++) {

    if (cookies[i] === '') {

      continue;
    }

    var recType = '';

    if (cookies[i].indexOf('zcid') !== -1) {

      cid = Number(cookies[i].substring(cookies[i].indexOf('=') + 1));
      continue;
    } else if (cookies[i].indexOf('goal') !== -1) {

      recType = 'goal';
    } else {

      recType = 'task';
    }

    var id = cookies[i].substring(cookies[i].indexOf(recType) + recType.length, cookies[i].indexOf('='));
    var entryInfo = cookies[i].substring(cookies[i].indexOf('=') + 1);

    var lstEntry = undefined;

    if (recType === 'goal') {

      lstEntry = createTodoEntry(entryInfo, false, recType);
      lstEntry.disp.children[1].style.display = 'none';
    } else {

      var entryPair = entryInfo.split('-');
      lstEntry = createTodoEntry(entryPair[0], entryPair[1] === 'true', recType);
    }

    lstEntry.id = id;
    persistentCoreV1.entryBook.collectionInternal.add(lstEntry);

    addToDispList(lstEntry);

    // recycle unused id, it needs to be implemented if we 
    // keep going that far with this cookie system
  }
}

// chose set for obj reference access scheme, 
// no order constraint, set contains all todo entry objs
const persistentCoreV1 = createCore(new Set());

function updateVersion(versNum) {

  var pInfEl = document.getElementById('project-info');
  var pName = "Path Notes";
  var devContact = "kpl2022a@gmail.com";

  pInfEl.appendChild(document.createTextNode(pName + " v" + versNum));
  pInfEl.appendChild(document.createElement('br'));
  pInfEl.appendChild(document.createTextNode("KPL 2022"));
  pInfEl.appendChild(document.createElement('br'));
  pInfEl.appendChild(document.createTextNode(devContact));
}

// tmp helper to set proj version on web disp
updateVersion(projVers);

persistentCoreV1.loadRecords();

/**
 * basic display setup work, hooking up buttons, also functions that
 * operate on multiple todo entries go here
*/

function showDevNotes() {

  dNotesDisp.style.display = 'flex';
}

function hideDevNotes() {

  dNotesDisp.style.display = 'none';
}

function dispGoalEntryOpts() {

  persistentCoreV1.entryBook.accessCol().forEach(ent => {

    if (ent.getItemType() === 'goal') {

      ent.disp.children[1].style.display = "block";
    }
  });
}

function hideGoalEntryOpts() {

  persistentCoreV1.entryBook.accessCol().forEach(ent => {

    if (ent.getItemType() === 'goal') {

      ent.disp.children[1].style.display = "none";
    }
  });
}

function openGoals() {

  gSub.style.visibility = "visible";
  gSub.style.margin = "10px";
  gSub.style.borderWidth = "2px";
  gSub.style.opacity = 1;

  coreLists.style.flex = "0%";
  coreLists.style.opacity = 0;

  document.querySelectorAll(".panels").forEach(c => {c.style.margin = '0'; c.style.borderWidth = '0'; c.style.overflow = "hidden";})
  
  pGoalsPanel.style.flex = "78%";
  dispGoalEntryOpts();

  gSub.style.flex = "20%";

  gInput.style.opacity = 1;
  gInput.style.flex = "59%";

  botmOpts.style.opacity = 0;
  botmOpts.style.flex = "0%";
}

// function finRmv() {

//   if (coreLists.style.opacity === '0') {

//     // coreLists.style.display = 'none';
//   }
// }

function retToMain() {

  gSub.style.margin = "0";
  gSub.style.borderWidth = "0";
  gSub.style.opacity = 0;

  coreLists.style.opacity = 1;

  document.querySelectorAll(".panels").forEach(c => {c.style.margin = '10px'; c.style.borderWidth = '2px'; c.style.overflow = "hidden";})

  pGoalsPanel.style.flex = "29%";
  hideGoalEntryOpts();

  coreLists.style.flex = "69%";
  gSub.style.flex = "0%";

  gInput.style.opacity = 0;
  gInput.style.flex = "0%";

  botmOpts.style.opacity = 1;
  botmOpts.style.flex = "59%";
}

function addGoal() {

  var goalEntry = createTodoEntry(addGoalInput.value, false, 'goal');

  goalEntry.disp.style.overflowWrap = "break-word";

  addGoalInput.value = "";

  persistentCoreV1.entryBook.addEntry(goalEntry);

  addToDispList(goalEntry);
}

// button based removeAll
var rmvAllBtn = document.getElementById('removeall-button');
rmvAllBtn.addEventListener('click', removeAll);

// button based toggleAll
var togAllBtn = document.getElementById('toggleall-button');
togAllBtn.addEventListener('click', toggleAll);

// button based add
var addBtn = document.getElementById('add-button');
var addInput = document.getElementById('add-input');
addBtn.addEventListener('click', add);

// dev-notes btn
var devNotesBtn = document.getElementById('dev-notes');
devNotesBtn.addEventListener('click', showDevNotes);

// dev-notes disp on-click self-hide
var dNotesDisp = document.getElementById('d-n-o');
dNotesDisp.addEventListener('click', hideDevNotes);

// grow out p-goals panel on click
var pGoalsPanel = document.getElementById('persistent-goals');
pGoalsPanel.addEventListener('click', openGoals);

// core list disp component
var coreLists = document.getElementById('core-lists-module');
// coreLists.addEventListener("transitionend", finRmv);

// goals subpanel component
var gSub = document.getElementById('g-sub');

// goal sub panel buttons
var rToMainBtn = document.getElementById('r2main-btn');
rToMainBtn.addEventListener('click', retToMain);

// goal input
var gInput = document.getElementById('g-input');
var addGoalBtn = document.getElementById('add-goal-btn');
var addGoalInput = document.getElementById('add-goal-input');
addGoalBtn.addEventListener('click', addGoal);

// botm opts component
var botmOpts = document.getElementById('botm-opts');

// goal panel inner list
var gList = document.getElementById('goals-list');

// remove all todo entries from disp and backend container
function removeAll() {

  var todoList = document.getElementById('todo-list');
  var compList = document.getElementById('completed-list');

  persistentCoreV1.entryBook.accessCol().forEach(todoEntry => {
    
    if (todoEntry.getStatus()) {

      compList.removeChild(todoEntry.disp);
    } else {

      todoList.removeChild(todoEntry.disp);
    }
  });

  persistentCoreV1.entryBook.clearAllEntries();
}

/**
 * toggles all todo entries with rules:
 * 
 * 1. none or some entries checked -> make all entries checked
 * 2. if all entries checked -> uncheck all entries
 * 
 * o(n) 2-pass b/c status depends on col based property, need 1-pass first
*/
function toggleAll() {

  var priorStatus = true;

  persistentCoreV1.entryBook.accessCol().forEach(todoEntry => {

    priorStatus = priorStatus && todoEntry.getStatus();
  });

  batchSetCompletionStatus(!priorStatus);
}

// set completion status of entire container with status given
function batchSetCompletionStatus(status) {

  var todoList = document.getElementById('todo-list');
  var compList = document.getElementById('completed-list');

  persistentCoreV1.entryBook.accessCol().forEach(todoEntry => {
    
    if (todoEntry.getStatus() != status) {

      todoEntry.editStatus(status);
      todoEntry.disp.children[0].innerText = getStatusStr(status);

      moveItemBetween(todoEntry.disp, status, todoList, compList);
    }
  });
}

/**
 * setting up handlers that respond to user actions
*/

// 2-layer wrapper to provide event handler with obj ref of todo entry to work on,
// and addr of action to take
function contxtAction(entryRef) {
  
  var lstEntry = entryRef;

  function actionWrapper(action) {

    function applyContxtToAction() {

      action(lstEntry);
    }

    return applyContxtToAction;
  }

  return actionWrapper;
}

// remove the given todo entry both from container and display
function rmv(lstEntry) {

  persistentCoreV1.entryBook.rmvEntry(lstEntry);

  // remove related disp
  if (lstEntry.getItemType() === 'goal') {

    document.getElementById('goals-list').removeChild(lstEntry.disp);
  } else if (lstEntry.getStatus()) {

    document.getElementById('completed-list').removeChild(lstEntry.disp);
  } else {

    document.getElementById('todo-list').removeChild(lstEntry.disp);
  }
}

// setting up display to receive user edit contents
function editRequest(lstEntry) {

  // access edit input field and set current todoText as starting text
  lstEntry.disp.children[2].value = lstEntry.getTxt();
  
  // remove original text from display
  var linTxt = lstEntry.disp.children[1];
  linTxt.textContent = '';

  // switch disp between edit button & edi field + confirm button
  lstEntry.disp.children[4].style.display = 'none';
  lstEntry.disp.children[2].style.visibility = 'visible';
  lstEntry.disp.children[3].style.display = '';
}

// reflecting user changes to container and display
function editConfirm(lstEntry) {

  // get replacement txt from input field
  var dIn = lstEntry.disp.children[2];
  var replacement = dIn.value;

  // update todo text and renew displayed data
  lstEntry.editTxt(replacement);
  lstEntry.disp.children[1].textContent = replacement;
  dIn.style.visibility = "hidden";
  lstEntry.disp.children[3].style.display = 'none';

  lstEntry.disp.children[4].style.display = '';
}

// toggle the given todo entry
function toggle(lstEntry) {

  lstEntry.editStatus(!lstEntry.getStatus());

  // update button icon
  var togBtn = lstEntry.disp.children[0];
  togBtn.innerText = getStatusStr(lstEntry.getStatus());

  // swap between todo and completed list based on status
  var todoList = document.getElementById('todo-list');
  var compList = document.getElementById('completed-list');

  // move entry between lists based on completion status
  moveItemBetween(lstEntry.disp, lstEntry.getStatus(), todoList, compList);
}

function moveItemBetween(disp, completed, todoList, compList) {

  if (completed) {

    todoList.removeChild(disp);
    compList.appendChild(disp);
  } else {

    compList.removeChild(disp);
    todoList.appendChild(disp);
  }
}

/**
 * creating todo entry objs here, and implant needed info for handlers to respond to
 * user actions with closure
*/

// add new todo entry
function add() {
  
  if (cCnt === cLim) {

    alert("too many todos, try removing entries before adding more");
    return;
  }

  // get user text and create todo entry
  var lstEntry = createTodoEntry(addInput.value, false, 'task');
  
  // clean up input field
  addInput.value = "";

  // update container
  persistentCoreV1.entryBook.addEntry(lstEntry);

  // update display
  addToDispList(lstEntry);
}

function addToDispList(lstEntry) {


  if (lstEntry.getItemType() === 'goal') {

    document.getElementById('goals-list').appendChild(lstEntry.disp);
  } else if (lstEntry.getStatus()) {

    document.getElementById('completed-list').appendChild(lstEntry.disp);
  } else {

    document.getElementById('todo-list').appendChild(lstEntry.disp);
  }
}

// create todo entry obj, and set up event handlers to handle user actions
function createTodoEntry(newItemText, initStatus, entryType) {

  var lstEntry = { todoText: newItemText, 
                    completed: initStatus,
                    itemType: entryType,
                    disp: document.createElement("li")};

  var wrapperObj = createCoherentWrapper(lstEntry);

  setupVisuals(wrapperObj);

    return wrapperObj; 
}

function createCoherentWrapper(lstEntry) {

  var res = {disp: lstEntry.disp};

  var editTxt = function(newTxt) {
                  
                  lstEntry.todoText = newTxt;
                  persistentCoreV1.syncUpdate(res);
                };

  var getTxt = function() {return lstEntry.todoText;};

  var editStatus = function(newStatus) {
                      
                      lstEntry.completed = newStatus;
                      persistentCoreV1.syncUpdate(res);
                    };

  var getStatus = function() {return lstEntry.completed;};

  var getItemType = function () {return lstEntry.itemType;};

  var getRecord = function () {

    var rec = lstEntry.todoText;

    if (lstEntry.itemType === 'task') {

      rec = rec + '-' + lstEntry.completed;
    }

    return rec;
  }

  res.editTxt = editTxt;
  res.getTxt = getTxt;
  res.editStatus = editStatus;
  res.getStatus = getStatus;
  res.getItemType = getItemType;
  res.getRecord = getRecord;

  return res;
}

function setupVisuals(lstEntry) {

  var perform = contxtAction(lstEntry);

  if (lstEntry.getItemType() === 'goal') {

    // create text node and input field for edits
    var contnt = document.createElement('p');
    contnt.innerText = lstEntry.getTxt();
    contnt.style.overflowWrap = "break-word";
    contnt.style.margin = "0";

    lstEntry.disp.appendChild(contnt);

    // add remove button to disp
    lstEntry.disp.appendChild(createButton('remove', perform(rmv), false));
    
    return;
  }

  // add toggle button to disp
  lstEntry.disp.appendChild(createButton(getStatusStr(lstEntry.getStatus()), perform(toggle), false));
  
  // create text node and input field for edits
  var contnt = document.createElement('p');
  contnt.innerText = lstEntry.getTxt();
  contnt.style.overflowWrap = "break-word";
  contnt.style.margin = "0";

  lstEntry.disp.appendChild(contnt);
  lstEntry.disp.appendChild(createInputField(true));

  // add edit confirm button to disp
  lstEntry.disp.appendChild(createButton('confirm', perform(editConfirm), true));

  // add edit request button to disp
  lstEntry.disp.appendChild(createButton('edit', perform(editRequest), false));
  
  // add remove button to disp
  lstEntry.disp.appendChild(createButton('remove', perform(rmv), false));
}

function createButton(txt, handlerFx, hide) {

  var btn = document.createElement('button');
  btn.innerText = txt;
  btn.addEventListener('click', handlerFx);

  if (hide) {

    btn.style.display = 'none';
  }

  return btn;
}

function createInputField(hide) {

  // start by generating an edit platform with unique id
  var dIn = document.createElement('input');

  if (hide) {
    dIn.style.visibility = 'hidden';
  }

  return dIn;
}

function getStatusStr(status) {

  if (status) {

    return "[v^]";
  } else {

    return "[ ]";
  }
}