import React, { useState, useEffect, useRef } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

import { marked } from 'marked';
import DOMPurify from 'dompurify';

const Issues = ({ repo }) => {
    const [issues, setIssues] = useState([]);
    const daysSinceLastUpdateAlertThreshold = 100;

    // Function to calculate time since last update
    const getTimeSince = (updatedDate) => {
        const now = new Date();
        const difference = now - updatedDate; // difference in milliseconds
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);

        return {
            days,
            hours,
            minutes
        };
    };

    // Fetch issues
    useEffect(() => {
        fetch(`https://api.github.com/repos/${repo}/issues?state=all&per_page=30&page=1`)
            .then(response => response.json())
            .then(data => {
                setIssues(data.map(issue => ({
                    ...issue,
                    stateIndicator: getStateIndicator(issue.state),
                    timeSinceLastUpdate: getTimeSince(new Date(issue.updated_at))
                })))
            })
            .catch(error => {
                console.error('Error fetching issues:', error);
                alert('Error fetching issues.');
            });

    }, [repo]);

    function getStateIndicator(state) {
        return state === 'open' ? 'text-warning-emphasis bg-warning-subtle' : 'text-light-emphasis bg-light-subtle';
    }


    // Make html from markdown, via marked and DOMPurify
    //TODO: use useState
    useEffect(() => {
        if (issues.length > 0 && typeof window !== 'undefined') { // Check if issues are fetched and window is defined
            const processIssues = () => {
                issues.forEach(issue => {
                    issue.body = issue.body ? DOMPurify.sanitize(marked(issue.body)) : '';
                    issue.created_at = new Date(issue.created_at).toLocaleString();
                    issue.updated_at = new Date(issue.updated_at).toLocaleString();
                });
            };

            processIssues();
        }
    }, [issues]); // Dependency on issues ensures this runs if issues change

    return (
        <div className="mx-auto issue-container">
            <div>
                <h2 className="w-100">{repo}</h2>

                {/* Short links with anchors to each issue. */}
                <div className="w-100 d-flex flex-wrap justify-content-center">
                    {issues.map((issue, index) => (
                        <div className='generated-index-links m-0 p-2' key={index}>
                            <a className={`text-start position-relative w-100 btn btn-outline-secondary-subtle text-primary-subtle btn-sm p-0 mb-1 p-1 ${issue.stateIndicator}`} href={`#issue${issue.number}`}>
                                #{issue.number}: {issue.title ? issue.title.substring(0, 25) : 'No Title'}…
                                {/* <span className="position-absolute top-0 start-100 translate-middle badge bg-primary-subtle text-primary-emphasis border-primary-subtle">{issue.comments}</span> */}
                                {issue.timeSinceLastUpdate.days > daysSinceLastUpdateAlertThreshold && issue.state === 'open' ? (
                                    <span title={`Days since last update: ${issue.timeSinceLastUpdate.days}`} className="position-absolute top-0 start-100 translate-middle badge bg-danger border-primary-subtle">
                                        {issue.timeSinceLastUpdate.days}
                                    </span>
                                ) : (
                                    <span title={`Days since last update: ${issue.timeSinceLastUpdate.days}`} className="position-absolute top-0 start-100 translate-middle badge bg-info-subtle border-primary-subtle">
                                        {issue.timeSinceLastUpdate.days}
                                    </span>
                                )}


                            </a>
                        </div>
                    ))}
                </div>

                {/* Issues */}
                {
                    issues.map((issue, index) => (
                        <div key={index}>
                            <div className={`card m-2 mb-5 ${issue.stateIndicator}`}>
                                <div className="card-header">
                                    <h3 id={`issue${issue.number}`} className="card-title">
                                        <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
                                            #{issue.number}
                                        </a>: {issue.title}
                                    </h3>
                                    <span>State: {issue.state}</span> – <span>Created: {issue.created_at}</span> –

                                    {issue.timeSinceLastUpdate.days > daysSinceLastUpdateAlertThreshold && issue.state === 'open' ? (
                                        <span className="alert alert-danger p-1">Updated: {issue.updated_at}</span>
                                    ) : (
                                        <span>Updated: {issue.updated_at}</span>
                                    )}
                                </div>
                                <div className="card-body" dangerouslySetInnerHTML={{ __html: issue.body ? issue.body.substring(0, 300) + '…' : 'No content.' }}>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div >
    );
};

export default (props) => (
    <BrowserOnly fallback={<div className="alert alert-info" role="alert">Loading…</div>}>
        {() => <Issues {...props} />}
    </BrowserOnly>
);
