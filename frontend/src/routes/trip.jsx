import React from 'react'
import "./trip.css"
import Tripdata from './tripdata'
function trip() {
  return (
    <div className="trip">
      <h1 className='font-bold text-3xl'>Recent trips</h1>
      <p>You can discover unique destination using google map</p>
      <div className="tripcard">
      <Tripdata
      url="https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      heading="Trip to Indonesia"
      text="Indonesia was formerly known as the Dutch East Indies (or Netherlands East Indies). Although Indonesia did not become the country’s official name until the time of independence, the name was used as early as 1884 by a German geographer; it is thought to derive from the Greek indos, meaning “India,” and nesos, meaning “island.” After a period of occupation by the Japanese (1942–45) during World War II, Indonesia declared its independence from the Netherlands in 1945. Its struggle for independence, however, continued until 1949, when the Dutch officially recognized Indonesian sovereignty. It was not until the United Nations (UN) acknowledged the western segment of New Guinea as part of Indonesia in 1969 that the country took on its present form. The former"
      />
    
      <Tripdata
        heading="Trip to Thailand"
        url="https://plus.unsplash.com/premium_photo-1690959654865-a334658cd42d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
           text="Thailand[c] was known by outsiders prior to 1939 as Siam.[d] According to George Cœdès, the word Thai (ไทย) means 'free man' in the Thai language, differentiating the Thai from the natives encompassed in Thai society as serfs.[15]: 197  According to Chit Phumisak, Thai (ไท) simply means 'people' or 'human being'; his investigation shows that some rural areas used the word Thai instead of the usual Thai word khon (คน) for people.[16] According to Michel Ferlus, the ethnonyms Thai-Tai (or Thay-Tay) would have evolved from the etymon *k(ə)ri: 'human being'.[e][18]"
     />
     
     <Tripdata 
     url="https://plus.unsplash.com/premium_photo-1664910039021-a1bfcc6574b9?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     heading="Trip to Bhutan"
     text="The subalpine Himalayan mountains in the north rise from the country's lush subtropical plains in the south.[16] In the Bhutanese Himalayas, there are peaks higher than 7,000 metres (23,000 ft) above sea level. Gangkhar Puensum is Bhutan's highest peak and is the highest unclimbed mountain in the world. The wildlife of Bhutan is notable for its diversity,[17] including the Himalayan takin and golden langur. The capital and largest city is Thimphu, holding close to 15% of the population."
     />
      </div>
    </div>
  )
}

export default trip
