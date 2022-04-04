import React from 'react'
import '../styles/singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src="https://unsplash.com/photos/j4n1YIK0e9k/download?ixid=MnwxMjA3fDB8MXxhbGx8MTR8fHx8fHwyfHwxNjQ4NzQ3ODU5&force=true" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">Lorem ipsum dolor, consectetur.
        <div className="singlePostEdit">
        <i className=" singlePostIcon fa-solid fa-user-pen"></i>
        <i className=" singlePostIcon fa-solid fa-trash"></i>
        
          </div></h1>
          <div className="singlePostInfo">
            <span className="singlePostAuthor">Author:<b>Aparajita</b></span>
            <span className="singlePostDate">1 hour ago</span>
          </div>
          <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde placeat aliquid asperiores, optio suscipit quo fugit ab. Voluptates ipsam ratione excepturi tempora architecto mollitia alias esse sequi ullam! Qui illum voluptatem ea molestiae? Ipsum consequatur sit unde animi vel, totam nemo. Inventore facere est tenetur, deserunt dignissimos placeat numquam asperiores aperiam fuga! Optio, saepe assumenda suscipit corrupti hic voluptatum similique quasi ullam recusandae nobis totam, ratione ipsum ut, neque quos. Perspiciatis architecto ipsam sapiente fuga similique praesentium laudantium error voluptas. Velit adipisci architecto corporis odit? Earum expedita nihil dolores cumque aliquam, soluta veniam ipsam similique assumenda corporis rem deserunt neque quisquam quas rerum sit aspernatur architecto debitis. Hic, fugiat voluptatum? Laudantium eligendi pariatur impedit animi provident ducimus saepe reiciendis dignissimos obcaecati voluptates perferendis vero cupiditate maiores unde fugiat exercitationem repellendus maxime vel dicta, molestiae incidunt! Sit, ducimus aliquid sint explicabo perspiciatis odio dolore corrupti rerum consectetur illum ratione exercitationem, places?</p>
      </div>
    </div>
  )
}
