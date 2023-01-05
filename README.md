DCCCVIII

(That's 808 in Roman Numerals)

A JavaScript Sequencer web app that uses a Rails backend for loading and saving songs and sounds.

You can find a working version at the following link

http://dcccviii.herokuapp.com/

The pieces of the app are as follows, on the left is the beat pad. Samples can be loaded and unloaded here using the drop down menu on the bottom of the section. On the right is the sequencer which has a number of sections. Starting on the top row from the left is the BPM selection. You can change the speed at which the song plays back here. Following is the Play and Stop button, whose functions I think are evident enough. Following are two text entry fields and a submit button. This is where you can input your name, the name of the song you've created and click submit to save it to the backend.

To load the song use the dropdown menu in the next section. If you've made changes and want to save them simply click update.

Below this section is the sequencer section. It contains a number of buttons that, when pressed, add sounds to the song in 8th note divisions.

To select a sample to add to the sequencer simply click on a sound from the beat pad. To add it to the sequencer click on a space on the sequencer, to undo that action simply click on the pad again. Below each sequencer line is a slider that will change the volume of the track playing.

The JavaScript scripts are stored in the public folder of the app, while the sounds are stored in the assets folder contained therein.

An explanation on the function of the sequencer.

By clicking play an interval is activated that advances the sequencer's position. Everytime the sequencer is advanced it triggers an event called oneBeat, this event plays each sound according to the position of the sequencer.

Originally the sounds were stored in one location on the DOM, upon activation of the event the app would search the sounds section of the DOM and play the sound. This led to some latency as the search was long enough that each sound would play a little behind the event. To fix this the sounds were appended to each sequencer button node upon clicking. This increased memory usage but heavily decreased latency as the search was no longer needed.
