CREATE DATABASE CodeQuest1;
USE CodeQuest1;
CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(30) NOT NULL,
email VARCHAR(50) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL,
registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE categories (
category_id INT AUTO_INCREMENT PRIMARY KEY,
category_name VARCHAR(90) NOT NULL UNIQUE
);
INSERT INTO categories (category_name) VALUES 
('Programming languages/Coding'),
('DBMS'),
('Networks'),
('Quizzes');
CREATE TABLE topics (
topic_id INT AUTO_INCREMENT PRIMARY KEY,
topic_name VARCHAR(255) NOT NULL,
category_id INT,
content TEXT,
FOREIGN KEY (category_id) REFERENCES categories(category_id) ON DELETE CASCADE
);
INSERT INTO topics (topic_name, content, category_id) VALUES
('Introduction to Programming ','Programming is the process of writing instructions and commands for computers to execute specific tasks. It is one of the most essential skills in the modern era, used in application development, websites, artificial intelligence, and many other fields. Anyone can start learning programming through beginner-friendly languages such as Python and JavaScript, which are known for their simplicity and ease of use.',1),

('Java & Write Once, Run Anywhere (WORA)','Java follows the principle of "Write Once, Run Anywhere" (WORA). This means that Java programs can run on any platform that supports the Java Virtual Machine (JVM) without needing modification. This makes Java a powerful language for building cross-platform applications, from desktop software to mobile apps and enterprise solutions.',1),

