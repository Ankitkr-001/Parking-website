import React, { useState } from "react";
import "./ConceptUsed.css";
import up_icon from "../../assets/up-icon.png";
import down_icon from "../../assets/down-icon.png";

const ConceptUsed = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    {
      title: "User Management",
      text:
        "Users can register, login, and manage their accounts. This includes updating personal information and viewing booking history."
    },
    {
      title: "Parking Spot Management",
      text:
        "The system maintains information about available parking spots, including their location, availability status, and pricing."

    },
    {
      title: "Booking System",
      text:
        "Users can book parking spots in advance. The system checks availability and allows users to select spots based on their preferences."
    },
    {
      title: "Payment Integration",
      text:
        " Users can make payments for parking bookings securely through integrated payment gateways. The system handles payment processing and generates invoices. Admin Panel: Administrators have access to a dashboard where they can manage users, parking spots, bookings, and generate reports."
    },
    // {
    //   title: "Concept used",
    //   text:
    //     "To implement a Parking Management System using Java and MySQL, you would typically use Java for the backend logic and MySQL for the database storage. Here's a high-level overview of the technologies involved"
    // },
    {
      title: "Java",
      text:
        "Java provides a robust platform for developing server-side applications. You can use Java Servlets or Spring Framework to handle HTTP requests, business logic, and database interactions."

    },
    {
      title: "MySQL",
      text:
        " MySQL is a popular open-source relational database management system. You can use it to store user data, parking spot information, booking details, and other relevant data. "

    },
    {
      title: "JDBC (Java Database Connectivity)",
      text:
        " JDBC is a Java API that allows Java applications to interact with relational databases like MySQL. You can use JDBC to establish connections, execute SQL queries, and retrieve results from the database."

    },
    {
      title: "HTML/CSS",
      text:
        "HTML and CSS are used to create the user interface for the Parking Management System. HTML defines the structure of web pages, while CSS is used for styling and layout."
    },
    {
      title: "JavaScript",
      text:
        "JavaScript can be used to add interactivity to the user interface, such as form validation, dynamic content updates, and AJAX requests for asynchronous data retrieval.By combining these technologies effectively, you can create a robust and efficient Parking Management System that meets the needs of both users and administrators."
    }
  ];

  const toggleButton = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="concept-used">
      <h3 className="concept-main-title">
        A Parking Management System is a software solution designed to manage
        parking lots efficiently. It typically involves several key components:
      </h3>
      <div className="concept-content">
        {data.map((item, index) => (
          <div className="concept-container" key={index}>
            <h3 className="concept-title">
              {item.title}
              <div className="img-place">
                <img
                  src={up_icon}
                  alt=""
                  className={activeIndex === index ? "" : " img-up"}
                  onClick={() => toggleButton(index)}
                />
                <img
                  src={down_icon}
                  alt=""
                  className={activeIndex === index ? "img-down" : ""}
                  onClick={() => toggleButton(index)}
                />
              </div>
            </h3>

            <p className={`${activeIndex === index ? "" : "hide-text"} concept-text`}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConceptUsed;
