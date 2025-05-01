interface Props {
  setCurrentLink: (currentLink: string) => void;
}

const UpArrow = ({ setCurrentLink }: Props) => {
  return (
    <a
      href="#"
      onClick={() => setCurrentLink("Home")}
      className="fixed bottom-8 right-8 bg-containerColor px-2 py-1 rounded-lg"
    >
      <i className="ri-arrow-up-line text-white"></i>
    </a>
  );
};

export default UpArrow;
