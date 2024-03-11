import BlogItem from "./BlogItem";

import blogs from '../content/blogs.json';

import imageBlogOne from '../../images/horizental1.png';
import imageBlogTwo from '../../images/horizental2.png';
import rightArrowIcon from '../../images/icons/right-arrow.png';

const BlogList = () => {
  return (
    <>
      {/* Blog Heading */}
      <div id="menu-heading-second">
        <h3 id="menu-heading-second-text">Grow Your Business</h3>
      </div>

      {/* h-list */}
      <div id="h-list-container">

        <div id="h-list">
          <BlogItem
            imageSrc={imageBlogOne}
            blogTitle={blogs.blog1.title}
          />
          <BlogItem
            imageSrc={imageBlogTwo}
            blogTitle={blogs.blog2.title}
          />
          <BlogItem
            imageSrc={imageBlogOne}
            blogTitle={blogs.blog3.title}
          />

          {/* Scroll Button */}
          <div id="div-scroll">
            <img
              id="icon-scroll"
              src={rightArrowIcon}
              alt="right-arrow"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogList;