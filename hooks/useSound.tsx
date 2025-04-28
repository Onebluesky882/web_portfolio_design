import useSound from "use-sound";

const lipSoundUrl = "/sounds/lip.mp3";
const popSoundUrl = "/sounds/pop.mp3";

const useSoundAction = () => {
  const [lipSound] = useSound(lipSoundUrl, { volume: 1 });
  const [popSound] = useSound(popSoundUrl, { volume: 1 });
  return { lipSound, popSound };
};
export default useSoundAction;
