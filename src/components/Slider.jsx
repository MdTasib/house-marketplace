import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore'
import { db } from '../firebase.config'
import Spinner from './Spinner'
import { Carousel } from 'react-responsive-carousel'

function Slider() {
  const [loading, setLoading] = useState(true)
  const [listings, setListings] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    const fetchListings = async () => {
      const listingsRef = collection(db, 'listings')
      const q = query(listingsRef, orderBy('timestamp', 'desc'), limit(10))
      const querySnap = await getDocs(q)

      let listings = []

      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        })
      })

      setListings(listings)
      setLoading(false)
    }

    fetchListings()
  }, [])

  if (loading) {
    return <Spinner />
  }

  if (listings.length === 0) {
    return <></>
  }

  return (
    listings && (
      <>
        <p className='exploreHeading'>Recommended</p>
        <div className="carousel-wrapper">
          <Carousel infiniteLoop useKeyboardArrows autoPlay>
              {
                listings.map(({ data, id }) => (
                  <div style={{
                    backgroundSize: 'cover',
                    height: '70vh'
                  }}
                  key={id}
                  onClick={() => navigate(`/category/${data.type}/${id}`)}
                  className='swiperSlideDiv'>
                    <img src={data.imageUrls[0]} alt={id}/>
                    <p className='swiperSlideText'>{data.name}</p>
                    <p className='swiperSlidePrice'>
                      ${data.discountedPrice ?? data.regularPrice}{' '}
                      {data.type === 'rent' && '/ month'}
                    </p>
                  </div>
                ))
              }
          </Carousel>
       </div>
      </>
    )
  )
}

export default Slider