('Why is Python popular? ','Imagine a programming language so simple that even beginners can grasp it quickly, yet so powerful that it drives some of the world’s most complex technologies.
That’s Python.
Created by Guido van Rossum in 1991, Python has grown into one of the most versatile and widely used programming languages in the world. Whether you’re a student, a software developer, or a data scientist, chances are you’ve encountered Python in one way or another. But what makes Python so special?  

Uses & Advantages of Python

Python is a true all-rounder. If you’ve ever used a recommendation system on Netflix, booked a ride on Uber, or even searched for something on Google, you’ve already interacted with Python-powered applications.

In web development, Python frameworks like Django and Flask make it easy to create robust and scalable websites. In the world of data science and artificial intelligence, Python is the undisputed king—libraries like TensorFlow, Pandas, and Scikit-learn allow developers to analyze massive datasets, build predictive models, and create intelligent applications. Cybersecurity professionals also rely on Python for penetration testing and automation, while game developers use it to prototype new ideas quickly.
Even outside the tech industry, Python is making waves. Scientists use it for complex calculations, businesses automate repetitive tasks with it, and hobbyists build fun projects ranging from chatbots to home automation systems. The possibilities are endless.
The reason Python has taken over the programming world is simple—it balances simplicity and power like no other language. Here’s why developers and companies love it:  
* Beginner-Friendly Yet Powerful
It’s easy to learn but can also handle advanced applications.

* Used in High-Demand Fields
AI, machine learning, and data science rely heavily on Python.  
* Strong Ecosystem and Libraries
Speeds up development with pre-built tools.  
* Adopted by Big Companies
Tech giants like Google, Netflix, and Facebook rely on Python.
Python’s ability to cater to both beginners and experts while being used in groundbreaking technologies makes it one of the most in-demand programming languages today.',1),


('What is PHP?','Think about the websites you visit daily—Facebook, Wikipedia, WordPress blogs. What do they all have in common? PHP.

Despite being around for decades, PHP remains a dominant force in web development. Created by Rasmus Lerdorf in 1994, PHP was designed to make web pages dynamic and interactive. While newer technologies have emerged, PHP still powers over 75% of websites worldwide. So, what makes it so valuable? 

The Many Uses of PHP

At its core, PHP was built for the web— and it does the job exceptionally well. When you log in to a website, submit a contact form, or browse an e-commerce store, chances are PHP is working behind the scenes to process your request. It’s the engine that dynamically generates content, connects websites to databases, and ensures smooth user interactions.  

One of PHP’s biggest strengths is how seamlessly it works with databases. Whether it’s MySQL, PostgreSQL, or MongoDB, PHP handles data storage and retrieval with ease, making it the backbone of popular Content Management Systems (CMS) like WordPress, Joomla, and Drupal. In fact, WordPress used by over 40% of all websites—is built on PHP.

Beyond blogs and websites, PHP plays a huge role in e-commerce. Platforms like Magento, WooCommerce, and OpenCart run on PHP, enabling businesses to create full-fledged online stores with shopping carts, product catalogs, and secure payment processing. Without PHP, the online shopping experience would be very different.  

But PHP isn’t just about websites. It’s also a key player in server-side scripting, allowing developers to automate tasks, generate reports, and even handle background processing for applications. Some companies even use PHP for building APIs that allow their systems to communicate with other platforms.  

Why is PHP Still So Popular?

Despite being one of the older programming languages, PHP continues to thrive because it does what it was designed to do extremely well. It’s fast, efficient, and easy to deploy, making it the go-to choice for developers who need to build dynamic websites quickly.  

PHP is also incredibly beginner-friendly. Unlike some modern web technologies that require complex setups, PHP allows developers to start coding right away—just write a script, upload it to a server, and it runs. This simplicity has made it a favorite for freelancers, small businesses, and even large corporations.  

Of course, PHP isn’t without its flaws. In the past, it has faced criticism for security vulnerabilities, but with modern frameworks like Laravel and CodeIgniter, these concerns have largely been addressed. Some also argue that PHP isn’t as “modern” as languages like Node.js or Python, but the reality is that PHP remains one of the most practical and widely supported choices for web development.  

So, why is PHP still relevant? Because the web still needs it. As long as businesses rely on content management systems, as long as e-commerce platforms continue to grow, and as long as websites require dynamic functionality, PHP will remain a dominant force in web development.  

Whether you’re just starting out in programming or looking to build real-world web applications, PHP is a skill that will never go out of style.',1),

('C#','C# (pronounced “C-Sharp”) is an object-oriented programming language (OOP) developed by Microsoft under the .NET Framework. It is designed to be modern and easy to use with strong support for developing web applications, desktops, games, cloud services, and more.
C# Features:
- Object-oriented (OOP): Supports object-oriented programming, making code reusable.

- Strong .NET compatibility: Works seamlessly with .NET libraries and technologies such as ASP.NET.

- Automatic memory management: Includes Garbage Collector to manage memory automatically.

- Strong security: Reduces security bugs such as memory leaks.

- Game support: Used to develop games via Unity.

- Cross-platform: Supports cross-platform development using .NET Core.

Most popular uses of C#:
- Develop desktop applications using WPF and Windows Forms.
- Program web applications using ASP.NET.
- Develop games using Unity.
- Build cloud services and APIs.


Pros and Cons of C#

Pros 
1-Object-Oriented Programming (OOP): Supports OOP principles, making code reusable and well-structured.

2-Integration with .NET Framework: Provides powerful libraries and tools for web, desktop, cloud, and database applications.

3-Strong Security: Features like Type Safety reduce errors and enhance security.

4-Good Performance: While high-level, it offers optimized performance through .NET Runtime enhancements.

5-Game Development Support: Used in Unity, one of the most popular game engines.

Cons 
1-Slower Than Low-Level Languages Compared to C or C++, C# relies on .NET Runtime, which adds some overhead.

2-Higher Resource Consumption: C# applications may consume more memory than low-level languages, which can be an issue for resource-limited systems.

3-Platform Dependency for Some Features: Some .NET features are optimized for Windows, making cross-platform compatibility sometimes tricky.

4-Steeper Learning Curve: While easier than C++, beginners might find it complex due to advanced .NET concepts.

Examples of use:

1- “Hello, World!” program:

using System;
class Program
{
static void Main()
{
Console.WriteLine("Hello, World!");
}
}
2. Class definition and usage
class Person
{
public string Name { get; set; }
public void SayHello()
{
Console.WriteLine($"Hello, my name is {Name}.");
}
}
class Program
{
static void Main()
{
Person p = new Person { Name = "Ali" };
p.SayHello();
}
} 
',1), 

('Introduction to Database Management System (DBMS)','A Database Management System (DBMS) is a program used to create and manage databases in an organized and secure manner, allowing users to store, retrieve, and modify data efficiently.
In the modern era, databases have become essential in all fields, such as financial institutions, e-commerce sites, and smart applications, as they are used to manage and analyze huge amounts of information quickly and accurately.
The importance of a database management system
1-Data organization: Allows data to be stored in an organized manner instead of using random files.

2-Security and protection: Provides ways to control who can access data.

3-Speed ​​and efficiency: It can process large amounts of data quickly using custom queries.

4-Integrity and reliability: Ensures that data is not lost or duplicated incorrectly.

5-Transaction support: Ensures that financial or business operations are executed correctly and securely.

Types of Database Management Systems

-  Relational DBMS (RDBMS): Relies on tables and relationships between data, such as 
MySQL, PostgreSQL, SQL Server.
- Non-relational DBMS (NoSQL DBMS): Uses flexible models such as documents and keys-values, such as MongoDB, Redis, Cassandra.
- Distributed DBMS: Data is stored across multiple servers to improve performance and flexibility.
DBMS is an essential tool in the world of technology, helping organizations manage their data efficiently and securely. Choosing the right system depends on the nature of the data and the requirements of the application.',2),

('What is the System Development Life Cycle (SDLC)? ','The System Development Life Cycle (SDLC) is a structured approach used in software and system development. It outlines a series of phases that a system goes through, from the initial idea to deployment and maintenance. SDLC ensures that high-quality systems are developed efficiently, meeting user needs while considering time, cost, and performance.

‎‏Phases of the System Development Life Cycle (SDLC):


‎‏Why Use SDLC?
‎‏- Ensures an organized development process for efficiency.
‎‏- Guarantees high-quality output by minimizing software errors.
‎‏- Improves time and cost management with structured planning.
‎‏- Facilitates future maintenance and reduces operational risks.

‎‏Popular SDLC Models:
‎‏	1.Waterfall Model
‎‏- A linear, sequential approach where each phase is completed before moving to the next.
‎‏•Best suited for projects with well-defined and stable requirements.
       2‎‏-Spiral Model
‎‏•Iterative development that incorporates risk assessment and repeated refinement.
‎‏•Ideal for complex and high-risk projects.
        3‎‏-Agile Model
‎‏- Emphasizes iterative progress, flexibility, and continuous user collaboration.
‎‏- Suitable for projects requiring frequent updates and rapid changes.

‎‏Conclusion:
The System Development Life Cycle (SDLC) is a critical framework that ensures the development of reliable, high-quality systems. By following a well-defined process, teams can effectively manage risks, optimize performance, and meet user expectations.',2),

('main difference between SQL and NoSQL lies in how data is stored, organized, and managed. Here’s a detailed comparison:','1. Data Structure
‎‏- SQL (Structured Query Language): Based on Relational Databases (RDBMS), where data is stored in tables consisting of rows and columns, with defined relationships between tables.
‎‏- NoSQL (Not Only SQL): Based on Non-Relational Databases, where data is stored in a flexible manner, such as Documents, Key-Value Pairs, Wide-Column Stores, or Graph Databases.

‎‏2. Query Language
‎‏- SQL: Uses SQL as the standard language for operations like querying, inserting, updating, and deleting data (CRUD: Create, Read, Update, Delete).
‎‏- NoSQL: Does not rely on SQL; query languages vary by database type. For example, MongoDB uses JSON-like queries similar to JavaScript.

‎‏3. Flexibility & Schema
‎‏- SQL: Less flexible since it requires a fixed schema, meaning any structural changes require table modifications or adjustments in relationships.
‎‏- NoSQL: More flexible as it doesn’t require a predefined schema, allowing new fields to be added easily without modifying existing structures.

‎‏ 4. Scalability
‎‏- SQL: Primarily scales vertically (Vertical Scaling), meaning upgrading the main server’s hardware (CPU, RAM, Storage).
‎‏- NoSQL: Scales horizontally (Horizontal Scaling) by distributing data across multiple servers, making it more efficient for handling large-scale data.

‎‏5. Performance & Read/Write Speed
‎‏- SQL: Suitable for systems requiring complex transactions with strong consistency, but performance may slow down with massive data volumes.
‎‏- NoSQL: Faster for handling big data since it doesn’t enforce strict relational constraints like SQL.

‎‏6. Consistency vs. Availability
‎‏- SQL: Ensures strict adherence to ACID principles (Atomicity, Consistency, Isolation, Durability), meaning transactions are reliable and secure.
‎‏- NoSQL: Follows the CAP theorem (Consistency, Availability, Partition tolerance), often prioritizing availability and performance over strict consistency.

‎‏7. Use Cases
‎‏Examples of Databases
‎‏- SQL: MySQL, PostgreSQL, Oracle, Microsoft SQL Server
‎‏- NoSQL: MongoDB, Cassandra, Redis, CouchDB ',2),


('Here are some simple guidelines for creating an Entity-Relationship (ER) Model:',' Identify Entities:
- An entity represents a real-world object that can be distinguished (e.g., Employee,
Customer, Product).
- Identify the main entities in your system.
- Use clear and meaningful names for each entity.
Define Attributes:
- Each entity has attributes that describe it (e.g., Customer Name, Phone Number, Birthdate).
- Choose a Primary Key (PK) to uniquely identify each record (e.g., Customer ID, Product ID).
Establish Relationships:
- Determine how entities are related (Employee works in a Department, Customer places an
Order).
- Identify the type of relationship:
- One-to-One (1:1)
-  One-to-Many (1:M)
- Many-to-Many (M:N)
Draw the ER Diagram:
- Use standard ERD symbols:
- Rectangles for entities.
- Diamonds for relationships.
- Ellipses for attributes.

- Ensure relationships and attributes are clearly linked.
Review and Optimize:
- Validate the model to ensure it accurately represents the system’s requirements.
- Eliminate redundant data and improve clarity.
- Convert complex relationships into entities if necessary
',2),

('Simple Steps to Learn Network Diagrams Easily','Understand the Basics of Networking:
- Learn about network components such as routers, switches, firewalls, and servers.
- Understand different types of networks (LAN, WAN, WLAN, MAN).
Learn Common Network Symbols:
- Use standard symbols for routers, switches, servers, firewalls, and endpoints.
- Familiarize yourself with symbols used in Cisco or IEEE standards.
Know the Types of Network Diagrams:
- Physical Diagram: Shows actual hardware and physical connections.
- Logical Diagram: Represents data flow, IP addressing, and network segmentation.
Use Network Diagramming Tools:
- Try tools like Microsoft Visio, Lucidchart, Draw.io, or Cisco Packet Tracer.
- Practice drawing simple network layouts.
Understand IP Addressing & Subnetting:
- Learn about IP addresses, subnet masks, and VLANs.
- Understand how devices communicate using TCP/IP protocols.
Start with Simple Diagrams & Expand Gradually:
- Begin with a basic home network (e.g., router, switch, PC, Wi-Fi).
- Progress to enterprise or cloud-based network architectures.
Study Real-World Examples:
- Analyze network diagrams from books, online resources, or IT certifications (CCNA,
CompTIA Network+).
Practice Regularly:
- Design different network scenarios and troubleshoot them.
- Compare your diagrams with industry standards for accuracy',3),

('What are the types of networks? ','There are multiple and different types of networks based on the ranges and boundaries of their work.
At first we will know what the network is? And why do we use it?

What is the network?
A network is a connected collection of devices and end systems.

why do we use the network?

- To facilitate communication between people

- To access the Internet and browse

- For safety through the use of central protection systems and firewalls


types of networks:
1-WAN(Wide Area Network)

It is a network that covers and extends over very long distances that connects countries and continents, an example of which is (the Internet).

2-MAN(Metropolitan Area Network)

It covers large areas but less than WAN, which is the connection between cities, for example, the connection between the main branch of a company and its affiliates.

3-LAN(Local Area Network)

Covers and connects devices within a less than MAN range. As coverage inside the home and within the environment of a company using technologies such as the Internet and Ethernet.

4-PAN(Personal Area Network)

It is a very limited and small network connection, such as the connection between a smartphone and headphones using Bluetooth.',3),

('Learn physical topology easily','What is physical topology and why do we use it?

Physical topology is the physical design of devices and cables.

We use it for several reasons, including improving performance and speed, increasing security and control, flexibility and expansion, reducing faults and increasing reliability, improving network management and maintenance.
 
There are three basic types of physical topology:

1-Bus

Computers and other network devices are cabled together in a line.


2-Ring

Computers and other network devices are cabled together with the last device connected to the first to form a circle, or ring.
 
This category includes both ring and dual-ring topologies:


3-Star

A central cabling device connects the computers and other network devices.
 This category includes both star and extended-star topologies.',3),

('What is the TCP/IP Model? ','
The TCP/IP (Transmission Control Protocol/ Internet Protocol )model is a set of protocols that define how data is transmitted over the internet. It consists of four layers and is widely used in modern networking.

Advantages of TCP/IP:
- Highly scalable and widely adopted.
- Ensures reliable data transmission with error checking.
- Supports multiple routing protocols.

Disadvantages of TCP/IP:
- More difficult to understand compared to OSI.
- Not suitable for every type of network architecture.


What is the OSI Model?

The OSI (Open Systems Interconnection) model is a conceptual framework used to understand and standardize network communication. It consists of seven layers, each responsible for different functions in data transmission.

Advantages of OSI:
- Provides a clear modular Structure.
- Helps in troubleshooting network issues.
- Standardized by IOS, ensuring global compatibility .

Disadvantages of OSI:
- Complex implementation. 
- Less practical compared to TCP/IP in real-world applications.

OSI (Open Systems Interconnection) & TCP/IP Model

OSI and TCP/IP models and the importance of internet protocols are widely used in programming and networking, especially in developing applications that interact with the internet or local networks. Examples include:
- Network Programming: Developing applications that rely on device communication, such as Sockets in Python or Java.
- Web Development: Handling protocols like HTTP/HTTPS and DNS to ensure websites function properly.
- Cybersecurity: Understanding OSI and TCP/IP layers is essential for data protection and preventing cyber attacks.
- Server and Web Application Development: Using the TCP/IP protocol to connect servers with users over the internet.
- Cloud Computing: Relying on internet protocols to transfer data between servers and cloud services.',3),

('What are Internet Protocols?','
Internet Protocols are a set of rules that govern how data is transmitted and received over a network. They ensure seamless communication between devices and services on the internet.

Why Are Internet Protocols Important?
- IP (Internet Protocol): Assigns unique addresses to devices and routes data between them.
- TCP (Transmission Control Protocol): Ensures reliable communication by retransmitting lost data.
- HTTP/HTTPS: Facilitates web browsing and secure transactions.
- DNS (Domain Name System): Converts human-readable domain names into IP addresses.

Advantages of Internet Protocols:
- Enable seamless global communication.
- Ensure data integrity and security (e.g.,HTTPS).
- Support multiple applications, from emails to video streaming.

Disadvantages of Internet Protocols:
- Can be vulnerable to cyber threats and attacks.
- Some protocols (e.g., TCP) may introduce latency due to error checking.
Complexity in managing multiple protocol layers. ', 3);

CREATE TABLE quizzes (
    quiz_id INT AUTO_INCREMENT PRIMARY KEY,
    quiz_name VARCHAR(255) NOT NULL
);

INSERT INTO quizzes (quiz_name) VALUES ('Quiz Level 1'), ('Quiz Level 2');

CREATE TABLE questions (
    question_id INT AUTO_INCREMENT PRIMARY KEY,
    quiz_id INT,
    question_text TEXT NOT NULL,
    option_a TEXT,
    option_b TEXT,
    option_c TEXT,
    option_d TEXT,
    correct_answer CHAR(1),
    question_type ENUM('True/False', 'Multiple Choice') NOT NULL,
    FOREIGN KEY (quiz_id) REFERENCES quizzes(quiz_id) ON DELETE CASCADE
);
INSERT INTO questions (quiz_id, question_text, question_type, correct_answer) VALUES
(1, 'Python is widely used in data science, artificial intelligence, and cybersecurity.', 'True/False', 'T'),
(1, 'PHP cannot be used for e-commerce websites.', 'True/False', 'F'),
(1, 'C# supports object-oriented programming and is commonly used in game development.', 'True/False', 'T'),
(1, 'A Database Management System (DBMS) helps store, retrieve, and modify data efficiently.', 'True/False', 'T'),
(1, 'A Personal Area Network (PAN) covers a larger area than a Wide Area Network (WAN).', 'True/False', 'F');

INSERT INTO questions (quiz_id, question_text, question_type, option_a, option_b, option_c, option_d, correct_answer) VALUES
(1, 'Which of the following is a key advantage of Python?', 'Multiple Choice', 'Complex syntax', 'Beginner-friendly and powerful', 'Limited library support', 'Only used for web development', 'B'),
(1, 'Which language is commonly used for server-side scripting in web development?', 'Multiple Choice', 'Python', 'PHP', 'C#', 'JavaScript', 'B'),
(2, 'Which of the following is an advantage of using C#?', 'Multiple Choice', 'Automatic memory management', 'Not compatible with .NET framework', 'No support for object-oriented programming', 'Only used for desktop applications', 'A'),
(2, 'Which type of database management system stores data in tables with structured relationships?', 'Multiple Choice', 'NoSQL DBMS', 'Distributed DBMS', 'Relational DBMS', 'Cloud DBMS', 'C'),
(2, 'Which network type is best suited for connecting multiple branches of a company across a city?', 'Multiple Choice', 'LAN', 'PAN', 'MAN', 'WAN', 'C');

INSERT INTO questions (quiz_id, question_text, question_type, correct_answer) VALUES
(2, 'Python is only used for web development and cannot be applied in artificial intelligence.', 'True/False', 'F'),
(2, 'PHP is widely used for building content management systems like WordPress.', 'True/False', 'T'),
(2, 'C# is mainly used for mobile app development and has no role in game development.', 'True/False', 'F');

INSERT INTO questions (quiz_id, question_text, question_type, option_a, option_b, option_c, option_d, correct_answer) VALUES
(2, 'Which of the following industries benefit from Python?', 'Multiple Choice', 'Web development', 'Data science', 'Cybersecurity', 'All of the above', 'D'),
(2, 'Which of the following is a major use of PHP?', 'Multiple Choice', 'Machine learning', 'Web development', 'Operating system design', 'Game development', 'B'),
(2, 'Which network topology connects all devices in a single continuous loop?', 'Multiple Choice', 'Star', 'Mesh', 'Bus', 'Ring', 'D'),
(2, 'Which type of database is best suited for handling structured data with relationships?', 'Multiple Choice', 'NoSQL', 'Relational DBMS', 'Key-Value Store', 'Document-based DBMS', 'B');
CREATE TABLE user_scores (
    score_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    quiz_id INT,
    score INT NOT NULL,
    completion_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (quiz_id) REFERENCES quizzes(quiz_id) ON DELETE CASCADE
);

CREATE TABLE bookmarks (
    bookmark_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    topic_id INT NULL,
    quiz_id INT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (topic_id) REFERENCES topics(topic_id) ON DELETE CASCADE,
    FOREIGN KEY (quiz_id) REFERENCES quizzes(quiz_id) ON DELETE CASCADE
);
CREATE TABLE Admin (
    Admin_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    password VARCHAR(50),
    mobile VARCHAR(50),
    email VARCHAR(50)
);
INSERT INTO Admin (name, password, mobile, email)
VALUES ('CodeQuest', 'admin1010', '0501710588', '445813489@kku.edu.sa');
