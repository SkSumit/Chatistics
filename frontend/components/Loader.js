import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { postPolls } from "../api/api";

export default function Loader() {
  const loadingText = [
    "Please wait while the minions do their work",
    "Grabbing extra minions",
    "Doing the heavy lifting",
    "We are working very Hard .... Really",
    "Waking up the minions",
    "Generating witty dialog...",
    "Swapping time and space...",
    "Spinning violently around the y-axis...",
    "Would you prefer chicken, steak, or tofu?",
    "...and enjoy the elevator music...",
    "Please wait while the little elves draw your map",
    "Checking the gravitational constant in your locale...",
    "Go ahead -- hold your breath!",
    "...at least you're not on hold...",
    "The server is powered by a lemon and two electrodes.",
    "We're testing your patience",

    "keep calm and npm install",
    "Dig on the 'X' for buried treasure... ARRR!",
    "It's still faster than you could analyse it",
    "The last time I tried this the monkey didn't survive. Let's hope it works better this time.",
    "I should have had a V8 this morning.",
    "My other loading screen is much faster.",

    "Just count to 10",
    "Counting backwards from Infinity",
    "Do not run! We are your friends!",
    "Do you come here often?",
    "We're making you a cookie.",
    ,
    "Computing chance of success",
    ,
    "I feel like im supposed to be loading something. . .",
    "What do you call 8 Hobbits? A Hobbyte.",
    "Should have used a compiled language...",
    "Is this Windows?",
    "Adjusting flux capacitor...",
    "Please wait until the sloth starts moving.",
    "Don't break your screen yet!",
    "I swear it's almost done.",
    "Let's take a mindfulness minute...",

    "Keeping all the 1's and removing all the 0's...",
    "Putting the icing on the cake. The cake is not a lie...",
    "Making sure all the i's have dots...",
    "We are not liable for any broken screens as a result of waiting.",

    "Connecting Neurotoxin Storage Tank...",
    "Granting wishes...",
    "Time flies when you’re having fun.",
    "Get some coffee and come back in ten minutes..",
    "Spinning the hamster…",
    "99 bottles of beer on the wall..",

    "Convincing AI not to turn evil..",
    "There is no spoon. Because we are not done loading it",
    "Your left thumb points to the right and your right thumb points to the left.",
    "How did you get here?",
    "Wait, do you smell something burning?",
    "Computing the secret to life, the universe, and everything.",

    "Adults are just kids with money.",

    "Coffee, Chocolate, Men. The richer the better!",

    "git happens",
    "May the forks be with you",
    "A commit a day keeps the mobs away",
    "This is not a joke, it's a commit.",

    "Locating Jebediah Kerman...",
    "We are not liable for any broken screens as a result of waiting.",
    "Hello IT, have you tried turning it off and on again?",
    "If you type Google into Google you can break the internet",
    "Well, this is embarrassing.",
    "What is the airspeed velocity of an unladen swallow?",
    "Hello, IT... Have you tried forcing an unexpected reboot?",
    "They just toss us away like yesterday's jam.",
    "They're fairly regular, the beatings, yes. I'd say we're on a bi-weekly beating.",
    "The Elders of the Internet would never stand for it.",
    "Space is invisible mind dust, and stars are but wishes.",
    "Didn't know paint dried so quickly.",
    "Everything sounds the same",
    "I'm going to walk the dog",
    "I didn't choose the engineering life. The engineering life chose me.",
    "Dividing by zero...",
    "Spawn more Overlord!",
    "If I’m not back in five minutes, just wait longer.",
    "Some days, you just can’t get rid of a bug!",
    "We’re going to need a bigger boat.",
    "Chuck Norris never git push. The repo pulls before.",
    "Web developers do it with <style>",
    "I need to git pull --my-life-together",
    "Java developers never RIP. They just get Garbage Collected.",
    "Cracking military-grade encryption...",
    "Simulating traveling salesman...",
    "Proving P=NP...",
    "Entangling superstrings...",
    "Twiddling thumbs...",
    "Searching for plot device...",
    "Trying to sort in O(n)...",
    "Laughing at your pictures-i mean, loading...",
    "Sending data to NS-i mean, our servers.",
    "Looking for sense of humour, please hold on.",
    "Please wait while the intern refills his coffee.",
    "A different error message? Finally, some progress!",
    "Hold on while we wrap up our git together...sorry",
    "Please hold on as we reheat our coffee",
    "Kindly hold on as we convert this bug to a feature...",
    "Kindly hold on as our intern quits vim...",
    "Winter is coming...",
    "Installing dependencies",
    "Switching to the latest JS framework...",
    "Distracted by cat gifs",
    "Finding someone to hold my beer",
    "BRB, working on my side project",
    "@todo Insert witty loading message",
    "Let's hope it's worth the wait",
    "Aw, snap! Not..",
    "Ordering 1s and 0s...",
    "Updating dependencies...",
    "Whatever you do, don't look behind you...",
    "Please wait... Consulting the manual...",
    "It is dark. You're likely to be eaten by a grue.",
    "Loading funny message...",
    "It's 10:00pm. Do you know where your children are?",
    "Waiting Daenerys say all her titles...",
    "Feel free to spin in your chair",
    "What the what?",
    "format C: ...",
    "Forget you saw that password I just typed into the IM ...",
    "What's under there?",
    "Your computer has a virus, its name is Windows!",
    "Go ahead, hold your breath and do an ironman plank till loading complete",
    "Bored of slow loading spinner, buy more RAM!",
    "Help, I'm trapped in a loader!",
    "What is the difference btwn a hippo and a zippo? One is really heavy, the other is a little lighter",
    "Please wait, while we purge the Decepticons for you. Yes, You can thanks us later!",
    "Chuck Norris once urinated in a semi truck's gas tank as a joke....that truck is now known as Optimus Prime.",
    "Chuck Norris doesn’t wear a watch. HE decides what time it is.",
    "Mining some bitcoins...",
    "Downloading more RAM..",
    "Updating to Windows Vista...",
    "Deleting System32 folder",
    "Hiding all ;'s in your code",
    "Alt-F4 speeds things up.",
    "Initializing the initializer...",
    "When was the last time you dusted around here?",
    "Optimizing the optimizer...",
    "Last call for the data bus! All aboard!",
    "Running swag sticker detection...",
    "When nothing is going right, go left!",
    "Never let a computer know you're in a hurry.",
    "A computer will do what you tell it to do, but that may be much different from what you had in mind.",
    "Some things man was never meant to know. For everything else, there's Google.",

    "Pushing pixels...",

    "Everything in this universe is either a potato or not a potato",

    "Updating Updater...",
    "Downloading Downloader...",
    "Debugging Debugger...",
    "Reading Terms and Conditions for you.",
    "Digested cookies being baked again.",

    "Patience! This is difficult, you know...",
    "Discovering new ways of making you wait...",
    "Your time is very important to us. Please wait while we ignore you...",

    "Sorry we are busy catching em' all, we're done soon",
    "TODO: Insert elevator music",
    "Still faster than Windows update",
    "Composer hack: Waiting for reqs to be fetched is less frustrating if you add -vvv to your command.",
    "Wait, we are being professional",
    "Hello There, General Kenobi",
  ];
  return (
    <section className="hero is-fullheight is-primary ">
      <div className="hero-body">
        <div className="container has-text-centered">
          <FontAwesomeIcon icon={faWhatsapp} size="3x" spin />
          <h1 className="subtitle is-3 mt-3" suppressHydrationWarning>
            {
              loadingText[
                Math.floor(Math.random() * (loadingText.length - 0) + 0)
              ]
            }
          </h1>
        </div>
      </div>
    </section>
  );
}

