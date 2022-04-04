import  '../styles/post.css'

export default function Post() {
  return (
    <div className='post'>
        <img className='postImg'
          src="https://unsplash.com/photos/6MnzBx6I2o8/download?ixid=MnwxMjA3fDB8MXxhbGx8MTB8fHx8fHwyfHwxNjQ4NzI5ODI0&force=true"
          alt=""
        />
      <div className="postInfo">
        <div className="postCats">
          
          <span className="postCat">Music</span>
          <span className="postCat">LIfeStyle</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet, consectet. </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className='PostDesc'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, perspiciatis? Hic sit perferendis illo soluta praesentium aliquam. Nobis, nostrum deserunt. Earum, sequi similique? Esse impedit, similique necessitatibus eaque dolorum non? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aut laudantium repellat, enim alias atque totam magnam unde culpa aperiam eligendi, vero deserunt. Modi harum alias blanditiis possimus nam assumenda!

      </p>
    </div>
  )
}
