
  const employees= 
    [
  {
    "id": "emp001",
    "firstname": "Rahul",
    "email": "emp1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Fix login bug",
        "description": "Resolve issue with email validation in login form",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "date": "2025-07-30",
        "category": "development"
      },
      {
        "title": "Update README",
        "description": "Add usage instructions and screenshots",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "date": "2025-07-20",
        "category": "documentation"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": "emp002",
    "firstname": "Sneha",
    "email": "emp2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Create landing page",
        "description": "Design the initial landing page for the product",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "date": "2025-08-01",
        "category": "design"
      },
      {
        "title": "SEO optimization",
        "description": "Improve meta tags and page load speed",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "date": "2025-07-22",
        "category": "marketing"
      },
      {
        "title": "Typography consistency",
        "description": "Ensure all headings follow brand guidelines",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "date": "2025-07-28",
        "category": "design"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": "emp003",
    "firstname": "Aman",
    "email": "emp3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Deploy backend to production",
        "description": "Deploy Node.js app to Heroku with environment variables",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "date": "2025-07-31",
        "category": "devops"
      },
      {
        "title": "Set up CI/CD",
        "description": "Integrate GitHub Actions with testing and deployment",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true,
        "date": "2025-08-02",
        "category": "devops"
      },
      {
        "title": "Fix security vulnerabilities",
        "description": "Update outdated packages and scan for threats",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "date": "2025-08-03",
        "category": "security"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 2,
      "completed": 0,
      "failed": 1
    }
  },
  {
    "id": "emp004",
    "firstname": "Pooja",
    "email": "emp4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Customer feedback analysis",
        "description": "Summarize support tickets and extract feature requests",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "date": "2025-07-25",
        "category": "research"
      },
      {
        "title": "Prepare sprint report",
        "description": "Draft report for current sprint review",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "date": "2025-07-30",
        "category": "management"
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": "emp005",
    "firstname": "Karan",
    "email": "emp5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Build authentication API",
        "description": "Create login and register endpoints",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "date": "2025-07-30",
        "category": "backend"
      },
      {
        "title": "Unit test user model",
        "description": "Write Jest tests for user schema",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "date": "2025-07-27",
        "category": "testing"
      },
      {
        "title": "Optimize DB queries",
        "description": "Use indexes and reduce redundant joins",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "date": "2025-08-01",
        "category": "database"
      },
      {
        "title": "Write API docs",
        "description": "Add Swagger docs for all endpoints",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "date": "2025-07-28",
        "category": "documentation"
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  }


  ];
  const admin= [
    {
      "id": "admin001",
      "firstname": "Ravi",
      "email": "admin@example.com",
      "password": "123"
    }
  ];



export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
