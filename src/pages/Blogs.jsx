/* eslint-disable react/no-unescaped-entities */

import question from "../../public/questions.jpg";

const Blogs = () => {
    return (
        <div className="my-10">

            <h2 className="text-4xl font-extrabold text-center my-5">Blog page</h2>

            <div className="flex flex-col-reverse lg:flex-row gap-5 p-2">
                <div className="w-full lg:w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-5">

                    <div tabIndex={0} className="bg-violet-100 collapse collapse-plus border border-base-300 rounded-box">
                        <div className="collapse-title text-lg font-medium text-justify">
                            What is an access token and refresh token? How do they work and where should we store them on the client-side?
                        </div>
                        <div className="collapse-content">
                            <p>

                                Access Token is credential that issued by a server after authenticating and authorised the user. It has an limited time span. <br />

                                Refresh token is also a credential which is also issued by server while authentication and authorisation. But it is a long lived credential and it used to re generate access token without re authogized the user after the end of the time span of access token.
                                <br />

                                Refress token and access token is commonly used for authentication and authorization protocol. And they are mainly used to manage access to protected resources. <br />

                                We can store them in 2 place one is cookies and another option is local storage. But the safest way is the "http only cookies" to store access and refresh token.

                            </p>
                        </div>
                    </div>

                    <div tabIndex={1} className="collapse collapse-plus border border-base-310 bg-base-100 rounded-box">
                        <div className="collapse-title text-lg text-justify font-medium">
                            SQL Vs NoSQL databases?
                        </div>
                        <div className="collapse-content">
                            <p>
                                <span className="font-bold">SQL: </span> <br />
                                SQL database is a database where data are stored into tabular format that means in row column format. SQL database is based on relational data model. It is designed for handle structured data. few popular sql databases are: MySQL, ORACLE

                                <br /><span className="font-bold">NoSQL: </span> <br />
                                NoSQL database is basically design for handle unstructured data. NoSWL database can provide flexible schemas or here we can store data withour any predefined structured. NOSQL database use various data model key-value, document, graph to retrive data efficiently. Few popular NOSQL databases are: MongoDB, Redis.
                                
                            </p>
                        </div>
                    </div>

                    <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-lg text-justify font-medium">
                            What is express js? What is Nest JS ?
                        </div>
                        <div className="collapse-content">
                            <p>
                                <span className="font-bold">Express JS:</span> <br />
                                express is a flexible and minimal Node.js web application frame work. express js is a layer that built on top of the Node.js that helps to manage servers and routes efficiently.

                                <br /><span className="font-bold">Nest JS </span> <br />
                                Nest Js is a framework for building efficient, scalable Node.js web application for server side. It uses progressive java script and built with TypeScript. It helps to build lighweight, well-structure web application on the server side using node js. 

                            </p>
                        </div>
                    </div>

                    <div tabIndex={3} className="bg-violet-100 collapse collapse-plus border border-base-310 rounded-box">
                        <div className="collapse-title text-lg text-justify font-medium">
                            What is MongoDB aggregate and how does it work?
                        </div>
                        <div className="collapse-content">
                            <p>
                                <span className="font-bold">MongoDb Aggregate </span> is a powerfull tools for precessing complex data. It works by creating pipelines of multiple stages, where each stages is known as data data processing stages. Those stages can filter, sort, group, reshape and modify documents that pass through the pipeline. MongoDB allow you to perform various types of aggregate operation.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="w-full lg:w-1/3">
                    <img className="w-full" src={question} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Blogs;