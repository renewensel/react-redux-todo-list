import React, { Fragment } from "react";

class Header extends React.Component {
    render() {
        return (
            <Fragment>
                {/* My first comment. Comments can't be outside of my Fragment */}
                <h1>What to do?</h1>
                <span className="tagline">This could be your bucket list.</span>
            </Fragment>
        );
    }
};

export default Header;