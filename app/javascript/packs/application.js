import "bootstrap";
import './application.css';
import { activateVideo } from "../components/videoPlayer";
import { startTimes } from "../components/videoPlayer";
import { renderSteps } from "../components/videoPlayer";
import { moveStep } from "../components/videoPlayer";
import { seekSteps } from "../components/videoPlayer";
import { typedjs} from "../components/typed";
import { activateButton } from "../components/collapse";
import { questionStep } from "../components/question_form";
import { answerQuestion } from "../components/answer_form";
import { activateParticles} from "../components/particles";
import { VideoUploader } from "../components/uploads";

const videoPlayer = document.querySelectorAll('.video-js');

if (videoPlayer.length != 0) {
  activateVideo();
  $('.collapse').collapse()
  activateButton();
};

VideoUploader();

const tutorialPage = document.querySelector('.tutorials.show');
if (tutorialPage) {
  questionStep();
};

const dashboard = document.querySelector('.users.dashboard');
if (dashboard) {
  answerQuestion();
};

const home = document.querySelector('.home');
if (home) {
  typedjs();
  activateParticles();
}

const upload = document.querySelector('.tutorials.new');
if (upload) {
  VideoUploader();
}
