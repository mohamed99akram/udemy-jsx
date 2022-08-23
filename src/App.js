import "./App.css";
import Card from "./components/Card";
function App() {
  let courses = [
    {
      id: 1,
      category: "Python",
      title: "Learn Python: The Complete Python Programming Course",
      image: "https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg",
      price: "E£679.99",
      reviews: 2982,
      rating: 4.4,
      instructor: "Avinash Jain, The Codex",
    },
    {
      id: 2,
      category: "Python",
      title: "Learn Python for Data Analysis and Visualization",
      image: "https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg",
      price: "E£1599.99",
      reviews: 18017,
      rating: 4.4,
      instructor: "Jose Portilla",
      bestseller: true,
    },
    {
      id: 3,
      category: "Python",
      title: "Python for Beginners - Learn Programming from scrach",
      image: "https://img-c.udemycdn.com/course/240x135/405878_e5a0_3.jpg",
      price: "E£679.99",
      reviews: 1798,
      rating: 4.4,
      instructor: "Edwin Diaz, Coding Faculty Solutions",
    },
    {
      id: 4,
      category: "Python",
      title: "Learn Python: Python for Beginners",
      image: "https://img-c.udemycdn.com/course/240x135/426570_1b91_3.jpg",
      price: "E£319.99",
      reviews: 2774,
      rating: 4.3,
      instructor: "Abrar Hussain",
    },
    {
      id: 5,
      category: "Excel",
      title: "Microsoft Excel 2013 Course Beginners/ Intermediate Training",
      image: "https://img-c.udemycdn.com/course/240x135/31535_e351_7.jpg",
      price: "E£519.99",
      reviews: 1623,
      rating: 4.5,
      instructor: "Infinite Skills",
    },
  ];
  let marketing = {
    Python: {
      brief: "Expand your career opportunities with Python",
      details:
        "Take one of Udemy's range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You'll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.",
    },
  };
  let getCourses = () =>
    courses.map((course) => {
      return <Card course={course} key={course.id}></Card>;
    });
  return (
    <>
      <div className="courses-border">
        <div className="useless">
          <h2>{marketing.Python.brief}</h2>
          <p>{marketing.Python.details}</p>
          <button className="exploreButton">Explore Python</button>
        </div>
        <div className="courses-container">{getCourses()}</div>
      </div>
    </>
  );
}

export default App;
