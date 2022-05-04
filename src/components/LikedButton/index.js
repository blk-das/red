import { useState, useEffect } from 'react'
import { HiOutlineHeart, HiHeart } from 'react-icons/hi'
import likePost from '../../services/likePost'
import './index.scss'

export default function LikedButton({ likes, userId, postId }) {
  const [liked, setLiked] = useState(false)
  const [likesPost, setLikesPost] = useState(likes.length)

  useEffect(() => {
    if (userId && likes.includes(userId)) {
      setLiked(true)
    } else {
      setLiked(false)
    }
  }, [userId])

  const handleClickLike = async () => {
    await likePost({ postId, userId })
    if (liked) {
      setLikesPost(likesPost - 1)
    } else {
      setLikesPost(likesPost + 1)
    }
    setLiked(!liked)
  }

  return (
    <div className='LikeButton'>
      <button
        onClick={handleClickLike}
        className={`idea__footer-like ${liked ? 'like' : ''}`}
        aria-label='like'
      >
        {liked ? <HiHeart /> : <HiOutlineHeart />}
      </button>
      {likesPost > 0 && <p>{likesPost}</p>}
    </div>
  )
}