export const LoaderAnalysis = () => {
  const [progressBar, setProgressBar] = useState(null);
  const [pollMax, setPollMax] = useState(null);
  const [loading, setLoading] = useState(false);

  const showProgressBar = async (name) => {
    setLoading(true);
    const result = await postPolls(name);
    setPollMax(result.yash + result.atharva + result.sumit);
    setProgressBar(result);
    setLoading(false);
  };
  return (
    <section className="hero is-fullheight is-primary ">
      <div className="hero-body">
        <div className="container has-text-centered">
          <Image
            className="rotate"
            src="/whitehero.png"
            alt="Picture of the author"
            width={200}
            height={200}
          />

          <h1 className="title is-3 mt-3">
            {" "}
            Analysing your chats, might take upto a minute
          </h1>
          <h1 className="subtitle is-5 has-text-white">
            {progressBar
              ? "It's all their fault"
              : "Taking too long? Choose someone to blame it on!"}
          </h1>
          {progressBar ? (
            <div className="columns  is-centered">
              <div className="column is-half ">
                <ProgressBar
                  progress={progressBar.yash}
                  color={"is-warning"}
                  imageSrc={"/yashdew.jpeg"}
                  pollMax={pollMax}
                />
                <ProgressBar
                  progress={progressBar.sumit}
                  color={"is-link"}
                  imageSrc={"/sumitkolpekwar.jpg"}
                  pollMax={pollMax}
                />
                <ProgressBar
                  progress={progressBar.atharva}
                  color={"is-danger"}
                  imageSrc={"/atharvakulkarni.jpg"}
                  pollMax={pollMax}
                />
              </div>
            </div>
          ) : (
            <div className="field is-grouped is-grouped-centered">
              <p className="control">
                <button
                  className={`button is-primary is-inverted is-outlined  ${
                    loading ? "is-loading" : ""
                  } `}
                  onClick={() => showProgressBar("yash")}
                >
                  Yash
                </button>
              </p>
              <p className="control ">
                <button
                  className={`button is-primary is-inverted is-outlined  ${
                    loading ? "is-loading" : ""
                  } `}
                  onClick={() => showProgressBar("sumit")}
                >
                  Sumit
                </button>
              </p>
              <p className="control ">
                <button
                  className={`button is-primary is-inverted is-outlined  ${
                    loading ? "is-loading" : ""
                  } `}
                  onClick={() => showProgressBar("atharva")}
                >
                  Atharva
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const ProgressBar = ({ progress, imageSrc, color, pollMax }) => {
  
  return (
    <div class="columns is-vcentered is-mobile">
      <div class="column is-narrow">
        <Image
          className="is-rounded"
          src={imageSrc}
          alt="Picture of the author"
          width={32}
          height={32}
        />
      </div>
      <div class="column">
        <progress
          className={`progress is-medium ${color}`}
          value={progress}
          max={pollMax}
        >
          {progress}
        </progress>
      </div>
      <div class="column is-narrow">
        <h1 className={"subtitle is-6"}> {progress} votes </h1>
      </div>
    </div>
  );
};
