function SimpleCounter(props) {
    return (
        <>
            <div className="counter-display">
                <div className="clock-img"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                    </svg>
                </div>
                <div className="seg miles">{props.miles}</div>
                <div className="seg cientos"> {props.centena}</div>
                <div className="seg decena"> {props.decena}</div>
                <div className="seg unitarios">{props.unitarios}</div>
            </div>
        </>
    );
}

export default SimpleCounter;