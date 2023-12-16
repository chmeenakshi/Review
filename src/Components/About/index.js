//import Navbar from '../Navbar';
import { useNavigate } from "react-router-dom";
import './index.css'
const About =() => {

  const posts = [
      {
          title: "What is SaaS? Software as a Service Explained",
          desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some",
          img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
          authorName: "Sidi dev",
          likes: 20,
          reviews: 5,
         
      },
      {
          title: "A Quick Guide to WordPress Hosting",
          desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations about Whittington will be featured in the film",
          img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
          authorName: "Micheal",
          likes: 20,
          reviews: 5,
         
      },
      {
          title: "7 Promising VS Code Extensions Introduced in 2022",
          desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
          img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          authorLogo: "https://randomuser.me/api/portraits/men/46.jpg",
          authorName: "Luis",
          likes: 20,
          reviews: 5,
         
      },
      {
          title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
          desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational microlensing was used to observe the",
          img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
          authorName: "Lourin",
          likes: 20,
          reviews: 5,
          
      },
      {
        title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
        desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational microlensing was used to observe the",
        img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
        authorName: "Lourin",
        likes: 20,
        reviews: 5,
        
    }
    
  ]
  const navigate = useNavigate();
  return (
    <>
    
      <section className="blog-section">
        <div className="text-center">
          <h1 className="container"  onClick={() => navigate("/ReviewDetails")}>Guru</h1>
          <p className="description">Blogs that are loved by the community. Updated every hour.</p>
        </div>
        <div className="blog-posts">
          {posts.map((item, key) => (
            <article className="post" key={key}>
              <a href={item.href}>
                <img src={item.img} alt={item.title} className="post-image" />
                <div className="author-info">
                  <img src={item.authorLogo} alt={item.authorName} className="author-image" />
                  <div className="author-details">
                    <span className="author-name">{item.authorName}</span>
                    <span className="post-date">{item.date}</span>
                  </div>
                </div>
                <div className="post-content">
                  <h3 className="post-title">{item.title}</h3>
                  <p className="post-description">{item.desc}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>
</>
  );
};
export default About;
