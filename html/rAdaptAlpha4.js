/********************* 
 * Radaptalpha4 Test *
 *********************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'rAdaptAlpha4';  // from the Builder filename that created this script
let expInfo = {'participant': 'a', 'session': '1', 'taskVer': '1'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(setupRoutineBegin());
flowScheduler.add(setupRoutineEachFrame());
flowScheduler.add(setupRoutineEnd());
const taskLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(taskLoopLoopBegin, taskLoopLoopScheduler);
flowScheduler.add(taskLoopLoopScheduler);
flowScheduler.add(taskLoopLoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var setupClock;
var setupText;
var setupResp;
var thisExp;
var win;
var event;
var shuffle;
var pi;
var sin;
var cos;
var sqrt;
var orderChoice;
var rotationChoice;
var targetChoice;
var order;
var rotation;
var targetAngles;
var screen_width;
var screen_height;
var trimmed_width;
var trimmed_height;
var ang;
var rtd;
var instructionClock;
var instrText;
var instrResp;
var trialClock;
var trialMouse;
var trialTarget;
var trialHome;
var trialCursor;
var trialText;
var testSkip;
var trialBuff;
var endClock;
var thanks;
var endResp;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "setup"
  setupClock = new util.Clock();
  setupText = new visual.TextStim({
    win: psychoJS.window,
    name: 'setupText',
    text: 'Move mouse.Space continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  setupResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Code to fix reference errors in JS
  thisExp = psychoJS.experiment;
  win = psychoJS.window;
  event = psychoJS.eventManager;
  Array.prototype.append = [].push;
  shuffle = util.shuffle;
  document.documentElement.style.cursor = 'none';
  // Math related fixes
  pi = Math.PI;
  sin = Math.sin;
  cos = Math.cos;
  sqrt = Math.sqrt;
  try {
      taskVer = Number.parseInt(expInfo["taskVer"]);
  } catch(e) {
      if ((e instanceof ValueError)) {
          taskVer = 0;
      } else {
          throw e;
      }
  }
  orderChoice = (taskVer % 6);
  rotationChoice = (np.floor((taskVer / 12)) % 2);
  targetChoice = (np.floor((taskVer / 6)) % 2);
  order = [0, 1, 2];
  if ((orderChoice === 0)) {
      order = [0, 1, 2];
  } else {
      if ((orderChoice === 1)) {
          order = [0, 1, 3];
      } else {
          if ((orderChoice === 2)) {
              order = [0, 2, 1];
          } else {
              if ((orderChoice === 3)) {
                  order = [0, 2, 3];
              } else {
                  if ((orderChoice === 4)) {
                      order = [0, 3, 1];
                  } else {
                      if ((orderChoice === 5)) {
                          order = [0, 3, 2];
                      }
                  }
              }
          }
      }
  }
  rotation = [1, (- 1)];
  if ((rotationChoice === 0)) {
      rotation = [1, (- 1)];
  } else {
      if ((rotationChoice === 1)) {
          rotation = [(- 1), 1];
      }
  }
  targetAngles = [[40, 50], [130, 140]];
  if ((targetChoice === 0)) {
      targetAngles = [[40, 50], [130, 140]];
  } else {
      if ((targetChoice === 1)) {
          targetAngles = [[130, 140], [40, 50]];
      }
  }
  screen_width = (win.size[0] / win.size[1]);
  screen_height = (win.size[1] / win.size[1]);
  trimmed_width = ((2 / 3) * screen_width);
  trimmed_height = ((2 / 3) * screen_height);
  if (((trimmed_height * 2) < trimmed_width)) {
      trimmed_width = (trimmed_height * 2);
  } else {
      trimmed_height = (trimmed_width / 2);
  }
  ang = null;
  rtd = null;
  function setAbruptMainTask() {
      console.log("Abrupt Main Task");
      ang = (rotation[0] * 30);
      rtd = (ang * (pi / 180));
  }
  function setRampedMainTask() {
      console.log("Ramped Main Task");
      if ((trials2.thisN <= 47)) {
          ang = ((rotation[0] * (trials2.thisN + 1)) * 0.625);
      } else {
          ang = (rotation[0] * 30);
      }
      rtd = (ang * (pi / 180));
  }
  function setStepMainTask() {
      console.log("Step Main Task");
      if ((trials2.thisN <= 23)) {
          ang = (rotation[0] * 7.5);
      } else {
          if (((trials2.thisN > 23) && (trials2.thisN <= 47))) {
              ang = (rotation[0] * 15);
          } else {
              if (((trials2.thisN > 47) && (trials2.thisN <= 71))) {
                  ang = (rotation[0] * 22.5);
              } else {
                  ang = (rotation[0] * 30);
              }
          }
      }
      rtd = (ang * (pi / 180));
  }
  function setAbruptInverseTask() {
      console.log("Abrupt Inverse Task");
      ang = (rotation[1] * 30);
      rtd = (ang * (pi / 180));
  }
  function setRampedInverseTask() {
      console.log("Ramped Inverse Task");
      if ((trials2.thisN <= 47)) {
          ang = ((rotation[1] * (trials2.thisN + 1)) * 0.625);
      } else {
          ang = (rotation[1] * 30);
      }
      rtd = (ang * (pi / 180));
  }
  function setStepInverseTask() {
      console.log("Step Inverse Task");
      if ((trials2.thisN <= 23)) {
          ang = (rotation[1] * 7.5);
      } else {
          if (((trials2.thisN > 23) && (trials2.thisN <= 47))) {
              ang = (rotation[1] * 15);
          } else {
              if (((trials2.thisN > 47) && (trials2.thisN <= 71))) {
                  ang = (rotation[1] * 22.5);
              } else {
                  ang = (rotation[1] * 30);
              }
          }
      }
      rtd = (ang * (pi / 180));
  }
  
  // Initialize components for Routine "instruction"
  instructionClock = new util.Clock();
  instrText = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrText',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instrResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  trialMouse = new core.Mouse({
    win: psychoJS.window,
  });
  trialMouse.mouseClock = new util.Clock();
  trialTarget = new visual.Polygon ({
    win: psychoJS.window, name: 'trialTarget', 
    edges: 180, size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  trialHome = new visual.Polygon ({
    win: psychoJS.window, name: 'trialHome', 
    edges: 180, size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1.0, depth: -3, interpolate: true,
  });
  
  trialCursor = new visual.Polygon ({
    win: psychoJS.window, name: 'trialCursor', 
    edges: 180, size:[0.025, 0.025],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color(None),
    opacity: 1.0, depth: -4, interpolate: true,
  });
  
  trialText = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialText',
    text: 'Any text\n\nincluding line breaks',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), 0.4], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  testSkip = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  trialBuff = new visual.Polygon ({
    win: psychoJS.window, name: 'trialBuff', 
    edges: 180, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color(None),
    opacity: 1.0, depth: -8, interpolate: true,
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  thanks = new visual.TextStim({
    win: psychoJS.window,
    name: 'thanks',
    text: 'Space end.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  endResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _setupResp_allKeys;
var setupComponents;
function setupRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'setup'-------
    t = 0;
    setupClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    setupResp.keys = undefined;
    setupResp.rt = undefined;
    _setupResp_allKeys = [];
    // keep track of which components have finished
    setupComponents = [];
    setupComponents.push(setupText);
    setupComponents.push(setupResp);
    
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function setupRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'setup'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = setupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *setupText* updates
    if (t >= 0.0 && setupText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      setupText.tStart = t;  // (not accounting for frame time here)
      setupText.frameNStart = frameN;  // exact frame index
      
      setupText.setAutoDraw(true);
    }

    
    // *setupResp* updates
    if (t >= 0.0 && setupResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      setupResp.tStart = t;  // (not accounting for frame time here)
      setupResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { setupResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { setupResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { setupResp.clearEvents(); });
    }

    if (setupResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = setupResp.getKeys({keyList: ['space'], waitRelease: false});
      _setupResp_allKeys = _setupResp_allKeys.concat(theseKeys);
      if (_setupResp_allKeys.length > 0) {
        setupResp.keys = _setupResp_allKeys[_setupResp_allKeys.length - 1].name;  // just the last key pressed
        setupResp.rt = _setupResp_allKeys[_setupResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function setupRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'setup'-------
    for (const thisComponent of setupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var taskLoop;
var currentLoop;
function taskLoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  taskLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'taskConds.xlsx', order),
    seed: undefined, name: 'taskLoop'
  });
  psychoJS.experiment.addLoop(taskLoop); // add the loop to the experiment
  currentLoop = taskLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTaskLoop of taskLoop) {
    const snapshot = taskLoop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(instructionRoutineBegin(snapshot));
    thisScheduler.add(instructionRoutineEachFrame(snapshot));
    thisScheduler.add(instructionRoutineEnd(snapshot));
    const trialsLoopLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(trialsLoopLoopBegin, trialsLoopLoopScheduler);
    thisScheduler.add(trialsLoopLoopScheduler);
    thisScheduler.add(trialsLoopLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var trialsLoop;
function trialsLoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trialsLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: condsFile,
    seed: undefined, name: 'trialsLoop'
  });
  psychoJS.experiment.addLoop(trialsLoop); // add the loop to the experiment
  currentLoop = trialsLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrialsLoop of trialsLoop) {
    const snapshot = trialsLoop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trialRoutineBegin(snapshot));
    thisScheduler.add(trialRoutineEachFrame(snapshot));
    thisScheduler.add(trialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopLoopEnd() {
  psychoJS.experiment.removeLoop(trialsLoop);

  return Scheduler.Event.NEXT;
}


function taskLoopLoopEnd() {
  psychoJS.experiment.removeLoop(taskLoop);

  return Scheduler.Event.NEXT;
}


var _instrResp_allKeys;
var instructionComponents;
function instructionRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instruction'-------
    t = 0;
    instructionClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instrText.setText(taskVer);
    instrResp.keys = undefined;
    instrResp.rt = undefined;
    _instrResp_allKeys = [];
    // keep track of which components have finished
    instructionComponents = [];
    instructionComponents.push(instrText);
    instructionComponents.push(instrResp);
    
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function instructionRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instruction'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instrText* updates
    if (t >= 0.0 && instrText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrText.tStart = t;  // (not accounting for frame time here)
      instrText.frameNStart = frameN;  // exact frame index
      
      instrText.setAutoDraw(true);
    }

    
    // *instrResp* updates
    if (t >= 0.0 && instrResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrResp.tStart = t;  // (not accounting for frame time here)
      instrResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instrResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instrResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instrResp.clearEvents(); });
    }

    if (instrResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instrResp.getKeys({keyList: ['space'], waitRelease: false});
      _instrResp_allKeys = _instrResp_allKeys.concat(theseKeys);
      if (_instrResp_allKeys.length > 0) {
        instrResp.keys = _instrResp_allKeys[_instrResp_allKeys.length - 1].name;  // just the last key pressed
        instrResp.rt = _instrResp_allKeys[_instrResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instruction'-------
    for (const thisComponent of instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var gotValidClick;
var targetangle;
var targetangle_rad;
var targetPos;
var homePos;
var targetOpacity;
var homeOpacity;
var bufferOpacity;
var bufferRadius;
var cursorOpacity;
var cursorPosX;
var cursorPosY;
var homeStart;
var reachOut;
var trialStep;
var steps;
var _testSkip_allKeys;
var trialComponents;
function trialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // setup some python lists for storing info about the trialMouse
    // current position of the mouse:
    trialMouse.x = [];
    trialMouse.y = [];
    trialMouse.leftButton = [];
    trialMouse.midButton = [];
    trialMouse.rightButton = [];
    trialMouse.time = [];
    gotValidClick = false; // until a click is received
    trialMouse.mouseClock.reset();
    win.mouseVisible = false;
    targetangle = targetAngles[loopCount][(trialsLoop.thisN % 2)];
    targetangle_rad = (pi * (targetangle / 180));
    targetPos = [(cos(targetangle_rad) * 0.4), ((sin(targetangle_rad) * 0.4) - (0.35 * trimmed_height))];
    homePos = [0, (0 - (0.35 * trimmed_height))];
    targetOpacity = 0;
    homeOpacity = 0;
    bufferOpacity = 0;
    bufferRadius = 0;
    cursorOpacity = 1;
    cursorPosX = trialMouse.getPos()[0];
    cursorPosY = trialMouse.getPos()[1];
    homeStart = false;
    reachOut = false;
    trialStep = 1;
    steps = [];
    trialText.text = (trialsLoop.thisN + 1).toString();
    if ((phase === "Align")) {
        console.log("Align task");
        trialCursor.pos = [1.5, 1.5];
        trialMouse.pos = [1.5, 1.5];
    } else {
        if ((phase === "Error Clamped")) {
            console.log("Error Clamped Task");
            cursorOpacity = 0;
            trialCursor.pos = [1.5, 1.5];
            trialMouse.pos = [1.5, 1.5];
            theta = ((targetangle / 180) * pi);
        } else {
            if (((phase === "Rotated") || (phase === "Inverted"))) {
                trialCursor.pos = [1.5, 1.5];
                trialMouse.pos = [1.5, 1.5];
                if ((taskVersion === Abrupt)) {
                    setAbruptMainTask();
                } else {
                    if ((taskVersion === Ramped)) {
                        setRampedMainTask();
                    } else {
                        if ((taskVersion === Stepped)) {
                            setStepMainTask();
                        } else {
                            setAbruptMainTask();
                        }
                    }
                }
                if ((taskVersion === Abrupt)) {
                    setAbruptInverseTask();
                } else {
                    if ((taskVersion === Ramped)) {
                        setRampedInverseTask();
                    } else {
                        if ((taskVersion === Stepped)) {
                            setStepInverseTask();
                        } else {
                            setAbruptInverseTask();
                        }
                    }
                }
                trialText.text = ang.toString();
            } else {
                console.log("Align task");
                trialCursor.pos = [1.5, 1.5];
                trialMouse.pos = [1.5, 1.5];
            }
        }
    }
    
    testSkip.keys = undefined;
    testSkip.rt = undefined;
    _testSkip_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(trialMouse);
    trialComponents.push(trialTarget);
    trialComponents.push(trialHome);
    trialComponents.push(trialCursor);
    trialComponents.push(trialText);
    trialComponents.push(testSkip);
    trialComponents.push(trialBuff);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var prevButtonState;
var CursorTargetDistance;
var CursorHomeDistance;
function trialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *trialMouse* updates
    if (t >= 0.0 && trialMouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialMouse.tStart = t;  // (not accounting for frame time here)
      trialMouse.frameNStart = frameN;  // exact frame index
      
      trialMouse.status = PsychoJS.Status.STARTED;
      prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
      }
    if (trialMouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      let buttons = trialMouse.getPressed();
      const xys = trialMouse.getPos();
      trialMouse.x.push(xys[0]);
      trialMouse.y.push(xys[1]);
      trialMouse.leftButton.push(buttons[0]);
      trialMouse.midButton.push(buttons[1]);
      trialMouse.rightButton.push(buttons[2]);
      trialMouse.time.push(trialMouse.mouseClock.getTime());
    }
    CursorTargetDistance = Math.sqrt((Math.pow((trialCursor.pos[0] - trialTarget.pos[0]), 2) + Math.pow((trialCursor.pos[1] - trialTarget.pos[1]), 2)));
    CursorHomeDistance = Math.sqrt((Math.pow(trialCursor.pos[0], 2) + Math.pow((trialCursor.pos[1] + (0.35 * trimmed_height)), 2)));
    steps.append(trialStep);
    if ((phase === "Align")) {
        cursorPosX = trialMouse.getPos()[0];
        cursorPosY = trialMouse.getPos()[1];
        if ((! homeStart)) {
            homeOpacity = 1;
            targetOpacity = 0;
            cursorOpacity = 1;
            bufferOpacity = 0;
            trialStep = 1;
            if ((CursorHomeDistance < 0.05)) {
                homeStart = true;
                console.log(((("end step 1" + " (") + globalClock.getTime().toString()) + ")"));
            }
        }
        if (((! reachOut) && homeStart)) {
            homeOpacity = 0;
            targetOpacity = 1;
            cursorOpacity = 1;
            bufferOpacity = 0;
            trialStep = 2;
            if ((CursorTargetDistance < 0.05)) {
                reachOut = true;
                console.log(((("end step 2" + " (") + globalClock.getTime().toString()) + ")"));
            }
        }
        if (reachOut) {
            homeOpacity = 1;
            targetOpacity = 0;
            cursorOpacity = 1;
            bufferOpacity = 0;
            trialStep = 3;
            if ((CursorHomeDistance < 0.05)) {
                console.log(((("end step 3" + " (") + globalClock.getTime().toString()) + ")"));
                continueRoutine = false;
            }
        }
    } else {
        if ((phase === "Error Clamped")) {
            cursorPosX = (sqrt((Math.pow(trialMouse.getPos()[0], 2) + Math.pow(trialMouse.getPos()[1], 2))) * cos(theta));
            cursorPosY = (sqrt((Math.pow(trialMouse.getPos()[0], 2) + Math.pow(trialMouse.getPos()[1], 2))) * sin(theta));
            if ((! homeStart)) {
                homeOpacity = 1;
                targetOpacity = 0;
                trialStep = 1;
                bufferOpacity = 1;
                bufferRadius = (2 * sqrt((Math.pow(trialCursor.pos[0], 2) + Math.pow(trialCursor.pos[1], 2))));
                cursorOpacity = 0;
                if ((CursorHomeDistance < 0.2)) {
                    cursorOpacity = 1;
                }
                if ((CursorHomeDistance < 0.075)) {
                    homeStart = true;
                    console.log(((("end step 1" + " (") + globalClock.getTime().toString()) + ")"));
                }
            }
            if (((! reachOut) && homeStart)) {
                homeOpacity = 0;
                targetOpacity = 1;
                trialStep = 2;
                bufferOpacity = 0;
                cursorOpacity = 1;
                if ((CursorTargetDistance < 0.025)) {
                    reachOut = true;
                    console.log(((("end step 2" + " (") + globalClock.getTime().toString()) + ")"));
                }
            }
            if (reachOut) {
                homeOpacity = 1;
                targetOpacity = 0;
                trialStep = 3;
                bufferOpacity = 1;
                bufferRadius = (2 * sqrt((Math.pow(trialCursor.pos[0], 2) + Math.pow(trialCursor.pos[1], 2))));
                cursorOpacity = 0;
                if ((CursorHomeDistance < 0.2)) {
                    cursorOpacity = 1;
                }
                if ((CursorHomeDistance < 0.075)) {
                    console.log(((("end step 3" + " (") + globalClock.getTime().toString()) + ")"));
                    continueRoutine = false;
                }
            }
        } else {
            if (((phase === "Rotated") || (phase === "Inverted"))) {
                cursorPosX = ((trialMouse.getPos()[0] * cos(rtd)) - (trialMouse.getPos()[1] * sin(rtd)));
                cursorPosY = ((trialMouse.getPos()[0] * sin(rtd)) + (trialMouse.getPos()[1] * cos(rtd)));
                if ((! homeStart)) {
                    homeOpacity = 1;
                    targetOpacity = 0;
                    cursorOpacity = 1;
                    bufferOpacity = 0;
                    trialStep = 1;
                    if ((CursorHomeDistance < 0.05)) {
                        homeStart = true;
                        console.log(((("end step 1" + " (") + globalClock.getTime().toString()) + ")"));
                    }
                }
                if (((! reachOut) && homeStart)) {
                    homeOpacity = 0;
                    targetOpacity = 1;
                    cursorOpacity = 1;
                    bufferOpacity = 0;
                    trialStep = 2;
                    if ((CursorTargetDistance < 0.05)) {
                        reachOut = true;
                        console.log(((("end step 2" + " (") + globalClock.getTime().toString()) + ")"));
                    }
                }
                if (reachOut) {
                    homeOpacity = 1;
                    targetOpacity = 0;
                    cursorOpacity = 1;
                    bufferOpacity = 0;
                    trialStep = 3;
                    if ((CursorHomeDistance < 0.05)) {
                        console.log(((("end step 3" + " (") + globalClock.getTime().toString()) + ")"));
                        continueRoutine = false;
                    }
                }
            } else {
                cursorPosX = trialMouse.getPos()[0];
                cursorPosY = trialMouse.getPos()[1];
                if ((! homeStart)) {
                    homeOpacity = 1;
                    targetOpacity = 0;
                    cursorOpacity = 1;
                    bufferOpacity = 0;
                    trialStep = 1;
                    if ((CursorHomeDistance < 0.05)) {
                        homeStart = true;
                        console.log(((("end step 1" + " (") + globalClock.getTime().toString()) + ")"));
                    }
                }
                if (((! reachOut) && homeStart)) {
                    homeOpacity = 0;
                    targetOpacity = 1;
                    cursorOpacity = 1;
                    bufferOpacity = 0;
                    trialStep = 2;
                    if ((CursorTargetDistance < 0.05)) {
                        reachOut = true;
                        console.log(((("end step 2" + " (") + globalClock.getTime().toString()) + ")"));
                    }
                }
                if (reachOut) {
                    homeOpacity = 1;
                    targetOpacity = 0;
                    cursorOpacity = 1;
                    bufferOpacity = 0;
                    trialStep = 3;
                    if ((CursorHomeDistance < 0.05)) {
                        console.log(((("end step 3" + " (") + globalClock.getTime().toString()) + ")"));
                        continueRoutine = false;
                    }
                }
            }
        }
    }
    
    
    // *trialTarget* updates
    if (t >= 0.0 && trialTarget.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialTarget.tStart = t;  // (not accounting for frame time here)
      trialTarget.frameNStart = frameN;  // exact frame index
      
      trialTarget.setAutoDraw(true);
    }

    
    if (trialTarget.status === PsychoJS.Status.STARTED){ // only update if being drawn
      trialTarget.setOpacity(targetOpacity);
      trialTarget.setPos(targetPos);
    }
    
    // *trialHome* updates
    if (t >= 0.0 && trialHome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialHome.tStart = t;  // (not accounting for frame time here)
      trialHome.frameNStart = frameN;  // exact frame index
      
      trialHome.setAutoDraw(true);
    }

    
    if (trialHome.status === PsychoJS.Status.STARTED){ // only update if being drawn
      trialHome.setOpacity(homeOpacity);
      trialHome.setPos(homePos);
    }
    
    // *trialCursor* updates
    if (t >= 0.0 && trialCursor.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialCursor.tStart = t;  // (not accounting for frame time here)
      trialCursor.frameNStart = frameN;  // exact frame index
      
      trialCursor.setAutoDraw(true);
    }

    
    if (trialCursor.status === PsychoJS.Status.STARTED){ // only update if being drawn
      trialCursor.setOpacity(cursorOpacity);
      trialCursor.setPos([cursorPosX, cursorPosY]);
    }
    
    // *trialText* updates
    if (t >= 0.0 && trialText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialText.tStart = t;  // (not accounting for frame time here)
      trialText.frameNStart = frameN;  // exact frame index
      
      trialText.setAutoDraw(true);
    }

    
    // *testSkip* updates
    if (t >= 0.0 && testSkip.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      testSkip.tStart = t;  // (not accounting for frame time here)
      testSkip.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { testSkip.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { testSkip.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { testSkip.clearEvents(); });
    }

    if (testSkip.status === PsychoJS.Status.STARTED) {
      let theseKeys = testSkip.getKeys({keyList: ['space'], waitRelease: false});
      _testSkip_allKeys = _testSkip_allKeys.concat(theseKeys);
      if (_testSkip_allKeys.length > 0) {
        testSkip.keys = _testSkip_allKeys[_testSkip_allKeys.length - 1].name;  // just the last key pressed
        testSkip.rt = _testSkip_allKeys[_testSkip_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *trialBuff* updates
    if (t >= 0.0 && trialBuff.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialBuff.tStart = t;  // (not accounting for frame time here)
      trialBuff.frameNStart = frameN;  // exact frame index
      
      trialBuff.setAutoDraw(true);
    }

    
    if (trialBuff.status === PsychoJS.Status.STARTED){ // only update if being drawn
      trialBuff.setOpacity(bufferOpacity);
      trialBuff.setPos(homePos);
      trialBuff.setSize(bufferRadius);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('trialMouse.x', trialMouse.x);
    psychoJS.experiment.addData('trialMouse.y', trialMouse.y);
    psychoJS.experiment.addData('trialMouse.leftButton', trialMouse.leftButton);
    psychoJS.experiment.addData('trialMouse.midButton', trialMouse.midButton);
    psychoJS.experiment.addData('trialMouse.rightButton', trialMouse.rightButton);
    psychoJS.experiment.addData('trialMouse.time', trialMouse.time);
    
    thisExp.addData("step", steps);
    thisExp.addData("targetangle_deg", targetangle);
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _endResp_allKeys;
var endComponents;
function endRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'end'-------
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    endResp.keys = undefined;
    endResp.rt = undefined;
    _endResp_allKeys = [];
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(thanks);
    endComponents.push(endResp);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function endRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'end'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thanks* updates
    if (t >= 0.0 && thanks.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thanks.tStart = t;  // (not accounting for frame time here)
      thanks.frameNStart = frameN;  // exact frame index
      
      thanks.setAutoDraw(true);
    }

    
    // *endResp* updates
    if (t >= 0.0 && endResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endResp.tStart = t;  // (not accounting for frame time here)
      endResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { endResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { endResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { endResp.clearEvents(); });
    }

    if (endResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = endResp.getKeys({keyList: ['space'], waitRelease: false});
      _endResp_allKeys = _endResp_allKeys.concat(theseKeys);
      if (_endResp_allKeys.length > 0) {
        endResp.keys = _endResp_allKeys[_endResp_allKeys.length - 1].name;  // just the last key pressed
        endResp.rt = _endResp_allKeys[_endResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'end'-------
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  document.documentElement.style.cursor = 'auto';
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
