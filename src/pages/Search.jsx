import React from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();
  const stores = [
    {
      image: '/src/assets/WishList.png',
      title: 'WishList',
      date: '01 Sept - 03 Oct 2024',
      sold: '25',
      country: 'South Korea',
      rating: '4.9'
    },
    {
      image: '/src/assets/BoutiqueID.png',
      title: 'BoutiqueID',
      date: '01 Sept - 15 Oct 2024',
      sold: '15',
      country: 'South Korea',
      rating: '4.9'
    },
    {
      image: '/src/assets/PickShop.png',
      title: 'PickShop',
      date: '02 Sept - 30 Sept 2024',
      sold: '115',
      country: 'South Korea',
      rating: '4.9'
    },
    {
      image: '/src/assets/LuxuryList.png',
      title: 'LuxuryList',
      date: '01 Sept - 10 Oct 2024',
      sold: '2985',
      country: 'South Korea',
      rating: '5.0'
    },
    {
      image: '/src/assets/TreasureHunt.png',
      title: 'TreasureHunt',
      date: '01 Sept - 01 Oct 2024',
      sold: '1467',
      country: 'South Korea',
      rating: '4.6'
    },
    {
      image: '/src/assets/FindsOfficial.png',
      title: 'FindsOfficial',
      date: '01 Sept - 30 Sept 2024',
      sold: '95',
      country: 'South Korea',
      rating: '4.9'
    }
  ]

  const SearchItem = ({ image, title, date, sold, country, rating }) => (
    <div className="flex items-center gap-6 p-6 border-b border-gray-200">
      <img 
        src={image} 
        alt={title} 
        className="w-48 h-32 rounded-lg object-cover"
      />
      
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#fb8500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-600"><span className="font-bold">Date:</span> {date}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#fb8500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="text-gray-600"><span className="font-bold">Sold:</span> {sold} Items</span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#fb8500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
                <span className="text-gray-600"><span className="font-bold">Country:</span> {country}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold">{rating}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <button className="w-32 px-4 py-2 text-[#fb8500] border border-[#fb8500] rounded-full hover:bg-[#fb8500] hover:text-white transition-colors"
            onClick={() => navigate('/store')}>
              View Store
            </button>
            <button className="w-32 px-4 py-2 bg-[#fb8500] text-white rounded-full hover:bg-[#e67a00] transition-colors">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>

      <div className="container mx-auto px-4 mt-16">
        <h2 className="text-2xl font-medium mb-8">
          SEARCH RESULT FOR <span className="text-[#fb8500]">"South Korea"</span> and <span className="text-[#fb8500]">"02 Sept 2024"</span>
        </h2>

        <div className="space-y-6">
          {stores.map((store, index) => (
            <SearchItem key={index} {...store} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="px-8 py-2 bg-[#fb8500] text-white rounded-full hover:bg-[#e67a00] transition-colors">
            Show More
          </button>
        </div>
      </div>

    </>
  )
}

export default Search