import React from "react"

export default function Main() {
    return (
        <main>
            <h1 className="main--title">
                Fun facts about React
            </h1>
            <ul className="main--body">
                <li className="main--body--bullets">Was first released in 2013</li>
                <li className="main--body--bullets">Was originally created by Jordam Walke</li>
                <li className="main--body--bullets">Has well over 100k stars on GitHub</li>
                <li className="main--body--bullets">Is maintained by Facebook</li>
                <li className="main--body--bullets">Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}