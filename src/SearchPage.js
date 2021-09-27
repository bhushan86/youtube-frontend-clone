import React from 'react'
import ChannelRow from './ChannelRow';
import TuneIcon from '@material-ui/icons/Tune';
import './SearchPage.css'
import VideoRow from './VideoRow';


function SearchPage() {
    return (
        <div className="searchPage">
           <div className="searchPage__filter">
           <TuneIcon/>

           <h2>FILTER</h2>
           </div>
            <hr/>
            <ChannelRow
            image ="https://yt3.ggpht.com/ytc/AKedOLR-pT_JEsz_hcaA4Gjx8DHcqJ8mS42aTRqcVy6P7w=s176-c-k-c0x00ffffff-no-rj"
            channel= "Marques Brownlee"
            verified
            subs ="1.43crore"
            noOfVideos={1362}
            description="MKBHD: Quality Tech Videos | YouTuber | Geek | Consumer Electronics | Tech Head | Internet Personality!"

            />
            <hr/>

            <VideoRow
             views="1.4m"
             subs="1.42 crore"
             description="My Mac Pro setup for early 2020! Rubik's cubes: https://instagram.com/p/B7OzlajowST/ Wallpaper: https://ibb.co/VmZfsTV X-Desk ..."
             timestamp="1 day ago"
             channel="Marques Brownlee "
             title="The MKBHD Setup Tour 2020!"
             image="https://i.ytimg.com/vi/pgmHkfvGYnY/hqdefault.jpg"
             
            />
            
            <VideoRow
             views="2M"
             subs="1.42 crore"
             description="0:00 Intro 1:02 Redesigned apps 2:56 Facetime features 5:31 Live Text 7:07 Notifications 8:13 Focus Modes 10:15 Other Stuff + .."
             timestamp="1 week"
             channel="Marques Brownlee "
             title="iOS 15 Hands-On: Top 5 New Features!"
             image="https://i.ytimg.com/vi/O1sZcX-BBSA/hqdefault.jpg"
             
            />
              <VideoRow
             views="1.5M"
             subs="1.42 crore"
             description="The world of laptops is sick: If it's not a gaming laptop, the other features matter even more! The ultrabook definition: ..."
             timestamp="1 week"
             channel="Marques Brownlee "
             title="Why Everything is an Ultrabook!"
             image="https://i.ytimg.com/vi/U3JprndeVYU/hqdefault.jpgs"
             
            />
        </div>
    )
}

export default SearchPage
