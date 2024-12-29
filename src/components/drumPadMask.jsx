const DrumPadMask = ({ idDiv, onClick, keyLabel, audioLink }) => {
    return (
        <section
            className="drum-pad"
            id={idDiv}
            tabIndex={1}
            onClick={onClick}
        >
            {keyLabel}
            <audio className="clip" id={keyLabel} src={audioLink}></audio>
        </section>
    );
};

export default DrumPadMask;
