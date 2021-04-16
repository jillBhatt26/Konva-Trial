const Nav = () => {
    return (
        <div className="nav-wrapper">
            <div className="container">
                <div className="nav">
                    <div className="nav-left">
                        <h5>Edit Post</h5>
                        <p>Save</p>
                    </div>
                    <div className="nav-right">
                        <i className="material-icons">delete</i>
                        <span>Undo</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
