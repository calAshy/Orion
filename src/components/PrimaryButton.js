import './PrimaryButton.css';

function PrimaryButton({ ButtonText, onClick }) {
    return(
        <button className="ButtonDesign" onClick={onClick}>
            {ButtonText}
        </button>
    );
}

export default PrimaryButton;