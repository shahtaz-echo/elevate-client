export const moduleList = [
  {
    module: 1,
    title: "Python Basics",
    children: [
      {
        submodule: 1,
        isCompleted: true,
        title: "Introduction to Python",
        description:
          "Python is a high-level, interpreted programming language known for its simplicity and readability. It is widely used for web development, data analysis, automation, artificial intelligence, machine learning, and more. Python's syntax is designed to be intuitive and easy to learn, making it an excellent choice for beginners.",
        content: [
          "History and evolution of Python",
          "Features and advantages of Python",
          "Installing Python and setting up the environment",
          "Using Python's interactive shell and running scripts",
          "Basic syntax, indentation, and comments",
          "Variables and data types (integers, floats, strings, booleans)",
          "Basic input and output functions (print, input)",
          "Simple arithmetic operations and expressions",
        ],
        books: [
          {
            id: 1,
            title: "Python on Data Structure",
            author: "Qualam Sliva",
          },
        ],
        tutorials: [
          {
            id: 1,
            title: "Python Structure",
            url: "https://youtube.com/",
          },
        ],
        articles: [
          {
            title: "A Beginner’s Guide to Python",
            url: "https://realpython.com/python-beginners-guide/",
          },
          {
            title: "History and Features of Python",
            url: "https://www.geeksforgeeks.org/python-introduction/",
          },
          {
            title: "Setting Up Python: A Step-by-Step Guide",
            url: "https://docs.python.org/3/using/index.html",
          },
          {
            title: "Python Basics: Variables, Data Types, and Input/Output",
            url: "https://www.w3schools.com/python/python_variables.asp",
          },
        ],
        notes: [
          {
            id: 1,
            title: "Advanced Python For Beginer",
            url: "https://youtube.com/",
          },
        ],
      },
      {
        submodule: 2,
        title: "Data Types & Variables",
        isCompleted: true,
      },
      {
        submodule: 3,
        title: "Control Flow (if-else, loops)",
      },
    ],
  },
  {
    module: 2,
    title: "Advanced Python",
    children: [
      {
        submodule: 1,
        title: "Functions & Modules",
      },
      {
        submodule: 2,
        title: "Object-Oriented Programming (OOP)",
      },
      {
        submodule: 3,
        title: "Error Handling & Debugging",
      },
    ],
  },
  {
    module: 3,
    title: "Web Development with Django",
    children: [
      {
        submodule: 1,
        title: "Introduction to Django",
      },
      {
        submodule: 2,
        title: "Models & Migrations",
      },
      {
        submodule: 3,
        title: "Views, Templates, and Forms",
      },
      {
        submodule: 4,
        title: "Django REST Framework (DRF)",
      },
    ],
  },
  {
    module: 4,
    title: "Data Science & Machine Learning",
    children: [
      {
        submodule: 1,
        title: "NumPy & Pandas Basics",
      },
      {
        submodule: 2,
        title: "Data Visualization with Matplotlib & Seaborn",
      },
      {
        submodule: 3,
        title: "Machine Learning Fundamentals",
      },
    ],
  },
];
