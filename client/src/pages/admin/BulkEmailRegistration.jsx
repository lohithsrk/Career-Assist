import React, {useState} from "react";

const BulkEmailRegistration = () => {
    const [email, setEmail] = useState("");
    const [heading, setHeading] = useState("");
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");

    return (
        <>
            <div>
                <h1>Send Email</h1>
                <form>
                    <div>
                        <label htmlFor="emailFrom">From</label>
                        <input
                            type="email"
                            id="emailFrom"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <div>
                            <label htmlFor="year">Year</label>
                            <select id="year">
                                <option value="year">2020</option>
                                <option value="year">2021</option>
                                <option value="year">2022</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="filter">Filter</label>
                            <select name="filterOption" id="filterOption">
                                <option value="everyone">Everyone</option>
                                <option value="notregistered">
                                    Not registered
                                </option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            value={subject}
                            onChange={(e) => {
                                setSubject(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="heading">Heading</label>
                        <input
                            type="text"
                            id="heading"
                            value={heading}
                            onChange={(e) => {
                                setHeading(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="body">Body</label>
                        <input
                            type="text"
                            id="body"
                            value={body}
                            onChange={(e) => {
                                setBody(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <button>Send Email</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default BulkEmailRegistration;
