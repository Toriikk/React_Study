import React from "react";
import Book from "./book";

function Library(props) {
    return (
        <div>
            <Book name="처음 만나는 자바" numOfPage={300} />
            <Book name="처음 만나는 AWS" numOfPage={400} />
            <Book name="처음 만나는 React" numOfPage={500} />

        </div>
    );
}

export default Library;